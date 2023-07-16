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
    <div className='md:self-start mt-4 flex flex-col gap-1 items-center'>
      <h2 className='text-xl font-semibold'>My Tech Stack</h2>
      <p className='text-xs md:text-sm text-center text-gray-400 w-1/2'>
        The tools I currently enjoy using
      </p>
      <Tools />
    </div>
  );
};

const Tools = () => {
  return (
    <div className='flex gap-2 w-3/4 flex-wrap justify-center'>
      <Link href={'https://www.typescriptlang.org/'} target='_blank'>
        <SiTypescript className='shadow-sm shadow-black  rounded-full w-12 h-12 text-light-base  dark:text-[#3178c6] bg-[#3178c6] dark:bg-dark-base' />
      </Link>
      <Link href={'https://nextjs.org/'} target='_blank'>
        <SiNextdotjs className='shadow-sm shadow-black  dark:text-white bg-black dark:bg-dark-base w-12 h-12 rounded-full text-light-base' />
      </Link>
      <Link href={'https://tailwindcss.com/'} target='_blank'>
        <SiTailwindcss className='shadow-sm shadow-black  dark:text-[#00b4b6] bg-[#00b4b6] dark:bg-dark-base w-12 h-12 rounded-full text-light-base' />
      </Link>
      <Link href={'https://firebase.google.com/'} target='_blank'>
        <SiFirebase className='shadow-sm shadow-black  dark:text-[#FFCA28] bg-[#FFCA28] dark:bg-dark-base w-12 h-12 rounded-full text-light-base' />
      </Link>
      <Link href={'https://www.cypress.io/'} target='_blank'>
        <SiCypress className='shadow-sm shadow-black  dark:text-[#4B7B5B] bg-[#4B7B5B] dark:bg-dark-base w-12 h-12 rounded-full text-light-base' />
      </Link>
    </div>
  );
};
