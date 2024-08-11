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
});

export const metadata: Metadata = {
  title: '',
  description: '',
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
