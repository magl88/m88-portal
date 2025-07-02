import { DocumentBuilder } from "@nestjs/swagger";

export function getSwaggerConfig() {
	return (
		new DocumentBuilder()
			.setTitle("M88 Portal API")
			.setDescription("API for M88 Portal")
			.setVersion("1.0.0")
			.addTag("m88_portal")
			// .addServer("http://localhost:3000", "Local")
			// .addServer("http://localhost:4000", "Local")
			// .addServer("https://portal.magl88.net/api", "Production")
			// .addServer("http://192.168.1.87:4000/swagger", "Development server")
			.build()
	);
}
