import { Open_Sans } from 'next/font/google';
import LightProvider from '../providers/themeProvider';
import { Navbar } from './navbar/navbar';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-openSans',
});

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${openSans.variable} font-sans`}>
      <LightProvider>
        <Navbar />
        <div className='overflow-hidden'>{children}</div>
      </LightProvider>
    </div>
  );
};
