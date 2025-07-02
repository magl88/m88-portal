import { Injectable, NotFoundException } from "@nestjs/common";
import { AuthMethod } from "@prisma/generated";
import { hash } from "argon2";

import { PrismaService } from "@/shared/infra/prisma/prisma.service";

import { UpdateUserDto } from "./dto/update-user.dto";

/**
 * Service for working with users.
 */
@Injectable()
export class UserService {
	/**
	 * Constructor for the user service.
	 * @param prismaService - Service for working with the Prisma database.
	 */
	public constructor(private readonly prismaService: PrismaService) {}

	/**
	 * Finds a user by ID.
	 * @param {string} id - ID of the user.
	 * @returns {Promise<User>} Found user.
	 * @throws {NotFoundException} If the user is not found.
	 */
	public async findById(id: string) {
		const user = await this.prismaService.user.findUnique({
			where: {
				id,
			},
			include: {
				accounts: true,
			},
		});

		if (!user) {
			throw new NotFoundException("User not found. Please check the entered data.");
		}

		return user;
	}

	/**
	 * Finds a user by email.
	 * @param {string} email - User email.
	 * @returns {Promise<User | null>} Found user or null, if not found.
	 */
	public async findByEmail(email: string) {
		const user = await this.prismaService.user.findUnique({
			where: {
				email,
			},
			include: {
				accounts: true,
			},
		});

		return user;
	}

	/**
	 * Creates a new user.
	 * @param email - User email.
	 * @param password - User password.
	 * @param displayName - Display name of the user.
	 * @param picture - URL of the user's avatar.
	 * @param method - User authentication method.
	 * @param isVerified - Flag indicating whether the email of the user is verified.
	 * @returns Created user.
	 */
	public async create(
		email: string,
		password: string,
		displayName: string,
		picture: string,
		method: AuthMethod,
		isVerified: boolean,
	) {
		const user = await this.prismaService.user.create({
			data: {
				email,
				password: password ? await hash(password) : "",
				displayName,
				picture,
				method,
				isVerified,
			},
			include: {
				accounts: true,
			},
		});

		return user;
	}

	/**
	 * Updates the user's data.
	 * @param userId - ID of the user.
	 * @param dto - Data for updating the user.
	 * @returns Updated user.
	 */
	public async update(userId: string, dto: UpdateUserDto) {
		const user = await this.findById(userId);

		const updatedUser = await this.prismaService.user.update({
			where: {
				id: user.id,
			},
			data: {
				email: dto.email,
				displayName: dto.name,
				isTwoFactorEnabled: dto.isTwoFactorEnabled,
			},
		});

		return updatedUser;
	}
}
