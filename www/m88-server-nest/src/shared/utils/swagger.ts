import type { INestApplication } from "@nestjs/common";
import { SwaggerModule } from "@nestjs/swagger";

import { getSwaggerConfig } from "@/shared/configs";

export function setupSwagger(app: INestApplication) {
	const config = getSwaggerConfig();
	const document = SwaggerModule.createDocument(app, config);

	SwaggerModule.setup("/swagger", app, document, {
		jsonDocumentUrl: "swagger/json",
		yamlDocumentUrl: "swagger/yaml",
	});
}
