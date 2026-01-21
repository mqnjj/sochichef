import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './main.scss';
import { Footer, Header } from '@/widgets';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
  style: ['normal'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'УЭТК - Мастерство вкуса',
  description: '',
  icons: {
    icon: '/favicon.svg',
  },
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
        <Footer />
      </body>
    </html>
  );
}
