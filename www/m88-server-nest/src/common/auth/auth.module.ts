import { forwardRef, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GoogleRecaptchaModule } from "@nestlab/google-recaptcha";

import { UserService } from "@/core/user/user.service";
import { getRecaptchaConfig } from "@/shared/configs";
import { MailService } from "@/shared/libs/mail/mail.service";

import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { EmailConfirmationModule } from "./email-confirmation/email-confirmation.module";
import { ProviderModule } from "./provider/provider.module";
import { getProvidersConfig } from "./provider/providers.config";
import { TwoFactorAuthService } from "./two-factor-auth/two-factor-auth.service";

@Module({
	imports: [
		ProviderModule.registerAsync({
			imports: [ConfigModule],
			useFactory: getProvidersConfig,
			inject: [ConfigService],
		}),
		GoogleRecaptchaModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: getRecaptchaConfig,
			inject: [ConfigService],
		}),
		forwardRef(() => EmailConfirmationModule),
	],
	controllers: [AuthController],
	providers: [AuthService, UserService, MailService, TwoFactorAuthService],
	exports: [AuthService],
})
export class AuthModule {}
