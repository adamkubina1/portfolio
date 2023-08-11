import { animationTimeline } from '@/lib/animations/animationTimeline';
import Image from 'next/image';
import Link from 'next/link';
import { IoSchoolOutline } from 'react-icons/io5';
import { TimelineBadge } from './timelineBadge';
import { TimelineItemAnim } from './timelineItemAnim';

export const EducationTimeline = () => {
  return (
    <ol className='relative border-l border-gray-200 dark:border-gray-700'>
      <TimelineItemAnim delay={animationTimeline.pageTransDurationX}>
        <TimelineItem
          masters={'Development of information systems'}
          time={'2023'}
          degree={'Masters degree'}
          badges={[
            'Systems Development',
            'Architecture Design',
            'SW Implementation',
            'Project Management',
          ]}
        />
      </TimelineItemAnim>
      <TimelineItemAnim
        delay={
          animationTimeline.pageTransDurationX +
          animationTimeline.about.timelineItemsDelay
        }
      >
        <TimelineItem
          masters={'Applied informatics'}
          time={'2020 - 2023'}
          degree={"Bachelor's degree"}
          badges={[
            'Software Development',
            'IT Integration',
            'Process Analysis',
            'Knowledge Processing',
          ]}
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
}: {
  masters: string;
  time: string;
  degree: string;
  badges?: string[];
}) => {
  return (
    <li className='mb-8 ml-6'>
      <span
        className='absolute flex items-center justify-center w-6 h-6
        rounded-full -left-3 ring-8 ring-light-base dark:ring-dark-base'
      >
        <IoSchoolOutline className='w-6 h-6 bg-light-highlight2 dark:bg-dark-highlight1 rounded-full' />
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
      <Link href={'https://fis.vse.cz/'} target='_blank'>
        <Image
          src={'/imgs/vseLogo.svg'}
          className='dark:hidden'
          alt='Vse logo'
          width={122.84}
          height={30}
        />
        <Image
          src={'/imgs/vseLogoDark.svg'}
          className='hidden dark:block'
          alt='Vse logo'
          width={122.84}
          height={30}
        />
      </Link>
      <div className='mt-2 mr-6 md:mr-12'>
        <div className='grid grid-cols-2 gap-1.5'>
          {badges?.map((badge, i) => (
            <TimelineBadge key={i}>{badge}</TimelineBadge>
          ))}
        </div>
      </div>
    </li>
  );
};
