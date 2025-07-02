import {
	ConflictException,
	Injectable,
	InternalServerErrorException,
	NotFoundException,
	UnauthorizedException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AuthMethod, User } from "@prisma/generated";
import { verify } from "argon2";
import { Request, Response } from "express";

import { UserService } from "@/core/user/user.service";
import { PrismaService } from "@/shared/infra/prisma/prisma.service";

import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { EmailConfirmationService } from "./email-confirmation/email-confirmation.service";
import { ProviderService } from "./provider/provider.service";
import { TwoFactorAuthService } from "./two-factor-auth/two-factor-auth.service";

/**
 * Service for authentication and session management of users.
 */
@Injectable()
export class AuthService {
	/**
	 * Constructor for the authentication service.
	 * @param prismaService - Service for working with the Prisma database.
	 * @param userService - Service for working with users.
	 * @param configService - Service for working with the application configuration.
	 * @param providerService - Service for working with authentication providers.
	 * @param emailConfirmationService - Service for working with email confirmation.
	 * @param twoFactorAuthService - Service for working with two-factor authentication.
	 */
	public constructor(
		private readonly prismaService: PrismaService,
		private readonly userService: UserService,
		private readonly configService: ConfigService,
		private readonly providerService: ProviderService,
		private readonly emailConfirmationService: EmailConfirmationService,
		private readonly twoFactorAuthService: TwoFactorAuthService,
	) {}

	/**
	 * Registers a new user.
	 * @param dto - Object with data for user registration.
	 * @returns Object with a message about successful registration.
	 * @throws ConflictException - If a user with this email already exists.
	 */
	public async register(dto: RegisterDto) {
		const isExists = await this.userService.findByEmail(dto.email);

		if (isExists) {
			throw new ConflictException(
				"Registration failed. A user with this email already exists. Please use a different email or log in to the system.",
			);
		}

		const newUser = await this.userService.create(
			dto.email,
			dto.password,
			dto.name,
			"",
			AuthMethod.CREDENTIALS,
			false,
		);

		await this.emailConfirmationService.sendVerificationToken(newUser.email);

		return {
			message:
				"You have successfully registered. Please confirm your email. A message has been sent to your email address.",
		};
	}

	/**
	 * Performs user login to the system.
	 * @param req - Express request object.
	 * @param dto - Object with data for user login.
	 * @returns Object with the user after successful login.
	 * @throws NotFoundException - If the user is not found.
	 * @throws UnauthorizedException - If the password is incorrect or the email is not confirmed.
	 */
	public async login(req: Request, dto: LoginDto) {
		const user = await this.userService.findByEmail(dto.email);

		if (!user || !user.password) {
			throw new NotFoundException("User not found. Please check the entered data");
		}

		const isValidPassword = await verify(user.password, dto.password);

		if (!isValidPassword) {
			throw new UnauthorizedException(
				"Invalid password. Please try again or reset your password if you forgot it.",
			);
		}

		if (!user.isVerified) {
			await this.emailConfirmationService.sendVerificationToken(user.email);
			throw new UnauthorizedException(
				"Your email is not confirmed. Please check your email and confirm the address.",
			);
		}

		if (user.isTwoFactorEnabled) {
			if (!dto.code) {
				await this.twoFactorAuthService.sendTwoFactorToken(user.email);

				return {
					message: "Check your email. A two-factor authentication code has been sent.",
				};
			}

			await this.twoFactorAuthService.validateTwoFactorToken(user.email, dto.code);
		}

		return this.saveSession(req, user);
	}

	/**
	 * Extracts the user's profile from the provider's authorization code.
	 * @param req - Express request object.
	 * @param provider - Name of the authentication provider.
	 * @param code - Provider's authorization code.
	 * @returns Object with the user after successful authentication.
	 */
	public async extractProfileFromCode(req: Request, provider: string, code: string) {
		const providerInstance = this.providerService.findByService(provider);
		if (!providerInstance) {
			throw new NotFoundException("Provider not found");
		}
		const profile = await providerInstance.findUserByCode(code);

		let account = await this.prismaService.account.findFirst({
			where: {
				provider: profile.provider,
				providerAccountId: profile.id,
			},
		});

		let user: User | null = null;

		if (account?.userId) {
			user = await this.userService.findById(account.userId);
		} else {
			user = await this.userService.findByEmail(profile.email);
			if (!user) {
				user = await this.userService.create(
					profile.email,
					"",
					profile.name,
					profile.picture,
					AuthMethod[profile.provider.toUpperCase()],
					true,
				);
			}
			account = await this.prismaService.account.create({
				data: {
					userId: user.id,
					type: "oauth",
					provider: profile.provider,
					providerAccountId: profile.id,
					accessToken: profile.access_token,
					refreshToken: profile.refresh_token,
					expiresAt: profile.expires_at ?? 0,
				},
			});
		}

		return this.saveSession(req, user);
	}

	/**
	 * Ends the current user session.
	 * @param req - Express request object.
	 * @param res - Express response object.
	 * @returns Promise that resolves after the session is ended.
	 * @throws InternalServerErrorException - If there is a problem ending the session.
	 */
	public async logout(req: Request, res: Response) {
		return new Promise((resolve, reject) => {
			req.session.destroy((err) => {
				if (err) {
					return reject(
						new InternalServerErrorException(
							"Failed to end the session. There may be a problem with the server or the session has already been ended.",
						),
					);
				}
				res.clearCookie(this.configService.getOrThrow<string>("SESSION_NAME"), {
					domain: "." + this.configService.getOrThrow<string>("SESSION_DOMAIN"),
				});
				resolve({
					message: "Session ended",
				});
			});
		});
	}

	/**
	 * Saves the user session.
	 * @param req - Express request object.
	 * @param user - Object with the user.
	 * @returns Promise that resolves after the session is saved.
	 * @throws InternalServerErrorException - If there is a problem saving the session.
	 */
	public async saveSession(req: Request, user: User) {
		return new Promise((resolve, reject) => {
			req.session.userId = user.id;

			req.session.save((err) => {
				console.log(err);

				if (err) {
					return reject(
						new InternalServerErrorException(
							"Failed to save the session. Please check if the session parameters are configured correctly.",
						),
					);
				}

				resolve({
					user,
				});
			});
		});
	}
}
