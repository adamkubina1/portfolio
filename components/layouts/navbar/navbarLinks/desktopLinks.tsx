import { navigationLinks } from '@/lib/data/navigationLinks';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { LinkHighlighterDark, LinkHighlighterLight } from './linkHighlighter';

export const DesktopLinks = ({
  activeLink,
}: {
  activeLink: string | undefined;
}) => {
  return (
    <ul
      className={
        'hidden md:flex items-center border-b dark:border-gray-600 border-gray-300'
      }
    >
      {navigationLinks.map((link, i) => (
        <DesktopLink key={i} activeLink={activeLink} link={link} />
      ))}
    </ul>
  );
};

const DesktopLink = ({
  activeLink,
  link,
}: {
  activeLink: string | undefined;
  link: string;
}) => {
  return (
    <li className={'px-4 '}>
      <motion.div
        animate={
          link === activeLink?.replace('/', '')
            ? { textShadow: '0px 3px 3px' }
            : {}
        }
        transition={{
          textShadow: { duration: 0.5, ease: 'easeIn' },
          delay: 0.4,
        }}
      >
        <Link href={`/${link}`} className={'h-full flex justify-center'}>
          <AnimatePresence>
            {link === activeLink?.replace('/', '') ? (
              <>
                <LinkHighlighterLight className='absolute top-2' />
                <LinkHighlighterDark className='absolute top-2' />
              </>
            ) : null}
          </AnimatePresence>
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </Link>
      </motion.div>
    </li>
  );
};
