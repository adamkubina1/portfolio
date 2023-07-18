import Link from 'next/link';
import {
  SiCypress,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export const Technologies = () => {
  return (
    <div className='md:self-start md:mt-4 flex flex-col gap-1 items-center'>
      <h2 className='max-md:hidden text-xl font-semibold'>Tech stack</h2>
      <p className='text-xs md:text-sm text-center text-gray-400 w-3/4'>
        My favorite tools
      </p>
      <Tools />
      <img
        alt='stats'
        src='https://github-readme-stats.vercel.app/api/top-langs/?username=adamkubina1&layout=compact&theme=transparent&hide_border=true'
        className='h-full'
      />
    </div>
  );
};

const Tools = () => {
  return (
    <div className='flex gap-2  flex-wrap justify-center'>
      <Link
        href={'https://www.typescriptlang.org/'}
        aria-label='Typescript'
        target='_blank'
      >
        <SiTypescript className='shadow-sm shadow-black  rounded-full w-10 h-10 text-light-base  dark:text-[#3178c6] bg-[#3178c6] dark:bg-dark-base' />
      </Link>
      <Link href={'https://nextjs.org/'} aria-label='Next.js' target='_blank'>
        <SiNextdotjs className='shadow-sm shadow-black  dark:text-white bg-black dark:bg-dark-base w-10 h-10 rounded-full text-light-base' />
      </Link>
      <Link
        href={'https://tailwindcss.com/'}
        aria-label='Tailwind'
        target='_blank'
      >
        <SiTailwindcss className='shadow-sm shadow-black  dark:text-[#00b4b6] bg-[#00b4b6] dark:bg-dark-base w-10 h-10 rounded-full text-light-base' />
      </Link>
      <Link
        href={'https://firebase.google.com/'}
        aria-label='Firebase'
        target='_blank'
      >
        <SiFirebase className='shadow-sm shadow-black  dark:text-[#FFCA28] bg-[#FFCA28] dark:bg-dark-base w-10 h-10 rounded-full text-light-base' />
      </Link>
      <Link
        href={'https://www.cypress.io/'}
        aria-label='Cypress'
        target='_blank'
      >
        <SiCypress className='shadow-sm shadow-black  dark:text-[#4B7B5B] bg-[#4B7B5B] dark:bg-dark-base w-10 h-10 rounded-full text-light-base' />
      </Link>
    </div>
  );
};
