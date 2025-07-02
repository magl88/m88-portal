import { Module } from "@nestjs/common";

import { AuthModule } from "./auth/auth.module";
import { FileModule } from "./file/file.module";

@Module({
	imports: [AuthModule, FileModule],
})
export class CommonModule {}
