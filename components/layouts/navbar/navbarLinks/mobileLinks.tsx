import { navigationLinks } from '@/lib/data/navigationLinks';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { NavbarOpenType } from '../navbar';
import { NavbarToggle } from '../navbarToggle';
import { LinkHighlighterDark, LinkHighlighterLight } from './linkHighlighter';

export const MobileLinks = ({
  isOpen,
  setOpen,
  activeLink,
}: NavbarOpenType & { activeLink: string | undefined }) => {
  return (
    <motion.div
      animate={isOpen ? 'open' : 'closed'}
      className='flex items-center mt-2'
    >
      <div
        className={'md:hidden flex items-center hover:cursor-pointer'}
        onClick={() => setOpen(!isOpen)}
      >
        <div className='z-50'>
          <NavbarToggle />
        </div>
      </div>
      <AnimatePresence>
        {isOpen ? (
          <MobileLinksMenu
            activeLink={activeLink}
            isOpen={isOpen}
            setOpen={setOpen}
          />
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
};

const MobileLinksMenu = ({
  isOpen,
  setOpen,
  activeLink,
}: NavbarOpenType & { activeLink: string | undefined }) => {
  return (
    <motion.div
      className={
        'absolute top-0 left-0 bg-transparent-tmp flex justify-center pt-32'
      }
      key={'mobilelinks'}
      initial={{ opacity: 0, width: 0, height: 0 }}
      animate={{ opacity: 1, width: '100%', height: '100vh' }}
      exit={{ opacity: 0, width: 0, height: 0 }}
      transition={{ opacity: { duration: 0.5 } }}
    >
      <ul className={'flex items-center wrap flex-col gap-6'}>
        {navigationLinks.map((link, i) => (
          <MobileLink
            key={i}
            activeLink={activeLink}
            isOpen={isOpen}
            setOpen={setOpen}
            link={link}
          />
        ))}
      </ul>
    </motion.div>
  );
};

const MobileLink = ({
  link,
  activeLink,
  isOpen,
  setOpen,
}: NavbarOpenType & { activeLink: string | undefined; link: string }) => {
  return (
    <li className={'py-4'}>
      <motion.div
        animate={
          link === activeLink?.replace('/', '')
            ? { textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }
            : {}
        }
        transition={{
          textShadow: { duration: 0.5, ease: 'easeIn' },
          delay: 0.4,
        }}
      >
        <Link
          href={`/${link}`}
          onClick={() => {
            if (isOpen) setOpen(false);
          }}
        >
          <div>
            {link === activeLink?.replace('/', '') ? (
              <>
                <LinkHighlighterDark />
                <LinkHighlighterLight />
              </>
            ) : null}
            {link}
          </div>
        </Link>
      </motion.div>
    </li>
  );
};
