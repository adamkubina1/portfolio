'use client';
import { navigationLinks } from '@/lib/data';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

export const DesktopLinks = ({
  activeLink,
}: {
  activeLink: string | undefined;
}) => {
  return (
    <ul className={'hidden md:flex items-center'}>
      {navigationLinks.map((link, i) => (
        <li key={i} className={'px-4'}>
          <Link href={`/${link}`} className={'h-full'}>
            {link === activeLink?.replace('/', '') ? (
              <div className='absolute top-2'>
                <LinkHighlighterLight />
                <LinkHighlighterDark />
              </div>
            ) : null}
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const LinkHighlighterLight = () => {
  return (
    <AnimatePresence>
      <motion.div
        key={'linkHighlighterLight'}
        className='dark:hidden w-2 h-2 rounded-full bg-yellow-300 mx-auto'
        animate={{
          boxShadow: [
            '0 0 3px 2px rgb(250, 202, 21)',
            '0 0 12px 4px rgb(250, 202, 21)',
            '0 0 3px 2px rgb(250, 202, 21)',
          ],
        }}
        transition={{
          boxShadow: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
          width: { duration: 3, ease: 'easeIn' },
          height: { duration: 3, ease: 'easeIn' },
          opacity: { duration: 3, ease: 'easeIn' },
        }}
        exit={{ width: 0, height: 0, opacity: 0 }}
      ></motion.div>
    </AnimatePresence>
  );
};

const LinkHighlighterDark = () => {
  return (
    <AnimatePresence>
      <motion.div
        key={'linkHighlighterDark'}
        className='hidden dark:block top-0 relative left-1/2 w-2 h-2 rounded-full bg-yellow-300'
        animate={{
          boxShadow: [
            '0 0 3px 2px rgb(250, 202, 21)',
            '0 0 12px 4px rgb(250, 202, 21)',
            '0 0 3px 2px rgb(250, 202, 21)',
          ],
        }}
        transition={{
          boxShadow: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
          width: { duration: 3, ease: 'easeIn' },
          height: { duration: 3, ease: 'easeIn' },
          opacity: { duration: 3, ease: 'easeIn' },
        }}
        exit={{ width: 0, height: 0, opacity: 0 }}
      ></motion.div>
    </AnimatePresence>
  );
};
