import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { TokenType } from "@prisma/generated";
import { hash } from "argon2";
import { v4 as uuidv4 } from "uuid";

import { UserService } from "@/core/user/user.service";
import { PrismaService } from "@/shared/infra/prisma/prisma.service";
import { MailService } from "@/shared/libs/mail/mail.service";

import { NewPasswordDto } from "./dto/new-password.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";

/**
 * Service for managing password recovery.
 */
@Injectable()
export class PasswordRecoveryService {
	/**
	 * Constructor for the password recovery service.
	 * @param prismaService - Service for working with the Prisma database.
	 * @param userService - Service for working with users.
	 * @param mailService - Service for sending email messages.
	 */
	public constructor(
		private readonly prismaService: PrismaService,
		private readonly userService: UserService,
		private readonly mailService: MailService,
	) {}

	/**
	 * Requests a password reset and sends a token to the specified email.
	 * @param dto - DTO with the user's email address.
	 * @returns true if the token was successfully sent.
	 * @throws NotFoundException - If the user is not found.
	 */
	public async reset(dto: ResetPasswordDto) {
		const existingUser = await this.userService.findByEmail(dto.email);

		if (!existingUser) {
			throw new NotFoundException(
				"The user was not found. Please check the entered email address and try again.",
			);
		}

		const passwordResetToken = await this.generatePasswordResetToken(existingUser.email);

		await this.mailService.sendPasswordResetEmail(
			passwordResetToken.email,
			passwordResetToken.token,
		);

		return true;
	}

	/**
	 * Sets a new password for the user.
	 * @param dto - DTO with the new password.
	 * @param token - Token for password reset.
	 * @returns true if the password was successfully changed.
	 * @throws NotFoundException - If the token or user is not found.
	 * @throws BadRequestException - If the token has expired.
	 */
	public async new(dto: NewPasswordDto, token: string) {
		const existingToken = await this.prismaService.token.findFirst({
			where: {
				token,
				type: TokenType.PASSWORD_RESET,
			},
		});

		if (!existingToken) {
			throw new NotFoundException(
				"The token was not found. Please check the correctness of the entered token or request a new one.",
			);
		}

		const hasExpired = new Date(existingToken.expiresIn) < new Date();

		if (hasExpired) {
			throw new BadRequestException(
				"The token has expired. Please request a new token for password reset.",
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
				password: await hash(dto.password),
			},
		});

		await this.prismaService.token.delete({
			where: {
				id: existingToken.id,
				type: TokenType.PASSWORD_RESET,
			},
		});

		return true;
	}

	/**
	 * Generates a token for password reset.
	 * @param email - User email address.
	 * @returns Object of the password reset token.
	 */
	private async generatePasswordResetToken(email: string) {
		const token = uuidv4();
		const expiresIn = new Date(new Date().getTime() + 3600 * 1000);

		const existingToken = await this.prismaService.token.findFirst({
			where: {
				email,
				type: TokenType.PASSWORD_RESET,
			},
		});

		if (existingToken) {
			await this.prismaService.token.delete({
				where: {
					id: existingToken.id,
					type: TokenType.PASSWORD_RESET,
				},
			});
		}

		const passwordResetToken = await this.prismaService.token.create({
			data: {
				email,
				token,
				expiresIn,
				type: TokenType.PASSWORD_RESET,
			},
		});

		return passwordResetToken;
	}
}
