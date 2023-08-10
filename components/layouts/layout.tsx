import { Open_Sans } from 'next/font/google';
import LightProvider from '../providers/themeProvider';
import { Content } from './content';
import { Navbar } from './navbar/navbar';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-openSans',
});

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`bg-light-base dark:bg-dark-base text-light-text dark:text-dark-text ${openSans.variable} font-sans`}
    >
      <LightProvider>
        <Navbar />
        <Content>{children}</Content>
      </LightProvider>
    </div>
  );
};
