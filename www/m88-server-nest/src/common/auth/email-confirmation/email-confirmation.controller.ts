import { Body, Controller, HttpCode, HttpStatus, Post, Req } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Request } from "express";

import { ConfirmationDto } from "./dto/confirmation.dto";
import { EmailConfirmationEntity } from "./email-confirmation.entity";
import { EmailConfirmationService } from "./email-confirmation.service";

/**
 * Controller for managing email confirmation.
 */
@Controller("auth/email-confirmation")
export class EmailConfirmationController {
	/**
	 * Constructor for the email confirmation controller.
	 * @param emailConfirmationService - Service for managing email confirmation.
	 */
	public constructor(
		private readonly emailConfirmationService: EmailConfirmationService,
	) {}

	/**
	 * Processes the request for email confirmation.
	 * @param req - Express request object.
	 * @param dto - DTO with the confirmation token.
	 * @returns User session after successful confirmation.
	 */
	@ApiOperation({
		summary: "New verification",
		description: "Create a new verification token.",
	})
	@ApiOkResponse({
		type: EmailConfirmationEntity,
	})
	@ApiResponse({
		status: 200,
		description: "OK. Return new verification token.",
		type: EmailConfirmationEntity,
	})
	@HttpCode(HttpStatus.OK)
	@Post()
	public async newVerification(@Req() req: Request, @Body() dto: ConfirmationDto) {
		return this.emailConfirmationService.newVerification(req, dto);
	}
}
