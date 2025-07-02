/**
 * Options for the OAuth provider.
 *
 * This type describes the parameters necessary for configuring the OAuth provider.
 */
export type TypeProviderOptions = {
	scopes: string[];
	client_id: string;
	client_secret: string;
};
