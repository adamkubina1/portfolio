'use client';
import { customTabTheme } from '@/lib/style/customTabTheme';
import { Tabs } from 'flowbite-react';
import { FaLaptopCode } from 'react-icons/fa';
import { IoSchoolOutline } from 'react-icons/io5';
import { Github } from './github';
import { Technologies } from './technologies';

export const ToolsInfo = () => {
  return (
    <>
      <ToolsInfoDesktop />
      <ToolsInfoMobile />
    </>
  );
};

const ToolsInfoDesktop = () => {
  return (
    <div className='flex gap-12 max-md:hidden'>
      <Technologies />
      <Github />
    </div>
  );
};

const ToolsInfoMobile = () => {
  return (
    <Tabs.Group
      aria-label='Technologies and Github statistics tabs'
      style='default'
      theme={customTabTheme}
      className='items-center gap-x-4 gap-y-0 mb-2 mt-4 md:hidden'
    >
      <Tabs.Item
        title='Tech stack'
        icon={() => <IoSchoolOutline className='mr-1' />}
      >
        <Technologies />
      </Tabs.Item>
      <Tabs.Item
        title='Github stats'
        icon={() => <FaLaptopCode className='mr-1' />}
      >
        <Github />
      </Tabs.Item>
    </Tabs.Group>
  );
};
