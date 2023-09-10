import { Heading } from '@/components/generic/typography/heading';
import { Undertext } from '@/components/generic/typography/underText';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import {
  SiCypress,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export const Technologies = () => {
  const { theme } = useTheme();

  return (
    <div className='md:self-start md:mt-4 flex flex-col gap-1 items-center md:w-1/2'>
      <Heading level={2} className='max-md:hidden'>
        Tech Stack
      </Heading>
      <Undertext className='text-center'>
        My fav tools & language stats
      </Undertext>
      <Tools />
      <a href={'https://github.com/adamkubina1'} target='_blank'>
        <img
          alt='stats'
          src={
            theme === 'light'
              ? `https://github-readme-stats-three-omega-17.vercel.app/api/top-langs/?username=adamkubina1&layout=compact&theme=transparent&hide_border=true&hide_title=true&text_color=332E2E`
              : 'https://github-readme-stats-three-omega-17.vercel.app/api/top-langs/?username=adamkubina1&layout=compact&theme=transparent&hide_border=true&hide_title=true&text_color=F3F3F3'
          }
          className='h-[120px] md:w-[266.66px]'
          loading='lazy'
        />
      </a>
    </div>
  );
};

const Tools = () => {
  return (
    <div className='flex gap-2 flex-wrap justify-center'>
      <Link
        href={'https://www.typescriptlang.org/'}
        aria-label='Typescript'
        target='_blank'
        className='hover:scale-105'
      >
        <SiTypescript className='shadow-sm shadow-black  rounded-full w-10 h-10 text-light-base  dark:text-[#3178c6] bg-[#3178c6] dark:bg-dark-base' />
      </Link>
      <Link
        href={'https://nextjs.org/'}
        aria-label='Next.js'
        target='_blank'
        className='hover:scale-105'
      >
        <SiNextdotjs className='shadow-sm shadow-black  dark:text-white bg-black dark:bg-dark-base w-10 h-10 rounded-full text-light-base' />
      </Link>
      <Link
        href={'https://tailwindcss.com/'}
        aria-label='Tailwind'
        target='_blank'
        className='hover:scale-105'
      >
        <SiTailwindcss className='shadow-sm shadow-black  dark:text-[#00b4b6] bg-[#00b4b6] dark:bg-dark-base w-10 h-10 rounded-full text-light-base' />
      </Link>
      <Link
        href={'https://firebase.google.com/'}
        aria-label='Firebase'
        target='_blank'
        className='hover:scale-105'
      >
        <SiFirebase className='shadow-sm shadow-black  dark:text-[#FFCA28] bg-[#FFCA28] dark:bg-dark-base w-10 h-10 rounded-full text-light-base' />
      </Link>
      <Link
        href={'https://www.cypress.io/'}
        aria-label='Cypress'
        target='_blank'
        className='hover:scale-105'
      >
        <SiCypress className='shadow-sm shadow-black  dark:text-[#4B7B5B] bg-[#4B7B5B] dark:bg-dark-base w-10 h-10 rounded-full text-light-base' />
      </Link>
    </div>
  );
};
