import { ConfigService } from "@nestjs/config";
import { GoogleRecaptchaModuleOptions } from "@nestlab/google-recaptcha";

import { isDev } from "@/common/utils";

export const getRecaptchaConfig = async (
	configService: ConfigService,
): Promise<GoogleRecaptchaModuleOptions> => ({
	secretKey: configService.getOrThrow<string>("GOOGLE_RECAPTCHA_SECRET_KEY"),
	response: (req) => req.headers.recaptcha,
	skipIf: isDev(configService),
});
