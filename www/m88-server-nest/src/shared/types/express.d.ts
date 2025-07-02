import "express-session";
import { Session, SessionData } from "express-session";

declare module "express-session" {
	interface SessionData {
		userId?: string;
	}
}

declare module "express-serve-static-core" {
	interface Request {
		session: Session & Partial<SessionData>;
	}
}
