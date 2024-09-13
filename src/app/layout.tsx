import { ReactNode } from 'react';
import type { Metadata } from 'next';
// Fonts
import { Quattrocento_Sans } from 'next/font/google';
// Styles
import '@styles/index.scss';

const quattrocento = Quattrocento_Sans({
  subsets: ['latin'],
  variable: '--font-quattrocento',
  weight: '400',
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'Agrilink',
  robots: 'noindex, nofollow',
  creator: 'Yeison Montoya',
  authors: [{ name: ' Yeison Montoya' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className={quattrocento.className}>
        {children}
        <div id='portal' />
      </body>
    </html>
  );
}
