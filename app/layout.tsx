import type { Metadata } from 'next';
import Link from 'next/link';
import { roboto, montserrat } from 'fonts/fonts';
import { Navigation } from 'components/Navigation/Navigation';
import { Footer } from 'components/Footer/Footer';
import { links } from './constants';
import './globals.css';

export const metadata: Metadata = {
  title: 'Noelia Abascal',
  description: 'Personal portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body className={roboto.className}>
        <header>
          <Link href="/">
            <h2 className={`${montserrat.className} home-link`}>Inicio</h2>
          </Link>
          <Navigation links={links} />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
