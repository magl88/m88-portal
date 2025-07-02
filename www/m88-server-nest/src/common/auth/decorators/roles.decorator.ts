import { SetMetadata } from "@nestjs/common";
import { UserRole } from "@prisma/generated";

export const ROLES_KEY = "roles";

/**
 * Decorator for setting role metadata.
 *
 * This decorator allows specifying roles required for access to the method or class.
 *
 * @param roles - Array of roles that must be set in the metadata.
 * @returns Function SetMetadata, setting roles in metadata.
 */
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);
