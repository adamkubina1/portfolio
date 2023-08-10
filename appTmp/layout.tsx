import { Content } from '@/components/layouts/content';
import { Navbar } from '@/components/layouts/navbar/navbar';
import LightProvider from '@/components/providers/themeProvider';
import { Open_Sans } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'Home',
  description: 'Lorem ipsum',
};

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-openSans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`bg-light-base dark:bg-dark-base text-light-text dark:text-dark-text ${openSans.variable} font-sans`}
      >
        <LightProvider>
          <Navbar />
          <Content>{children}</Content>
        </LightProvider>
      </body>
    </html>
  );
}
