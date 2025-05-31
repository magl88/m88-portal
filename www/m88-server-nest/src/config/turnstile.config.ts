import type { TurnstileOptions } from "@magl88/nestjs-cloudflare-captcha";
import { ConfigService } from "@nestjs/config";

import { isDev } from "@/common/utils";

export function getTurnstileConfig(configService: ConfigService): TurnstileOptions {
	return {
		secretKey: configService.getOrThrow<string>("CAPTCHA_SECRET_KEY"),
		token: (req) => req.body.captcha,
		skipIf: isDev(configService),
	};
}
