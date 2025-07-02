import { BaseOAuthService } from "./base-oauth.service";
import { TypeProviderOptions } from "./types/provider-options.types";
import { TypeUserInfo } from "./types/user-info.types";

/**
 * Provider for working with OAuth Google.
 */
export class GoogleProvider extends BaseOAuthService {
	/**
	 * Constructor for the Google provider.
	 *
	 * @param options - Provider options containing the necessary parameters for authentication.
	 */
	public constructor(options: TypeProviderOptions) {
		super({
			name: "google",
			authorize_url: "https://accounts.google.com/o/oauth2/v2/auth",
			access_url: "https://oauth2.googleapis.com/token",
			profile_url: "https://www.googleapis.com/oauth2/v3/userinfo",
			scopes: options.scopes,
			client_id: options.client_id,
			client_secret: options.client_secret,
		});
	}

	/**
	 * Extracts user information from data received from Google.
	 *
	 * @param data - Data received from Google.
	 * @returns Object with information about the user.
	 */
	public async extractUserInfo(data: GoogleProfile): Promise<TypeUserInfo> {
		return super.extractUserInfo({
			email: data.email,
			name: data.name,
			picture: data.picture,
		});
	}
}

/**
 * Interface for Google user profile data.
 */
interface GoogleProfile extends Record<string, any> {
	aud: string;
	azp: string;
	email: string;
	email_verified: boolean;
	exp: number;
	family_name?: string;
	given_name: string;
	hd?: string;
	iat: number;
	iss: string;
	jti?: string;
	locale?: string;
	name: string;
	nbf?: number;
	picture: string;
	sub: string;
	access_token: string;
	refresh_token?: string;
}
