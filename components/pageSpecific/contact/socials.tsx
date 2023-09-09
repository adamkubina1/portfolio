import { Heading } from '@/components/generic/typography/heading';
import { Undertext } from '@/components/generic/typography/underText';
import {
  animationPhases,
  animationTimeline,
} from '@/lib/animations/animationTimeline';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { SocialLinkAnim } from './socialLinkAnim';

export const Socials = () => {
  return (
    <div className='flex flex-col justify-start items-center mb-2'>
      <Heading level={2}>My Socials</Heading>
      <Undertext className='mb-2 text-center'>
        Get in touch with me here
      </Undertext>
      <SocialsList />
    </div>
  );
};

const SocialsList = () => {
  return (
    <div className='flex flex-row items-center gap-2'>
      {SocialLinkData.map((link, i) => (
        <SocialLink
          key={i}
          duration={animationTimeline.contact.socialLinkDuration}
          delay={
            animationPhases.contact.phaseOne +
            animationTimeline.contact.socialLinkDelay * i
          }
          href={link.href}
          logo={link.logo}
        />
      ))}
    </div>
  );
};

const SocialLinkData: Omit<SocialLinkType, 'delay' | 'duration'>[] = [
  {
    href: 'https://www.linkedin.com/in/adam-kubina-dev/',
    logo: <FaLinkedin size={30} />,
  },
  { href: 'https://github.com/adamkubina1', logo: <FaGithub size={30} /> },
  {
    href: 'mailto: adam.kubina@seznam.cz',
    logo: <MdAlternateEmail size={30} />,
  },
];

type SocialLinkType = {
  href: string;
  duration: number;
  delay: number;
  logo: React.ReactNode;
};

const SocialLink = ({ href, logo, duration, delay }: SocialLinkType) => {
  return (
    <Link href={href} target='_blank' className='hover:scale-110'>
      <SocialLinkAnim duration={duration} delay={delay}>
        {logo}
      </SocialLinkAnim>
    </Link>
  );
};
