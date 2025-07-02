import { Body, Heading, Link, Tailwind, Text } from "@react-email/components"
import { Html } from "@react-email/html"
import * as React from 'react'

interface ConfirmationTemplateProps {
	domain: string
	token: string
}

/**
 * Генерирует шаблон письма для подтверждения электронной почты пользователя.
 * Ссылка для подтверждения формируется из домена и токена. Письмо информирует,
 * что ссылка действительна 1 час.
 * 
 * @param {ConfirmationTemplateProps} props - Домен и токен для генерации ссылки.
 * @returns {JSX.Element} Сгенерированный шаблон письма.
 */
export function ConfirmationTemplate({
	domain,
	token
}: ConfirmationTemplateProps) {
	const confirmLink = `${domain}/auth/new-verification?token=${token}`

	return (
		<Tailwind>
			<Html>
				<Body className='text-black'>
					<Heading>Confirmation email</Heading>
					<Text>
						Hello! To confirm your email address, please click the following link:
					</Text>
					<Link href={confirmLink}>Confirm email</Link>
					<Text>
						This link is valid for 1 hour. If you did not request confirmation, please ignore this message.
					</Text>
				</Body>
			</Html>
		</Tailwind>
	)
}
