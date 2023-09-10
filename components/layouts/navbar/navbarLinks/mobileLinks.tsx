import {
  animationPhases,
  animationTimeline,
} from '@/lib/animations/animationTimeline';
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
        'absolute top-0 left-0  bg-light-base dark:bg-dark-base !bg-opacity-[97%] flex justify-center pt-44'
      }
      key={'mobilelinks'}
      initial={{ opacity: 0, width: 0, height: 0 }}
      animate={{ opacity: 1, width: '100%', height: '100vh' }}
      exit={{ opacity: 0, width: 0, height: 0 }}
      transition={{
        opacity: { duration: animationTimeline.mobileNav.fadeInDuration },
      }}
    >
      <ul className={'flex items-center wrap flex-col gap-6'}>
        <AnimatePresence>
          {navigationLinks.map((link, i) => (
            <MobileLink
              key={i}
              order={i}
              activeLink={activeLink}
              isOpen={isOpen}
              setOpen={setOpen}
              link={link}
            />
          ))}
        </AnimatePresence>
      </ul>
    </motion.div>
  );
};

const MobileLink = ({
  link,
  activeLink,
  isOpen,
  setOpen,
  order,
}: NavbarOpenType & {
  activeLink: string | undefined;
  link: string;
  order: number;
}) => {
  return (
    <motion.li
      className={'py-6'}
      initial={{ y: 10, opacity: 0 }}
      animate={
        link === activeLink?.replace('/', '')
          ? { textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', y: 0, opacity: 1 }
          : { y: 0, opacity: 1 }
      }
      transition={{
        textShadow: {
          duration: animationTimeline.mobileNav.activeLinkDuration,
          ease: 'easeIn',
          delay: animationPhases.mobileNav.phaseTwo,
        },
        opacity: {
          duration: animationTimeline.mobileNav.linkDuration,
          delay:
            animationPhases.mobileNav.phaseOne +
            animationTimeline.mobileNav.linkDelay * order,
        },
        y: {
          duration: animationTimeline.mobileNav.linkDuration,
          delay:
            animationPhases.mobileNav.phaseOne +
            animationTimeline.mobileNav.linkDelay * order,
        },
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
              <LinkHighlighterDark delay={animationPhases.mobileNav.phaseTwo} />
              <LinkHighlighterLight
                delay={animationPhases.mobileNav.phaseTwo}
              />
            </>
          ) : null}
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </div>
      </Link>
    </motion.li>
  );
};
