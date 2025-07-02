import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";

import { TypeBaseProviderOptions } from "./types/base-provider-options.types";
import { TypeUserInfo } from "./types/user-info.types";

/**
 * Base service for working with OAuth providers.
 *
 * This service provides common methods for authentication through OAuth, such as
 * obtaining an authorization URL, extracting user information, and processing tokens.
 */
@Injectable()
export class BaseOAuthService {
	private BASE_URL: string;

	/**
	 * Constructor for the base OAuth service.
	 *
	 * @param options - Provider options containing the necessary parameters for authentication.
	 */
	public constructor(private readonly options: TypeBaseProviderOptions) {}

	/**
	 * Extracts user information from data received from the provider.
	 *
	 * @param data - Data received from the provider.
	 * @returns Object with information about the user, including the provider name.
	 */
	protected async extractUserInfo(data: any): Promise<TypeUserInfo> {
		return {
			...data,
			provider: this.options.name,
		};
	}

	/**
	 * Forms an authorization URL.
	 *
	 * @returns URL for authorization through OAuth.
	 */
	public getAuthUrl() {
		const query = new URLSearchParams({
			response_type: "code",
			client_id: this.options.client_id,
			redirect_uri: this.getRedirectUrl(),
			scope: (this.options.scopes ?? []).join(" "),
			access_type: "offline",
			prompt: "select_account",
		});

		return `${this.options.authorize_url}?${query}`;
	}

	/**
	 * Finds a user by the authorization code and returns information about the user.
	 *
	 * @param code - Authorization code received from the provider.
	 * @returns Object with information about the user.
	 * @throws BadRequestException - If the tokens or user could not be obtained.
	 * @throws UnauthorizedException - If the access token is invalid.
	 */
	public async findUserByCode(code: string): Promise<TypeUserInfo> {
		const client_id = this.options.client_id;
		const client_secret = this.options.client_secret;

		const tokenQuery = new URLSearchParams({
			client_id,
			client_secret,
			code,
			redirect_uri: this.getRedirectUrl(),
			grant_type: "authorization_code",
		});

		const tokensRequest = await fetch(this.options.access_url, {
			method: "POST",
			body: tokenQuery,
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"Accept": "application/json",
			},
		});

		if (!tokensRequest.ok) {
			throw new BadRequestException(
				`Could not get a user from ${this.options.profile_url}. Check the correctness of the access token.`,
			);
		}

		const tokens = await tokensRequest.json();

		if (!tokens.access_token) {
			throw new BadRequestException(
				`No tokens from ${this.options.access_url}. Make sure the authorization code is valid.`,
			);
		}

		const userRequest = await fetch(this.options.profile_url, {
			headers: {
				Authorization: `Bearer ${tokens.access_token}`,
			},
		});

		if (!userRequest.ok) {
			throw new UnauthorizedException(
				`Could not get a user from ${this.options.profile_url}. Check the correctness of the access token.`,
			);
		}

		const user = await userRequest.json();
		const userData = await this.extractUserInfo(user);

		return {
			...userData,
			access_token: tokens.access_token,
			refresh_token: tokens.refresh_token,
			expires_at: tokens.expires_at || tokens.expires_in,
			provider: this.options.name,
		};
	}

	/**
	 * Returns a URL for redirection after successful authentication.
	 *
	 * @returns URL for redirection.
	 */
	private getRedirectUrl() {
		return `${this.BASE_URL}/auth/oauth/callback/${this.options.name}`;
	}

	/**
	 * Sets the base URL for the service.
	 *
	 * @param value - New base URL.
	 */
	public set baseUrl(value: string) {
		this.BASE_URL = value;
	}

	/**
	 * Returns the name of the provider.
	 *
	 * @returns The name of the provider.
	 */
	public get name() {
		return this.options.name;
	}

	/**
	 * Returns the URL for access.
	 *
	 * @returns URL for access.
	 */
	public get access_url() {
		return this.options.access_url;
	}

	/**
	 * Returns the URL for the profile.
	 *
	 * @returns URL for the profile.
	 */
	public get profile_url() {
		return this.options.profile_url;
	}

	/**
	 * Returns an array of access scopes.
	 *
	 * @returns Array of access scopes.
	 */
	public get scopes() {
		return this.options.scopes;
	}
}
