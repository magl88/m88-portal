/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_TURNSTILE_SITE_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>;
		}
	: T;

type OptionalRecord<K extends keyof any, T> = {
	[P in K]?: T;
};
