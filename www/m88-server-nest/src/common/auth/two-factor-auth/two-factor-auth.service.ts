import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { TokenType } from "@prisma/generated";

import { PrismaService } from "@/shared/infra/prisma/prisma.service";
import { MailService } from "@/shared/libs/mail/mail.service";

/**
 * Service for managing two-factor authentication.
 */
@Injectable()
export class TwoFactorAuthService {
	/**
	 * Constructor for the two-factor authentication service.
	 * @param prismaService - Service for working with the Prisma database.
	 * @param mailService - Service for sending email messages.
	 */
	public constructor(
		private readonly prismaService: PrismaService,
		private readonly mailService: MailService,
	) {}

	/**
	 * Checks the two-factor authentication token.
	 * @param email - User email address.
	 * @param code - Two-factor authentication code entered by the user.
	 * @returns true if the token is valid; otherwise throws exceptions.
	 * @throws NotFoundException - If the token is not found.
	 * @throws BadRequestException - If the code is incorrect or the token has expired.
	 */
	public async validateTwoFactorToken(email: string, code: string) {
		const existingToken = await this.prismaService.token.findFirst({
			where: {
				email,
				type: TokenType.TWO_FACTOR,
			},
		});

		if (!existingToken) {
			throw new NotFoundException(
				"The two-factor authentication token was not found. Make sure you requested a token for this email address.",
			);
		}

		if (existingToken.token !== code) {
			throw new BadRequestException(
				"Invalid two-factor authentication code. Please check the entered code and try again.",
			);
		}

		const hasExpired = new Date(existingToken.expiresIn) < new Date();

		if (hasExpired) {
			throw new BadRequestException(
				"The two-factor authentication token has expired. Please request a new token.",
			);
		}

		await this.prismaService.token.delete({
			where: {
				id: existingToken.id,
				type: TokenType.TWO_FACTOR,
			},
		});

		return true;
	}

	/**
	 * Sends a two-factor authentication token to the specified email.
	 * @param email - User email address.
	 * @returns true if the token was successfully sent.
	 */
	public async sendTwoFactorToken(email: string) {
		const twoFactorToken = await this.generateTwoFactorToken(email);

		await this.mailService.sendTwoFactorTokenEmail(
			twoFactorToken.email,
			twoFactorToken.token,
		);

		return true;
	}

	/**
	 * Generates a new two-factor authentication token.
	 * @param email - User email address.
	 * @returns Object of the two-factor authentication token.
	 */
	private async generateTwoFactorToken(email: string) {
		const token = Math.floor(Math.random() * (1000000 - 100000) + 100000).toString();
		const expiresIn = new Date(new Date().getTime() + 300000);

		const existingToken = await this.prismaService.token.findFirst({
			where: {
				email,
				type: TokenType.TWO_FACTOR,
			},
		});

		if (existingToken) {
			await this.prismaService.token.delete({
				where: {
					id: existingToken.id,
					type: TokenType.TWO_FACTOR,
				},
			});
		}

		const twoFactorToken = await this.prismaService.token.create({
			data: {
				email,
				token,
				expiresIn,
				type: TokenType.TWO_FACTOR,
			},
		});

		return twoFactorToken;
	}
}
