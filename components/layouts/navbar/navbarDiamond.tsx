import { colorFading } from '@/lib/animations/colorFading';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { NavbarOpenType } from './navbar';

export const NavbarDiamond = ({ isOpen, setOpen }: NavbarOpenType) => {
  return (
    <div className={'w-24 md:w-32 pt-1 z-50'}>
      <Link
        href={'/'}
        className={'md:hidden'}
        onClick={() => {
          if (isOpen) setOpen(false);
        }}
        aria-label={'Home page link'}
      >
        <DiamondAnimation />
      </Link>
      <Link
        href={'/'}
        className={'max-md:hidden'}
        aria-label={'Home page link'}
      >
        <DiamondAnimation />
      </Link>
    </div>
  );
};

const DiamondAnimation = () => {
  return (
    <motion.div
      style={{
        aspectRatio: '1',
        background: 'black',
        borderRadius: '61% 39% 16% 84% / 57% 72% 28% 43%',
        backgroundImage: colorFading.backgroundImage,
        backgroundSize: '400% 400%',
      }}
      className={'relative w-1/2 diamondShadowLight dark:diamondShadowDark'}
      whileHover={{
        scale: 1.1,
        transition: { duration: 2, ease: 'easeOut' },
      }}
      animate={{
        borderRadius: colorFading.borderRadius,
        backgroundPosition: colorFading.backgroundPosition,
        x: [0, 10, 0, 5, 0, 5, 0],
        y: [0, 10, 0, 2, 0, 2, 0],
      }}
      transition={{
        borderRadius: { ease: 'easeInOut', duration: 20, repeat: Infinity },
        backgroundPosition: {
          ease: 'easeInOut',
          duration: 20,
          repeat: Infinity,
        },
        x: { ease: 'easeInOut', duration: 10, repeat: Infinity },
        y: { ease: 'easeInOut', duration: 10, repeat: Infinity },
      }}
    ></motion.div>
  );
};
