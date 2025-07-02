/**
 * Options for the base OAuth provider.
 *
 * This type describes the necessary parameters for authentication through OAuth.
 */
export type TypeBaseProviderOptions = {
	name: string;
	authorize_url: string;
	access_url: string;
	profile_url: string;
	scopes: string[];
	client_id: string;
	client_secret: string;
};
