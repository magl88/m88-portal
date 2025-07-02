import { Module } from "@nestjs/common";

import { MinioModule } from "./minio/minio.module";
import { PrismaModule } from "./prisma/prisma.module";

@Module({
	imports: [PrismaModule, MinioModule],
})
export class InfraModule {}
