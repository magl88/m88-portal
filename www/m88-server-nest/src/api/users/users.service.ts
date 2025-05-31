import { Injectable } from "@nestjs/common";
import { RestrictionStatus, TotpStatus, User } from "@prisma/generated";
import sharp from "sharp";

import { PrismaService } from "@/infra/prisma/prisma.service";
import { StorageService } from "@/libs/storage/storage.service";

import { PatchUserRequest } from "./dto";

@Injectable()
export class UsersService {
	public constructor(
		private readonly prismaService: PrismaService,
		private readonly storageService: StorageService,
	) {}

	public async getAll() {
		const users = await this.prismaService.user.findMany({
			orderBy: {
				createdAt: "desc",
			},
			select: {
				id: true,
				createdAt: true,
				email: true,
				username: true,
				displayName: true,
				avatar: true,
				restrictions: {
					select: {
						status: true,
					},
				},
				mfa: {
					select: {
						recoveryCodes: true,
						totp: {
							select: {
								status: true,
							},
						},
					},
				},
			},
		});

		return users.map((user) => ({
			id: user.id,
			createdAt: user.createdAt,
			email: user.email,
			username: user.username,
			displayName: user.displayName,
			isBanned: user.restrictions.some(
				(restriction) => restriction.status === RestrictionStatus.ACTIVE,
			),
			isMfaEnabled: Boolean(
				user.mfa &&
					user.mfa.totp?.status === TotpStatus.ENABLED &&
					Array.isArray(user.mfa.recoveryCodes) &&
					user.mfa.recoveryCodes.length > 0,
			),
		}));
	}

	public async patchUser(user: User, dto: PatchUserRequest) {
		const { displayName } = dto;

		await this.prismaService.user.update({
			where: {
				id: user.id,
			},
			data: {
				displayName,
			},
			select: {
				id: true,
				displayName: true,
				email: true,
				avatar: true,
			},
		});

		return true;
	}

	public async changeAvatar(user: User, file: Express.Multer.File) {
		if (user.avatar && !user.avatar.startsWith("https://")) {
			await this.storageService.deleteFile("users", user.avatar);
		}

		let processedBuffer: Buffer;

		if (
			(file.originalname && file.originalname.endsWith(".gif")) ||
			(file.filename && file.filename.endsWith(".gif"))
		) {
			processedBuffer = await sharp(file.buffer, { animated: true })
				.resize(512, 512)
				.webp()
				.toBuffer();
		} else {
			processedBuffer = await sharp(file.buffer).resize(512, 512).webp().toBuffer();
		}

		const uploadedFile = await this.storageService.uploadFile(
			file,
			processedBuffer,
			"users",
		);

		await this.prismaService.user.update({
			where: {
				id: user.id,
			},
			data: {
				avatar: uploadedFile.file_id,
			},
		});

		return uploadedFile;
	}
}
