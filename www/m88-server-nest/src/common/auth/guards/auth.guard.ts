import {
	CanActivate,
	ExecutionContext,
	Injectable,
	UnauthorizedException,
} from "@nestjs/common";

import { UserService } from "@/core/user/user.service";

/**
 * Guard for checking user authentication.
 */
@Injectable()
export class AuthGuard implements CanActivate {
	/**
	 * Constructor for the authentication guard.
	 * @param userService - Service for working with users.
	 */
	public constructor(private readonly userService: UserService) {}

	/**
	 * Checks if the user has access to the resource.
	 * @param context - Execution context containing information about the current request.
	 * @returns true if the user is authenticated; otherwise throws UnauthorizedException.
	 * @throws UnauthorizedException - If the user is not authenticated.
	 */
	public async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest();

		if (typeof request.session.userId === "undefined") {
			throw new UnauthorizedException(
				"The user is not authenticated. Please log in to the system to get access.",
			);
		}

		const user = await this.userService.findById(request.session.userId);

		request.user = user;

		return true;
	}
}
