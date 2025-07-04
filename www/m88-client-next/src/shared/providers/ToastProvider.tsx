"use client";

import { Toaster } from "../ui";

/**
 * Провайдер для отображения уведомлений.
 *
 * @returns {JSX.Element} - Компонент Toaster для уведомлений.
 */
export function ToastProvider() {
	return <Toaster position="bottom-right" duration={6000} />;
}
