import { Body } from '@/components/layouts/body';
import { Footer } from '@/components/layouts/footer/footer';
import { Navbar } from '@/components/layouts/navbar/navbar';
import './globals.css';

export const metadata = {
  title: 'Home',
  description: 'Lorem ipsum',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <Body>{children}</Body>
        <Footer />
      </body>
    </html>
  );
}
