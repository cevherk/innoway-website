import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Solivra - Sustainable Bottle Lamps',
  description: 'Eco-friendly lamps from upcycled glass bottles, transforming waste into beautiful lighting solutions.',
  icons: {
    icon: '/team/logo.ico',
  },
  openGraph: {
    title: 'Solivra - Sustainable Bottle Lamps',
    description: 'Eco-friendly lamps from upcycled glass bottles, transforming waste into beautiful lighting solutions.',
    url: 'https://www.solivra.diy',
    siteName: 'Solivra',
    images: [
      {
        url: '/team/logo.jpg',
        width: 800,
        height: 800,
        alt: 'Solivra Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solivra - Sustainable Bottle Lamps',
    description: 'Eco-friendly lamps from upcycled glass bottles, transforming waste into beautiful lighting solutions.',
    images: ['/team/logo.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 