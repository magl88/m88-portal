import { Type } from "class-transformer";
import { IsNumber, IsOptional, Min } from "class-validator";

export class PaginationDto {
	@IsOptional()
	@Type(() => Number)
	@IsNumber()
	@Min(1)
	limit?: number = 10;

	@IsOptional()
	@Type(() => Number)
	@IsNumber()
	@Min(0)
	offset?: number = 0;
}
