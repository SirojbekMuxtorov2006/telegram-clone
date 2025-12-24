import './globals.css';

import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

import { ThemeProvider } from '@/components/providers/theme.provider';

const spaceGrotesk = Space_Grotesk({
	weight: ['400', '500', '600', '700', '300'],
	subsets: ['latin'],
	variable: '--font-spaceGrotesk',
});

export const metadata: Metadata = {
	title: 'Telegram web',
	description: 'Telegram web application clone created by Sirojbek.uz',
	icons: { icon: '/logo.svg' },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${spaceGrotesk.variable} antialiased sidebar-custom-scrollbar`}
				suppressHydrationWarning
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
