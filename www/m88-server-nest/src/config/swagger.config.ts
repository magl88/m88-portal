import { DocumentBuilder } from "@nestjs/swagger";

export function getSwaggerConfig() {
	return new DocumentBuilder()
		.setTitle("M88 Portal API")
		.setDescription("API for M88 Portal")
		.setVersion("1.0.0")
		.addTag("m88_portal")
		.build();
}
