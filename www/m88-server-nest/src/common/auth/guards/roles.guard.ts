import {
	CanActivate,
	ExecutionContext,
	ForbiddenException,
	Injectable,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UserRole } from "@prisma/generated";

import { ROLES_KEY } from "../decorators/roles.decorator";

/**
 * Guard for checking user roles.
 */
@Injectable()
export class RolesGuard implements CanActivate {
	/**
	 * Constructor for the roles guard.
	 * @param reflector - Reflector for getting metadata.
	 */
	public constructor(private readonly reflector: Reflector) {}

	/**
	 * Checks if the user has the necessary roles to access the resource.
	 * @param context - Execution context containing information about the current request.
	 * @returns true if the user has enough rights; otherwise throws ForbiddenException.
	 * @throws ForbiddenException - If the user does not have enough rights.
	 */
	public async canActivate(context: ExecutionContext): Promise<boolean> {
		const roles = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [
			context.getHandler(),
			context.getClass(),
		]);
		const request = context.switchToHttp().getRequest();

		if (!roles) return true;

		if (!roles.includes(request.user.role)) {
			throw new ForbiddenException(
				"Not enough rights. You do not have access to this resource.",
			);
		}

		return true;
	}
}
