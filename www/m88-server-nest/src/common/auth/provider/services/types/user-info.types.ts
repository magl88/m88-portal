/**
 * Information about the user received from the OAuth provider.
 *
 * This type describes the structure of data containing information about the user,
 * including access tokens and information about the provider.
 */
export type TypeUserInfo = {
	id: string;
	picture: string;
	name: string;
	email: string;
	access_token?: string | null;
	refresh_token?: string;
	expires_at?: number;
	provider: string;
};
