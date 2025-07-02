import {
	BadRequestException,
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Post,
	Query,
	Req,
	Res,
	UseGuards,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Recaptcha } from "@nestlab/google-recaptcha";
import { Request, Response } from "express";

import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { AuthProviderGuard } from "./guards/provider.guard";
import { ProviderService } from "./provider/provider.service";

/**
 * Controller for managing user authentication.
 */
@Controller("auth")
export class AuthController {
	/**
	 * Constructor for the authentication controller.
	 * @param authService - Service for authentication.
	 * @param configService - Service for working with the application configuration.
	 * @param providerService - Service for working with authentication providers.
	 */
	public constructor(
		private readonly authService: AuthService,
		private readonly configService: ConfigService,
		private readonly providerService: ProviderService,
	) {}

	/**
	 * Registration of a new user.
	 * @param dto - Object with data for user registration.
	 * @returns Response from the authentication service.
	 */
	@Recaptcha()
	@Post("register")
	@HttpCode(HttpStatus.OK)
	public async register(@Body() dto: RegisterDto) {
		return this.authService.register(dto);
	}

	/**
	 * User login to the system.
	 * @param req - Express request object.
	 * @param dto - Object with data for user login.
	 * @returns Response from the authentication service.
	 */
	@Recaptcha()
	@Post("login")
	@HttpCode(HttpStatus.OK)
	public async login(@Req() req: Request, @Body() dto: LoginDto) {
		return this.authService.login(req, dto);
	}

	/**
	 * Processing the callback from the authentication provider.
	 * @param req - Express request object.
	 * @param res - Express response object.
	 * @param code - Authorization code received from the provider.
	 * @param provider - Name of the authentication provider.
	 * @returns Redirect to the settings page.
	 * @throws BadRequestException - If the authorization code was not provided.
	 */
	@UseGuards(AuthProviderGuard)
	@Get("/oauth/callback/:provider")
	public async callback(
		@Req() req: Request,
		@Res({ passthrough: true }) res: Response,
		@Query("code") code: string,
		@Param("provider") provider: string,
	) {
		if (!code) {
			throw new BadRequestException("The authorization code was not provided.");
		}

		await this.authService.extractProfileFromCode(req, provider, code);

		return res.redirect(
			`${this.configService.getOrThrow<string>("APPLICATION_URL")}/dashboard/settings`,
		);
	}

	/**
	 * Connecting a user to an authentication provider.
	 * @param provider - Name of the authentication provider.
	 * @returns URL for authentication through the provider.
	 */
	@UseGuards(AuthProviderGuard)
	@Get("/oauth/connect/:provider")
	public async connect(@Param("provider") provider: string) {
		const providerInstance = this.providerService.findByService(provider);

		return {
			url: providerInstance?.getAuthUrl() ?? "",
		};
	}

	/**
	 * Ending the user session.
	 * @param req - Express request object.
	 * @param res - Express response object.
	 * @returns Response from the authentication service.
	 */
	@Post("logout")
	@HttpCode(HttpStatus.OK)
	public async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
		return this.authService.logout(req, res);
	}
}
