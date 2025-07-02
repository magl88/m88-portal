import {
	CallHandler,
	Controller,
	ExecutionContext,
	Injectable,
	NestInterceptor,
	UseInterceptors,
} from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class CookieLoggerInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const request = context.switchToHttp().getRequest();

		console.log("🍪 Cookies in request:");
		console.log("Raw:", request.headers.cookie);
		console.log("Parsed:", request.cookies);

		return next.handle();
	}
}
