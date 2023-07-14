'use client';
import moon from '@/public/imgs/moon.svg';
import sun from '@/public/imgs/sun.svg';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

export const NavbarLightSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const themeSwitch = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={' flex items-center justify-center md:mr-4'}>
      {theme === 'dark' ? (
        <SunIcon themeSwitch={themeSwitch} />
      ) : (
        <MoonIcon themeSwitch={themeSwitch} />
      )}
    </div>
  );
};

const SunIcon = ({ themeSwitch }: { themeSwitch: () => void }) => {
  const audioClick = useMemo(() => new Audio('audio/click1.mp3'), []);
  return (
    <AnimatePresence>
      <motion.div
        onClick={() => audioClick.play()}
        className='absolute z-50 w-8 h-8 cursor-pointer'
        key={'sun'}
        initial={{ y: -10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ y: { duration: 0.4 }, opacity: { duration: 0.2 } }}
      >
        <Image
          style={{ fill: 'yellow' }}
          src={sun}
          alt='Light mode'
          onClick={() => themeSwitch()}
        />
      </motion.div>
    </AnimatePresence>
  );
};

const MoonIcon = ({ themeSwitch }: { themeSwitch: () => void }) => {
  const audioClick = useMemo(() => new Audio('audio/click2.mp3'), []);
  return (
    <AnimatePresence>
      <motion.div
        onClick={() => audioClick.play()}
        className='absolute z-40 w-8 h-8 cursor-pointer'
        key={'moon'}
        initial={{ y: -10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ y: { duration: 0.4 }, opacity: { duration: 0.2 } }}
      >
        <Image src={moon} alt='Dark mode' onClick={() => themeSwitch()} />
      </motion.div>
    </AnimatePresence>
  );
};
