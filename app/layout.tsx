import { Body } from '@/components/layouts/body';
import { Navbar } from '@/components/layouts/navbar/navbar';
import LightProvider from '@/components/providers/themeProvider';
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
        <LightProvider>
          <Navbar />
          <Body>{children}</Body>
        </LightProvider>
      </body>
    </html>
  );
}
