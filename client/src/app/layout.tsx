import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './main.scss';
import { Header } from '@/widgets';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
  style: ['normal'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={`${montserrat.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
