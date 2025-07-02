import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Patch,
} from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { UserRole } from "@prisma/generated";

import { Authorization, Authorized } from "@/common/auth/decorators";

import { UpdateUserDto } from "./dto/update-user.dto";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";

/**
 * Controller for managing users.
 */
@Controller("users")
export class UserController {
	/**
	 * Constructor for the user controller.
	 * @param userService - Service for working with users.
	 */
	public constructor(private readonly userService: UserService) {}

	/**
	 * Gets the profile of the current user.
	 * @param userId - ID of the authorized user.
	 * @returns Profile of the user.
	 */
	@ApiOperation({
		summary: "Get Profile",
		description: "Retrieve the profile of the current user.",
	})
	@ApiOkResponse({
		type: UserEntity,
	})
	@ApiResponse({
		status: 200,
		description: "OK. Return user profile.",
		type: UserEntity,
	})
	@Authorization()
	@HttpCode(HttpStatus.OK)
	@Get("profile")
	public async findProfile(@Authorized("id") userId: string) {
		return this.userService.findById(userId);
	}

	/**
	 * Gets a user by ID (only available to administrators).
	 * @param id - ID of the user.
	 * @returns Found user.
	 */
	@Authorization(UserRole.ADMIN)
	@HttpCode(HttpStatus.OK)
	@Get("by-id/:id")
	public async findById(@Param("id") id: string) {
		return this.userService.findById(id);
	}

	/**
	 * Updates the profile of the current user.
	 * @param userId - ID of the authorized user.
	 * @param dto - Data for updating the profile.
	 * @returns Updated profile of the user.
	 */
	@Authorization()
	@HttpCode(HttpStatus.OK)
	@Patch("profile")
	public async updateProfile(
		@Authorized("id") userId: string,
		@Body() dto: UpdateUserDto,
	) {
		return this.userService.update(userId, dto);
	}
}
