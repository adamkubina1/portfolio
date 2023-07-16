'use client';
import { Tabs } from 'flowbite-react';
import { FaLaptopCode } from 'react-icons/fa';
import { IoSchoolOutline } from 'react-icons/io5';
import { EducationTimeline } from './educationTimeline';
import { JobsTimeline } from './jobsTimeline';

export const Timelines = () => {
  return (
    <Tabs.Group
      aria-label='Education and work tabs'
      style='default'
      className='items-center gap-x-4 gap-y-0 mb-6'
    >
      <Tabs.Item
        title='Education'
        icon={() => <IoSchoolOutline className='mr-1' />}
      >
        <EducationTimeline />
      </Tabs.Item>
      <Tabs.Item
        title='Work history'
        icon={() => <FaLaptopCode className='mr-1' />}
      >
        <JobsTimeline />
      </Tabs.Item>
    </Tabs.Group>
  );
};
