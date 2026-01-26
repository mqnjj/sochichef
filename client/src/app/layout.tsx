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
  title: 'Обучение поваров и кондитеров в Сочи | УЭТК - Мастерство вкуса',
  description:
    'Профессиональное обучение поваров и кондитеров в Университетском колледже Сочи. Практика в топовых ресторанах, современное оборудование, трудоустройство. Запись на 2026 год.',
  keywords: [
    // Основные
    'обучение поваров Сочи',
    'кулинарные курсы Сочи',
    'обучение кондитеров Сочи',
    'колледж поваров Сочи',
    'кулинарная школа Сочи',
    'профессия повар Сочи',

    // Длинные хвосты (более целевые)
    'курсы поваров после 9 класса Сочи',
    'профессиональная переподготовка поваров Сочи',
    'повышение квалификации кондитеров Сочи',
    'кулинарные мастер-классы Сочи',
    'УЭТК Сочи',
    'Университетский колледж Сочи',
    'Университетский экономико-технологический колледж Сочи',

    // Смежные
    'ресторанное дело Сочи',
    'кулинарное образование',
    'шеф-повар обучение',
    'кондитерское искусство Сочи',
    'гастрономия обучение',

    // Локальные
    'колледж на Чайковского Сочи',
    'кулинарный техникум Сочи',
  ],
  openGraph: {
    title: 'УЭТК - Обучение поваров и кондитеров в Сочи',
    description: 'Профессиональное обучение в ресторанной индустрии',
    url: 'https://sochichef.ru',
    siteName: 'УЭТК - Колледж поваров в Сочи',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://sochichef.ru/image.jpg',
        alt: 'Студенты УЭТК на практике',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
  metadataBase: new URL('https://sochichef.ru'),
  alternates: {
    canonical: 'https://sochichef.ru',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Университетский экономико-технологический колледж',
    description: 'Обучение поваров и кондитеров в Сочи',
    url: 'https://sochichef.ru',
    telephone: '+7-862-254-47-43',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Чайковского, 45',
      addressLocality: 'Сочи',
      addressCountry: 'RU',
    },
    image: 'https://sochichef.ru/image.jpg',
  };

  return (
    <html lang='ru'>
      <head>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${montserrat.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
