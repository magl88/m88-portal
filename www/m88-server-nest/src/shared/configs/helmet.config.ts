import type { HelmetOptions } from "helmet";

import { isDev } from "@/shared/utils";

export function getHelmetConfig(): Readonly<HelmetOptions> {
	return {
		contentSecurityPolicy: {
			useDefaults: true,
			directives: {
				defaultSrc: ["'self'"],
				styleSrc: ["'self'", "'unsafe-inline'"],
				imgSrc: ["'self'", "data:", "blob:"],
				connectSrc: ["'self'", "https:"],
				fontSrc: ["'self'", "https:", "data:"],
				objectSrc: ["'none'"],
				baseUri: ["'self'"],
				frameAncestors: ["'none'"],
			},
		},
		// crossOriginEmbedderPolicy: true,
		// crossOriginOpenerPolicy: {
		// 	policy: "same-origin",
		// },
		crossOriginEmbedderPolicy: false,
		crossOriginOpenerPolicy: false,
		crossOriginResourcePolicy: {
			policy: "same-origin",
		},
		dnsPrefetchControl: {
			allow: false,
		},
		frameguard: {
			action: "deny",
		},
		hidePoweredBy: true,
		hsts: {
			maxAge: 63072000,
			includeSubDomains: true,
			preload: true,
		},
		ieNoOpen: true,
		noSniff: true,
		originAgentCluster: true,
		permittedCrossDomainPolicies: {
			permittedPolicies: "none",
		},
		referrerPolicy: {
			policy: "no-referrer",
		},
		xssFilter: true,
	};
}
