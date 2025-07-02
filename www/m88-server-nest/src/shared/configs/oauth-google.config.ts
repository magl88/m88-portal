import { ConfigService } from "@nestjs/config";

export const getOAuthGoogleConfig = (configService: ConfigService) => ({
	client_id: configService.getOrThrow<string>("GOOGLE_CLIENT_ID"),
	client_secret: configService.getOrThrow<string>("GOOGLE_CLIENT_SECRET"),
	scopes: ["email", "profile"],
});
