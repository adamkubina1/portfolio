//https://github.com/anuraghazra/github-readme-stats

import { Heading } from '@/components/generic/typography/heading';
import { Undertext } from '@/components/generic/typography/underText';

export const Github = () => {
  return (
    <div className='md:self-start md:mt-4 flex flex-col gap-1 items-center'>
      <Heading level={2} className='max-md:hidden'>
        Open sourcing
      </Heading>
      <Undertext className='text-center'>My Github stats</Undertext>
      <div className='flex justify-start'>
        <img
          alt='stats'
          src='https://github-readme-streak-stats-liart.vercel.app/?user=adamkubina1&theme=transparent&hide_border=true'
          className='h-full  '
        />
      </div>
    </div>
  );
};
