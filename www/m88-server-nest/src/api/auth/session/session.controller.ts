import { Turnstile } from "@magl88/nestjs-cloudflare-captcha";
import {
	Body,
	Controller,
	Delete,
	Get,
	Headers,
	HttpCode,
	HttpStatus,
	Param,
	Post,
} from "@nestjs/common";
import {
	ApiExtraModels,
	ApiOkResponse,
	ApiOperation,
	ApiTags,
	refs,
} from "@nestjs/swagger";
import type { User } from "@prisma/generated";

import { Authorization, Authorized, ClientIp, UserAgent } from "@/common/decorators";

import {
	LoginMfaResponse,
	LoginRequest,
	LoginSessionResponse,
	SessionResponse,
} from "./dto";
import { SessionService } from "./session.service";

@ApiTags("Session")
@Controller("auth/session")
export class SessionController {
	public constructor(private readonly sessionService: SessionService) {}

	@ApiOperation({ summary: "Login", description: "Login to an account." })
	@ApiExtraModels(LoginSessionResponse, LoginMfaResponse)
	@ApiOkResponse({
		schema: { anyOf: refs(LoginSessionResponse, LoginMfaResponse) },
	})
	@Turnstile()
	@Post("login")
	@HttpCode(HttpStatus.OK)
	public async login(
		@Body() dto: LoginRequest,
		@ClientIp() ip: string,
		@UserAgent() userAgent: string,
	) {
		return this.sessionService.login(dto, ip, userAgent);
	}

	@ApiOperation({
		summary: "Admin Login",
		description: "Login as an administrator.",
	})
	@ApiExtraModels(LoginSessionResponse, LoginMfaResponse)
	@ApiOkResponse({
		schema: { anyOf: refs(LoginSessionResponse, LoginMfaResponse) },
	})
	@Turnstile()
	@Post("login/admin")
	@HttpCode(HttpStatus.OK)
	public async loginAdmin(
		@Body() dto: LoginRequest,
		@ClientIp() ip: string,
		@UserAgent() userAgent: string,
	) {
		return this.sessionService.loginAdmin(dto, ip, userAgent);
	}

	@ApiOperation({
		summary: "Logout",
		description: "Delete current session.",
	})
	@ApiOkResponse({
		example: true,
		type: Boolean,
	})
	@Authorization()
	@Post("logout")
	@HttpCode(HttpStatus.OK)
	public async logout(@Headers("x-session-token") token: string) {
		return this.sessionService.logout(token);
	}

	@ApiOperation({
		summary: "Fetch Sessions",
		description: "Fetch all sessions associated with this account.",
	})
	@ApiOkResponse({
		type: [SessionResponse],
	})
	@Authorization()
	@Get("all")
	@HttpCode(HttpStatus.OK)
	public async getSessions(
		@Authorized() user: User,
		@Headers("x-session-token") token: string,
	) {
		return this.sessionService.getSessions(user, token);
	}

	@ApiOperation({
		summary: "Delete All Sessions​",
		description: "Delete all active sessions, optionally including current one.",
	})
	@ApiOkResponse({
		example: true,
		type: Boolean,
	})
	@Authorization()
	@Delete("all")
	@HttpCode(HttpStatus.OK)
	public async removeAll(
		@Authorized() user: User,
		@Headers("x-session-token") token: string,
	) {
		return this.sessionService.removeAll(user, token);
	}

	@ApiOperation({
		summary: "Revoke Session​",
		description: "Delete a specific active session.",
	})
	@ApiOkResponse({
		example: true,
		type: Boolean,
	})
	@Authorization()
	@Delete(":id")
	@HttpCode(HttpStatus.OK)
	public async revoke(
		@Param("id") id: string,
		@Headers("x-session-token") token: string,
	) {
		return this.sessionService.revoke(id, token);
	}
}
