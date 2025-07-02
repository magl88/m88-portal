import { ConfigService } from "@nestjs/config";
import { RedisStore } from "connect-redis";
import { createClient } from "redis";

import { ms, parseBoolean, StringValue } from "../utils";

export async function getSessionConfig(config: ConfigService) {
	const redisClient = createClient({ url: config.getOrThrow("REDIS_URI") });
	await redisClient.connect().catch(console.error);

	return {
		secret: config.getOrThrow<string>("SESSION_SECRET"),
		name: config.getOrThrow<string>("SESSION_NAME"),
		resave: true,
		saveUninitialized: false,
		cookie: {
			domain: config.getOrThrow<string>("SESSION_DOMAIN"),
			maxAge: ms(config.getOrThrow<StringValue>("SESSION_MAX_AGE")),
			httpOnly: parseBoolean(config.getOrThrow<string>("SESSION_HTTP_ONLY")),
			secure: parseBoolean(config.getOrThrow<string>("SESSION_SECURE")),
			sameSite: "lax",
		},
		store: new RedisStore({
			client: redisClient,
			prefix: config.getOrThrow<string>("SESSION_FOLDER"),
		}),
	};
}
