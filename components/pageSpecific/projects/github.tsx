'use client';
import Image from 'next/image';

export const Github = () => {
  return (
    <div className='md:self-start mt-4 flex flex-col gap-1 items-center'>
      <h2 className='text-xl font-semibold'>Open sourcing</h2>
      <p className='text-xs md:text-sm text-center text-gray-400 w-1/2'>
        I like my source open
      </p>
      <img
        alt='stats'
        src='http://github-readme-streak-stats.herokuapp.com/?user=adamkubina1&theme=dark&background=000000'
        className='w-72 bg-white shadow-md shadow-black'
      />
      <Image
        alt='stats'
        src={
          'http://github-readme-streak-stats.herokuapp.com?user=adamkubina1&border_radius=4.4&type=png'
        }
        width={200}
        height={72}
      />
    </div>
  );
};
