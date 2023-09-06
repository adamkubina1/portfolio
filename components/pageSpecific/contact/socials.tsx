import { Heading } from '@/components/generic/typography/heading';
import { Undertext } from '@/components/generic/typography/underText';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

export const Socials = () => {
  return (
    <div className='flex flex-col justify-start items-center mb-2'>
      <Heading level={2}>Socials</Heading>
      <Undertext>Get in touch with me here</Undertext>
      <SocialsList />
    </div>
  );
};

const SocialsList = () => {
  return (
    <>
      <Link
        href={'https://www.linkedin.com/in/adam-kubina-dev/'}
        target='_blank'
        className='flex flex-row items-center gap-2'
      >
        <p>Linkedin</p>
        <FaLinkedin />
      </Link>
      <Link
        href={'https://github.com/adamkubina1'}
        target='_blank'
        className='flex flex-row items-center gap-2'
      >
        <p>Github</p>
        <FaGithub />
      </Link>
      <Link
        href={'mail:adam.kubina@seznam.cz'}
        className='flex flex-row items-center gap-2'
      >
        <p>Mail</p>
        <MdAlternateEmail />
      </Link>
    </>
  );
};
