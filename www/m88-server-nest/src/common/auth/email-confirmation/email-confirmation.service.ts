import {
	BadRequestException,
	forwardRef,
	Inject,
	Injectable,
	NotFoundException,
} from "@nestjs/common";
import { TokenType } from "@prisma/generated";
import { Request } from "express";
import { v4 as uuidv4 } from "uuid";

import { UserService } from "@/core/user/user.service";
import { PrismaService } from "@/shared/infra/prisma/prisma.service";
import { MailService } from "@/shared/libs/mail/mail.service";

import { AuthService } from "../auth.service";

import { ConfirmationDto } from "./dto/confirmation.dto";

/**
 * Service for managing email confirmation.
 */
@Injectable()
export class EmailConfirmationService {
	/**
	 * Constructor for the email confirmation service.
	 * @param prismaService - Service for working with the Prisma database.
	 * @param mailService - Service for sending email messages.
	 * @param userService - Service for working with users.
	 * @param accountService - Service for authentication (injected through forwardRef).
	 */
	public constructor(
		private readonly prismaService: PrismaService,
		private readonly mailService: MailService,
		private readonly userService: UserService,
		@Inject(forwardRef(() => AuthService))
		private readonly authService: AuthService,
	) {}

	/**
	 * Processes a new request for email confirmation.
	 * @param req - Express request object.
	 * @param dto - DTO with the confirmation token.
	 * @returns User session after successful confirmation.
	 * @throws NotFoundException - If the token or user is not found.
	 * @throws BadRequestException - If the token has expired.
	 */
	public async newVerification(req: Request, dto: ConfirmationDto) {
		const existingToken = await this.prismaService.token.findUnique({
			where: {
				token: dto.token,
				type: TokenType.VERIFICATION,
			},
		});

		if (!existingToken) {
			throw new NotFoundException(
				"The confirmation token was not found. Please make sure you have the correct token.",
			);
		}

		const hasExpired = new Date(existingToken.expiresIn) < new Date();

		if (hasExpired) {
			throw new BadRequestException(
				"The confirmation token has expired. Please request a new token for confirmation.",
			);
		}

		const existingUser = await this.userService.findByEmail(existingToken.email);

		if (!existingUser) {
			throw new NotFoundException(
				"The user was not found. Please check the entered email address and try again.",
			);
		}

		await this.prismaService.user.update({
			where: {
				id: existingUser.id,
			},
			data: {
				isVerified: true,
			},
		});

		await this.prismaService.token.delete({
			where: {
				id: existingToken.id,
				type: TokenType.VERIFICATION,
			},
		});

		return this.authService.saveSession(req, existingUser);
	}

	/**
	 * Sends a confirmation token to the specified email.
	 * @param email - User email address.
	 * @returns true if the token was successfully sent.
	 */
	public async sendVerificationToken(email: string) {
		const verificationToken = await this.generateVerificationToken(email);

		await this.mailService.sendConfirmationEmail(
			verificationToken.email,
			verificationToken.token,
		);

		return true;
	}

	/**
	 * Generates a new email confirmation token.
	 * @param email - User email address.
	 * @returns Object of the confirmation token.
	 */
	private async generateVerificationToken(email: string) {
		const token = uuidv4();
		const expiresIn = new Date(new Date().getTime() + 3600 * 1000);

		const existingToken = await this.prismaService.token.findFirst({
			where: {
				email,
				type: TokenType.VERIFICATION,
			},
		});

		if (existingToken) {
			await this.prismaService.token.delete({
				where: {
					id: existingToken.id,
					type: TokenType.VERIFICATION,
				},
			});
		}

		const verificationToken = await this.prismaService.token.create({
			data: {
				email,
				token,
				expiresIn,
				type: TokenType.VERIFICATION,
			},
		});

		return verificationToken;
	}
}
