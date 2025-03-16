import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'March - Innovative Software Solutions',
  description: 'March is a leading software development company specializing in custom enterprise solutions, mobile apps, web development, and digital transformation. We deliver cutting-edge technology solutions with expertise in AI, cloud computing, and agile methodologies to help businesses thrive in the digital age.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          
          {children}
        
      </body>
    </html>
  );
}
