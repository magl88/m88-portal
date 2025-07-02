import {
	Body,
	Heading,
	Tailwind,
	Text
} from '@react-email/components';
import { Html } from '@react-email/html';
import * as React from 'react';

interface TwoFactorAuthTemplateProps {
	token: string;
}

/**
 * Генерирует шаблон письма для двухфакторной аутентификации.
 * Письмо содержит код, который необходимо ввести для завершения аутентификации.
 * 
 * @param {TwoFactorAuthTemplateProps} props - Токен для двухфакторной аутентификации.
 * @returns {JSX.Element} Сгенерированный шаблон письма.
 */
export function TwoFactorAuthTemplate({ token }: TwoFactorAuthTemplateProps) {
	return (
		<Tailwind>
			<Html>
				<Body className='text-black'>
					<Heading>Two-factor authentication</Heading>
					<Text>Your two-factor authentication code: <strong>{token}</strong></Text>
					<Text>
						Please enter this code in the application to complete the authentication process.
					</Text>
					<Text>
						If you did not request this code, please ignore this message.
					</Text>
				</Body>
			</Html>
		</Tailwind>
	);
}