import Image from 'next/image';
import { IoSchoolOutline } from 'react-icons/io5';

export const EducationTimeline = () => {
  return (
    <ol className='relative border-l border-gray-200 dark:border-gray-700'>
      <MastersItem />
      <BachelorsItem />
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
  badges?: React.ReactNode;
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
      <Image
        src={'/imgs/vseLogo.svg'}
        alt='Vse logo'
        width={122.84}
        height={30}
      />
      <div className='mt-2 mr-6 md:mr-12'>{badges}</div>
    </li>
  );
};

const TimelineBadge = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      className='flex justify-start items-center bg-light-highlight2 dark:bg-dark-highlight1 text-[12px]  px-0.5
  py-0.5 rounded  dark:text-gray-300'
    >
      {children}
    </span>
  );
};

const BachelorsItem = () => {
  return (
    <TimelineItem
      masters={'Applied informatics'}
      time={'2020 - 2023'}
      degree={"Bachelor's degree"}
      badges={<BachelorsBadges />}
    />
  );
};
const BachelorsBadges = () => {
  return (
    <div className='grid grid-cols-2 gap-1.5'>
      <TimelineBadge>Software Development</TimelineBadge>
      <TimelineBadge>IT Integration</TimelineBadge>
      <TimelineBadge>Process Analysis</TimelineBadge>
      <TimelineBadge>Knowledge Processing</TimelineBadge>
    </div>
  );
};

const MastersItem = () => {
  return (
    <TimelineItem
      masters={'Development of information systems'}
      time={'2023'}
      degree={'Masters degree'}
      badges={<MastersBadges />}
    />
  );
};

const MastersBadges = () => {
  return (
    <div className='grid grid-cols-2 gap-1.5'>
      <TimelineBadge>Systems Development</TimelineBadge>
      <TimelineBadge>Architecture Design</TimelineBadge>
      <TimelineBadge>SW Implementation</TimelineBadge>
      <TimelineBadge>Project Management</TimelineBadge>
    </div>
  );
};
