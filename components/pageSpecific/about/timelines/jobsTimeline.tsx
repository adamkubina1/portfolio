import { animationTimeline } from '@/lib/animations/animationTimeline';
import { FaLaptopCode } from 'react-icons/fa';
import { TimelineBadge } from './timelineBadge';
import { TimelineItemAnim } from './timelineItemAnim';

export const JobsTimeline = () => {
  return (
    <ol className='relative border-l border-gray-200 dark:border-gray-700 max-md:mt-4'>
      <TimelineItemAnim
        delay={0}
        duration={animationTimeline.about.timelineItemsDuration}
      >
        <TimelineItem
          masters={'Fullstack Developer'}
          time={'2022 - present'}
          degree={'Freelance'}
          badges={['Frontend', 'Backend', 'UI/UX']}
          logo={<FaLaptopCode className='w-6 h-6  rounded-full' />}
        />
      </TimelineItemAnim>
      <TimelineItemAnim
        delay={animationTimeline.about.timelineItemsDelay}
        duration={animationTimeline.about.timelineItemsDuration}
      >
        <TimelineItem
          masters={'Software Developer'}
          time={'2021 - 2022'}
          degree={'Neoops s.r.o.'}
          badges={['Prolog', 'NLP Scripts', 'GIT Flow']}
          logo={<FaLaptopCode className='w-6 h-6  rounded-full' />}
        />
      </TimelineItemAnim>
      <TimelineItemAnim
        delay={animationTimeline.about.timelineItemsDelay * 2}
        duration={animationTimeline.about.timelineItemsDuration}
      >
        <TimelineItem
          masters={'CMS Administrator'}
          time={'2019 - 2021'}
          degree={'Alax spol. s.r.o.'}
          badges={['CMS', 'Database', 'Copy Writing']}
          logo={<FaLaptopCode className='w-6 h-6  rounded-full' />}
        />
      </TimelineItemAnim>
    </ol>
  );
};

const TimelineItem = ({
  masters,
  time,
  degree,
  badges,
  logo,
}: {
  masters: string;
  time: string;
  degree: string;
  badges?: string[];
  logo: React.ReactNode;
}) => {
  return (
    <li className='mb-8 md:mb-12 ml-6'>
      <span
        className='absolute flex items-center justify-center w-6 h-6
        rounded-full -left-3 ring-8 ring-light-base dark:ring-dark-base'
      >
        {logo}
      </span>
      <h3 className='flex items-center mb-1 text-lg font-semibold '>
        {masters}
      </h3>
      <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
        {time}
      </time>
      <h3 className='flex items-center mb-1 text-md font-semibold '></h3>
      <p className='mb-1 text-base font-normal text-gray-500 dark:text-gray-400'>
        {degree}
      </p>
      <div className='mt-2'>
        <div className='flex flex-row gap-1.5'>
          {badges?.map((badge, i) => (
            <TimelineBadge key={i}>{badge}</TimelineBadge>
          ))}
        </div>
      </div>
    </li>
  );
};
