'use client';
import { PulsatingCircle } from '@/components/generic/pulsatingCircle';
import { Heading } from '@/components/generic/typography/heading';

export const Status = () => {
  return (
    <div className=' flex flex-col items-center max-md:w-full'>
      <Heading level={2}>Status</Heading>
      <div className='flex flex-col gap-2 w-fit  px-4 py-2'>
        <div className='flex flex-row items-center gap-6 align-middle'>
          <p className='w-3/4'>Employment</p>
          <PulsatingCircle
            className={` bg-yellow-300 ml-2`}
            lightColor={'rgb(250, 202, 21)'}
          />
        </div>
        <div className='flex flex-row items-center gap-6 align-middle'>
          <p className='w-3/4'>Side projects</p>
          <PulsatingCircle
            className={`bg-yellow-300 ml-2`}
            lightColor={'rgb(250, 202, 21)'}
          />
        </div>
      </div>
    </div>
  );
};
