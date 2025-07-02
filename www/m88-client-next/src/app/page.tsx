import { redirect } from "@/shared/libs/i18n";

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
	redirect({ href: "/", locale: "en" });
}
