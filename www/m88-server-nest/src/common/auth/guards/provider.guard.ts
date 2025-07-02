import {
	CanActivate,
	ExecutionContext,
	Injectable,
	NotFoundException,
} from "@nestjs/common";
import { Request } from "express";

import { ProviderService } from "../provider/provider.service";

/**
 * Guard for checking the existence of an authentication provider.
 */
@Injectable()
export class AuthProviderGuard implements CanActivate {
	/**
	 * Constructor for the authentication provider guard.
	 * @param providerService - Service for working with authentication providers.
	 */
	public constructor(private readonly providerService: ProviderService) {}

	/**
	 * Checks if the specified authentication provider exists.
	 * @param context - Execution context containing information about the current request.
	 * @returns true if the provider is found; otherwise throws NotFoundException.
	 * @throws NotFoundException - If the provider is not found.
	 */
	public canActivate(context: ExecutionContext) {
		const request = context.switchToHttp().getRequest() as Request;

		const provider = request.params.provider;

		const providerInstance = this.providerService.findByService(provider);

		if (!providerInstance) {
			throw new NotFoundException(
				`The provider "${provider}" was not found. Please check the correctness of the entered data.`,
			);
		}

		return true;
	}
}
