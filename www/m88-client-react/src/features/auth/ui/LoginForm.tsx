import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router";
import { useTurnstile } from "react-turnstile";
import { toast } from "sonner";
import { z } from "zod";

import { useLoginMutation } from "@/features/auth/model";

import { ROUTES } from "@/shared/constants";
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
} from "@/shared/ui";
import { Captcha } from "@/shared/utils/captcha";

import { AuthWrapper } from "./AuthWrapper";

const loginSchema = z.object({
	email: z
		.string()
		.nonempty({ message: "Email is required" })
		.email({ message: "Please enter a valid email address" }),
	password: z.string().nonempty({ message: "Password is required" }),
	captcha: z.string(),
});

export type Login = z.infer<typeof loginSchema>;

export function LoginForm() {
	const { t } = useTranslation();
	const turnstile = useTurnstile();

	const navigate = useNavigate();
	const [login] = useLoginMutation();

	// const { mutateAsync, isPending } = useLoginMutation({
	// 	mutationKey: ["login"],
	// 	mutationFn: (data: Login) => login(data),
	// 	onSuccess(data) {
	// 		if ("ticket" in data && typeof data.ticket === "string") {
	// 			setTicket(data.ticket);
	// 			setMethods(data.allowedMethods);
	// 		}

	// 		if ("token" in data && typeof data.token === "string") {
	// 			setSessionToken(data.token);

	// 			instance.defaults.headers["X-Session-Token"] = data.token;

	// 			navigate("/account/settings");
	// 		}
	// 	},
	// 	onError(error: any) {
	// 		toast.error(error.response?.data?.message ?? "Ошибка при входе");
	// 	},
	// });

	async function mutateAsync(data: Login) {
		try {
			const result = await login(data).unwrap();
			console.log("Console: result", result);

			// Если есть ticket
			if ("ticket" in result && typeof result.ticket === "string") {
				// setTicket(result.ticket);
				// setMethods(result.allowedMethods);
			}

			// Если есть token
			if ("token" in result && typeof result.token === "string") {
				// setSessionToken(result.token);
				// instance.defaults.headers["X-Session-Token"] = result.token;
				navigate("/");
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			toast.error(error?.data?.message ?? "Ошибка при входе");
		}
	}

	const form = useForm<Login>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
			captcha: "",
		},
	});

	useEffect(() => {
		if (form.formState.isSubmitSuccessful && form.getValues("captcha")) {
			console.log("Console: RESET1", form);
			form.reset();
			turnstile.reset();
		}
	}, [form, form.reset, form.formState.isSubmitSuccessful]);

	async function onSubmit(data: Login) {
		console.log("Console:onSubmit ", data);

		if (!data.captcha) {
			toast.warning(t("Pass the captcha!"));
			turnstile.reset();
			return;
		}

		await mutateAsync(data);
	}

	return (
		<AuthWrapper
			heading="Login to your account"
			description="To log in to the site, use your email and password, which were specified when registering on the site."
			// bottomText="Еще нет аккаунта?"
			// bottomLinkText="Регистрация"
			// bottomLinkHref={ROUTES.register}
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>{t("Email")}</FormLabel>
									<FormControl>
										<Input
											placeholder="tony@starkindustries.com"
											// disabled={isPending}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<div className="flex items-center justify-between">
										<FormLabel>{t("Password")}</FormLabel>
										<Link
											to={ROUTES.recovery}
											className="ml-auto inline-block text-sm underline"
										>
											{t("Forgot your password?")}
										</Link>
									</div>
									<FormControl>
										<Input type="password" placeholder="******" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="captcha"
							render={({ field }) => (
								<FormItem className="flex w-full flex-col items-center justify-center">
									<FormControl>
										<Captcha
											onVerify={(token) => form.setValue("captcha", token)}
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<Button
							type="submit"
							// variant="primary"
							// isLoading={isPending}
							className="w-full"
						>
							{t("Login")}
						</Button>
					</div>
				</form>
			</Form>
		</AuthWrapper>
	);
}
