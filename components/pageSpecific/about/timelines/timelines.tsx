'use client';
import { customTabTheme } from '@/lib/style/customTabTheme';
import { Tabs } from 'flowbite-react';
import { useState } from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { IoSchoolOutline } from 'react-icons/io5';
import { EducationTimeline } from './educationTimeline';
import { JobsTimeline } from './jobsTimeline';

export const Timelines = () => {
  const [tabClicked, setTabClicked] = useState<boolean>(false);

  return (
    <Tabs.Group
      aria-label='Education and work tabs'
      theme={customTabTheme}
      style='default'
      className='items-center gap-x-4 gap-y-0 mb-6 pb-2'
      onActiveTabChange={() => setTabClicked(true)}
    >
      <Tabs.Item
        title='Education'
        icon={() => <IoSchoolOutline className='mr-1' />}
      >
        <EducationTimeline tabClicked={tabClicked} />
      </Tabs.Item>
      <Tabs.Item
        title='Work History'
        icon={() => <FaLaptopCode className='mr-1' />}
      >
        <JobsTimeline />
      </Tabs.Item>
    </Tabs.Group>
  );
};
