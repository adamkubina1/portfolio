import { FaLaptopCode } from 'react-icons/fa';

export const JobsTimeline = () => {
  return (
    <ol className='relative border-l border-gray-200 dark:border-gray-700 max-md:mt-4'>
      <FreelanceItem />
      <NeoopsItem />
      <AlaxItem />
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
        <FaLaptopCode className='w-6 h-6 bg-light-highlight2 dark:bg-dark-highlight1 rounded-full' />
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
      <div className='mt-2'>{badges}</div>
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

const NeoopsItem = () => {
  return (
    <TimelineItem
      masters={'Software developer'}
      time={'2021 - 2022'}
      degree={'Neoops s.r.o.'}
      badges={<NeoopsBadges />}
    />
  );
};
const NeoopsBadges = () => {
  return (
    <div className='grid grid-cols-3 gap-1.5'>
      <TimelineBadge>Prolog</TimelineBadge>
      <TimelineBadge>NLP Scripts</TimelineBadge>
      <TimelineBadge>GIT Flow</TimelineBadge>
    </div>
  );
};

const FreelanceItem = () => {
  return (
    <TimelineItem
      masters={'Fullstack developer'}
      time={'2022'}
      degree={'Freelance'}
      badges={<FreelanceBadges />}
    />
  );
};

const FreelanceBadges = () => {
  return (
    <div className='grid grid-cols-3 gap-1.5'>
      <TimelineBadge>Frontend</TimelineBadge>
      <TimelineBadge>Backend</TimelineBadge>
      <TimelineBadge>UI/UX Design</TimelineBadge>
    </div>
  );
};

const AlaxItem = () => {
  return (
    <TimelineItem
      masters={'CMS administrator'}
      time={'2019 - 2021'}
      degree={'Alax spol. s.r.o.'}
      badges={<AlaxBadges />}
    />
  );
};

const AlaxBadges = () => {
  return (
    <div className='grid grid-cols-2 gap-1.5'>
      <TimelineBadge>CMS/Database Admin</TimelineBadge>
      <TimelineBadge>Copy Writing</TimelineBadge>
    </div>
  );
};
