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
    icon: 'https://www.solivra.diy/team/logo.ico',
  },
  openGraph: {
    title: 'Solivra - Sustainable Bottle Lamps',
    description: 'Eco-friendly lamps from upcycled glass bottles, transforming waste into beautiful lighting solutions.',
    url: 'https://www.solivra.diy',
    siteName: 'Solivra',
    images: [
      {
        url: 'https://www.solivra.diy/team/logo.jpg',
        width: 1200,
        height: 630,
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
    images: ['https://www.solivra.diy/team/logo.jpg'],
  },
  other: {
    'og:image:secure_url': 'https://www.solivra.diy/team/logo.jpg',
    'og:image:type': 'image/jpeg',
    'og:image:width': '1200',
    'og:image:height': '630',
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