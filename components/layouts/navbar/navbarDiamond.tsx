import { colorFading } from '@/lib/animations/colorFading';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavbarOpenType } from './navbar';
import {
  LinkHighlighterDark,
  LinkHighlighterLight,
} from './navbarLinks/linkHighlighter';

export const NavbarDiamond = ({ isOpen, setOpen }: NavbarOpenType) => {
  const router = useRouter();

  return (
    <div className={'w-24 md:w-28 pt-1 md:pt-4 z-50 '}>
      <Link
        href={'/'}
        className={'md:hidden'}
        onClick={() => {
          if (isOpen) setOpen(false);
        }}
        aria-label={'Home page link'}
      >
        <DiamondAnimation active={true} />
      </Link>
      <Link
        href={'/'}
        className={'max-md:hidden'}
        aria-label={'Home page link'}
      >
        <AnimatePresence>
          {router.asPath === '/' ? (
            <>
              <LinkHighlighterLight className='absolute top-2 ml-8' />

              <LinkHighlighterDark className='absolute top-2 ml-8' />
            </>
          ) : null}
        </AnimatePresence>

        <DiamondAnimation active={router.asPath === '/'} />
      </Link>
    </div>
  );
};

const DiamondAnimation = ({ active }: { active: boolean }) => {
  return (
    <motion.div
      style={{
        aspectRatio: '1',
        background: 'black',
        borderRadius: '61% 39% 16% 84% / 57% 72% 28% 43%',
        backgroundImage: colorFading.backgroundImage,
        backgroundSize: '400% 400%',
      }}
      className={`relative w-1/2 ${
        active ? 'text-grey-shadow dark:text-purple-shadow' : 'text-transparent'
      }`}
      whileHover={{
        scale: 1.08,
        transition: { scale: { duration: 2, ease: 'easeOut' } },
      }}
      animate={
        active
          ? {
              borderRadius: colorFading.borderRadius,
              backgroundPosition: colorFading.backgroundPosition,
              x: [0, 10, 0, 5, 0, 5, 0],
              y: [0, 10, 0, 2, 0, 2, 0],
              boxShadow: '0px 30px 20px -7px',
            }
          : {
              borderRadius: colorFading.borderRadius,
              backgroundPosition: colorFading.backgroundPosition,
              x: [0, 10, 0, 5, 0, 5, 0],
              y: [0, 10, 0, 2, 0, 2, 0],
            }
      }
      transition={{
        borderRadius: { ease: 'easeInOut', duration: 20, repeat: Infinity },
        backgroundPosition: {
          ease: 'easeInOut',
          duration: 20,
          repeat: Infinity,
        },
        x: { ease: 'easeInOut', duration: 10, repeat: Infinity },
        y: { ease: 'easeInOut', duration: 10, repeat: Infinity },

        boxShadow: { duration: 0.5, ease: 'easeIn', delay: 0.4 },
      }}
    ></motion.div>
  );
};
