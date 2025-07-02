import { Body, Controller, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { Recaptcha } from "@nestlab/google-recaptcha";

import { NewPasswordDto } from "./dto/new-password.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";
import { PasswordRecoveryService } from "./password-recovery.service";

/**
 * Controller for managing password recovery.
 */
@Controller("auth/recovery")
export class PasswordRecoveryController {
	/**
	 * Constructor for the password recovery controller.
	 * @param passwordRecoveryService - Service for managing password recovery.
	 */
	public constructor(private readonly passwordRecoveryService: PasswordRecoveryService) {}

	/**
	 * Requests a password reset and sends a token to the specified email.
	 * @param dto - DTO with the user's email address.
	 * @returns true if the token was successfully sent.
	 */
	@Recaptcha()
	@Post("reset")
	@HttpCode(HttpStatus.OK)
	public async resetPassword(@Body() dto: ResetPasswordDto) {
		return this.passwordRecoveryService.reset(dto);
	}

	/**
	 * Sets a new password for the user.
	 * @param dto - DTO with the new password.
	 * @param token - Token for password reset.
	 * @returns true if the password was successfully changed.
	 */
	@Recaptcha()
	@Post("new/:token")
	@HttpCode(HttpStatus.OK)
	public async newPassword(@Body() dto: NewPasswordDto, @Param("token") token: string) {
		return this.passwordRecoveryService.new(dto, token);
	}
}
