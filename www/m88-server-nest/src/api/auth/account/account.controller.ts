import { Turnstile } from "@magl88/nestjs-cloudflare-captcha";
import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Patch,
	Post,
} from "@nestjs/common";
import { ApiHeader, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import type { User } from "@prisma/generated";

import { Authorization, Authorized, ClientIp, UserAgent } from "@/common/decorators";

import { AccountService } from "./account.service";
import {
	AccountResponse,
	ChangeEmailRequest,
	ChangePasswordRequest,
	CreateUserRequest,
	CreateUserResponse,
	PasswordResetRequest,
	SendPasswordResetRequest,
} from "./dto";

@ApiTags("Account")
@Controller("auth/account")
export class AccountController {
	public constructor(private readonly accountService: AccountService) {}

	@ApiOperation({
		summary: "Fetch account",
		description: "Fetch account information from the current session.",
	})
	@ApiOkResponse({
		type: AccountResponse,
	})
	@ApiHeader({
		name: "X-Session-Token",
		required: true,
	})
	@Authorization()
	@Get()
	@HttpCode(HttpStatus.OK)
	public async me(@Authorized() user: User) {
		return this.accountService.getMe(user);
	}

	@ApiOperation({
		summary: "Create Account",
		description: "Create a new account",
	})
	@ApiOkResponse({
		type: CreateUserResponse,
	})
	@Turnstile()
	@Post("create")
	@HttpCode(HttpStatus.OK)
	public async create(
		@Body() dto: CreateUserRequest,
		@ClientIp() ip: string,
		@UserAgent() userAgent: string,
	) {
		return this.accountService.create(dto, ip, userAgent);
	}

	@ApiOperation({
		summary: "Send Email Verification",
		description: "Send a verification email to the user.",
	})
	@ApiOkResponse({
		type: Boolean,
	})
	@ApiHeader({
		name: "X-Session-Token",
		required: true,
	})
	@Authorization()
	@Post("verify")
	@HttpCode(HttpStatus.OK)
	public async sendEmailVerification(@Authorized() user: User) {
		return this.accountService.sendEmailVerification(user);
	}

	@ApiOperation({
		summary: "Verify Email",
		description: "Verify an email address.",
	})
	@ApiOkResponse({
		type: Boolean,
	})
	@Post("verify/:code")
	@HttpCode(HttpStatus.OK)
	public async verfiyEmail(@Param("code") code: string) {
		return this.accountService.verifyEmail(code);
	}

	@ApiOperation({
		summary: "Send Password Reset",
		description: "Send an email to reset account password.",
	})
	@ApiOkResponse({
		type: Boolean,
	})
	@Turnstile()
	@Post("reset_password")
	@HttpCode(HttpStatus.OK)
	public async sendPasswordReset(@Body() dto: SendPasswordResetRequest) {
		return this.accountService.sendPasswordReset(dto);
	}

	@ApiOperation({
		summary: "Password Reset",
		description: "Confirm password reset and change the password.",
	})
	@ApiOkResponse({
		type: Boolean,
	})
	@Patch("reset_password")
	@HttpCode(HttpStatus.OK)
	public async passwordReset(@Body() dto: PasswordResetRequest) {
		return this.accountService.passwordReset(dto);
	}

	@ApiOperation({
		summary: "Change Email",
		description: "Change the associated account email.",
	})
	@ApiOkResponse({
		type: Boolean,
	})
	@ApiHeader({
		name: "X-Session-Token",
		required: true,
	})
	@Authorization()
	@Patch("change/email")
	@HttpCode(HttpStatus.OK)
	public async changeEmail(@Authorized() user: User, @Body() dto: ChangeEmailRequest) {
		return this.accountService.changeEmail(user, dto);
	}

	@ApiOperation({
		summary: "Change Password",
		description: "Change the current account password.",
	})
	@ApiOkResponse({
		type: Boolean,
	})
	@ApiHeader({
		name: "X-Session-Token",
		required: true,
	})
	@Authorization()
	@Patch("change/password")
	@HttpCode(HttpStatus.OK)
	public async changePassword(
		@Authorized() user: User,
		@Body() dto: ChangePasswordRequest,
	) {
		return this.accountService.changePassword(user, dto);
	}
}
