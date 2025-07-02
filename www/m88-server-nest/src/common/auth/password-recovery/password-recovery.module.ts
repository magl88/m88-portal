import { Module } from "@nestjs/common";

import { UserService } from "@/core/user/user.service";
import { MailService } from "@/shared/libs/mail/mail.service";

import { PasswordRecoveryController } from "./password-recovery.controller";
import { PasswordRecoveryService } from "./password-recovery.service";

@Module({
	controllers: [PasswordRecoveryController],
	providers: [PasswordRecoveryService, UserService, MailService],
})
export class PasswordRecoveryModule {}
