import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		rules: {
			// Consistently import navigation APIs from `@/shared/i18n/navigation`
			"no-restricted-imports": [
				"error",
				{
					name: "next/link",
					message: "Please import from `@/shared/i18n/navigation` instead.",
				},
				{
					name: "next/navigation",
					importNames: ["redirect", "permanentRedirect", "useRouter", "usePathname"],
					message: "Please import from `@/shared/i18n/navigation` instead.",
				},
			],
		},
	},
];

export default eslintConfig;
