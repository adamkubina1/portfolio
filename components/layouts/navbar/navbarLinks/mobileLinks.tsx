import { navigationLinks } from '@/lib/data';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { NavbarOpenType } from '../navbar';

export const MobileLinks = ({
  isOpen,
  setOpen,
  activeLink,
}: NavbarOpenType & { activeLink: string | undefined }) => {
  return (
    <>
      <div
        className={'md:hidden flex items-center hover:cursor-pointer'}
        onClick={() => setOpen(!isOpen)}
      >
        <div className='z-50'>{isOpen ? <CloseIcon /> : <HamburgerIcon />}</div>
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
    </>
  );
};

const MobileLinksMenu = ({
  isOpen,
  setOpen,
  activeLink,
}: NavbarOpenType & { activeLink: string | undefined }) => {
  return (
    <motion.div
      className={'absolute pt-24 top-0 left-0 bg-dark-highlight3'}
      key={'mobilelinks'}
      initial={{ opacity: 0, width: 0, height: 0 }}
      animate={{ opacity: 1, width: '100vw', height: '100vh' }}
      exit={{ opacity: 0, width: 0, height: 0 }}
      transition={{ opacity: { duration: 0.5 } }}
    >
      <ul className={'flex items-center wrap flex-col'}>
        {navigationLinks.map((link, i) => (
          <li key={i} className={'py-4'}>
            <Link
              href={`/${link}`}
              onClick={() => {
                if (isOpen) setOpen(false);
              }}
              className={
                link === activeLink?.replace('/', '') ? 'text-red-700' : ''
              }
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const HamburgerIcon = () => {
  return <>Open</>;
};

const CloseIcon = () => {
  return <>Close</>;
};
