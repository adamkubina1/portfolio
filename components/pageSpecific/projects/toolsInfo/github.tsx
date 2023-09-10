//https://github.com/anuraghazra/github-readme-stats

import { Heading } from '@/components/generic/typography/heading';
import { Undertext } from '@/components/generic/typography/underText';
import { useTheme } from 'next-themes';

export const Github = () => {
  const { theme } = useTheme();
  return (
    <div className='md:self-start md:mt-4 flex flex-col gap-1 items-center md:w-1/2'>
      <Heading level={2} className='max-md:hidden'>
        Open Sourcing
      </Heading>
      <Undertext className='text-center'>My Github stats</Undertext>
      <div className='flex justify-start'>
        <a href='https://github.com/adamkubina1' target='_blank'>
          <img
            alt='stats'
            src={
              theme === 'light'
                ? 'https://github-readme-streak-stats-liart.vercel.app/?user=adamkubina1&theme=transparent&hide_border=true&dates=9CA3AF&currStreakLabel=332E2E&sideLabels=332E2E&ring=A1D4B3&fire=A1D4B3&sideNums=332E2E&currStreakNum=332E2E'
                : 'https://github-readme-streak-stats-liart.vercel.app/?user=adamkubina1&theme=transparent&hide_border=true&dates=9CA3AF&currStreakLabel=F3F3F3&sideLabels=F3F3F3&ring=579ABE&fire=579ABE&sideNums=F3F3F3&currStreakNum=F3F3F3'
            }
            className='h-[160px] md:w-[336.39px] md:max-w-[336.39px]'
            loading='lazy'
          />
        </a>
      </div>
    </div>
  );
};
