'use client';
import { colorFading } from '@/lib/animations/colorFading';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const NavbarDiamond = () => {
  return (
    <Link href={'/'}>
      <div className={'w-32 pt-1'}>
        <DiamondAnimation />
      </div>
    </Link>
  );
};

const DiamondAnimation = () => {
  return (
    <motion.div
      style={{
        width: '50%',
        aspectRatio: '1',
        background: 'black',
        borderRadius: '61% 39% 16% 84% / 57% 72% 28% 43%',
        backgroundImage: colorFading.backgroundImage,
        backgroundSize: '400% 400%',
        // boxShadow: 'rgba(0, 0, 0, 0.6) 0px 30px 20px -7px;',
        position: 'relative',
      }}
      className={'diamondShadowLight dark:diamondShadowDark'}
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
    />
  );
};
