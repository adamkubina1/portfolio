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
      <Link
        href={'https://www.linkedin.com/in/adam-kubina-dev/'}
        target='_blank'
        className='hover:scale-110'
      >
        <SocialLinkAnim
          duration={animationTimeline.contact.socialLinkDuration}
          delay={animationPhases.contact.phaseOne}
        >
          <FaLinkedin size={30} />
        </SocialLinkAnim>
      </Link>
      <Link
        href={'https://github.com/adamkubina1'}
        target='_blank'
        className='hover:scale-110'
      >
        <SocialLinkAnim
          duration={animationTimeline.contact.socialLinkDuration}
          delay={
            animationPhases.contact.phaseOne +
            animationTimeline.contact.socialLinkDelay
          }
        >
          <FaGithub size={30} />
        </SocialLinkAnim>
      </Link>
      <Link href={'mail:adam.kubina@seznam.cz'} className='hover:scale-110'>
        <SocialLinkAnim
          duration={animationTimeline.contact.socialLinkDuration}
          delay={
            animationPhases.contact.phaseOne +
            animationTimeline.contact.socialLinkDelay * 2
          }
        >
          <MdAlternateEmail size={30} />
        </SocialLinkAnim>
      </Link>
    </div>
  );
};

//TODO refactor to this

type SocialLinkType = {
  href: string;
  children: React.ReactNode;
  duration: number;
  delay: number;
};

const SocialLink = ({ href, children, duration, delay }: SocialLinkType) => {
  return (
    <Link href={href} target='_blank' className='hover:scale-110'>
      <SocialLinkAnim duration={duration} delay={delay}>
        {children}
      </SocialLinkAnim>
    </Link>
  );
};
