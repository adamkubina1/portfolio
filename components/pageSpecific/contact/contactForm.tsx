'use client';

import { Heading } from '@/components/generic/typography/heading';
import { Undertext } from '@/components/generic/typography/underText';
import { Label, TextInput, Textarea } from 'flowbite-react';
import { SiMinutemailer } from 'react-icons/si';

export const ContactForm = () => {
  return (
    <form
      action={'https://submit-form.com/KeSjDB0y'}
      className='flex flex-col gap-2 items-center w-full'
      onSubmit={(e) => {}}
    >
      <div>
        <Heading level={2}>Direct Message</Heading>
        <Undertext className='text-center'>Contact me directly!</Undertext>
      </div>
      <EmailField />
      <EmailBodyField />
      <button
        className={
          'dark:border-gray-700 border-[0.5px] px-8 py-2 mt-2 rounded-xl flex flex-row items-center gap-2 shadow-sm hover:scale-105 hover:shadow-md'
        }
        type='submit'
      >
        Send!
        <SiMinutemailer className='text-light-highlight2 dark:text-dark-highlight2' />
      </button>
    </form>
  );
};

const EmailField = () => {
  return (
    <div className='w-11/12 md:w-3/5'>
      <div className='mb-2 block'>
        <Label htmlFor='email' value='Your email' />
      </div>
      <TextInput
        className='[&>*>*]:dark:!bg-gray-800'
        id='email'
        name='email'
        placeholder='name@email.com'
        required
        shadow
        type='email'
      />
    </div>
  );
};

const EmailBodyField = () => {
  return (
    <div className='w-11/12 md:w-3/5' id='textarea'>
      <div className='mb-2 block'>
        <Label htmlFor='comment' value='Your message for me' />
      </div>
      <Textarea
        id='comment'
        className='dark:!bg-gray-800'
        name='message'
        placeholder='Lorem ipsum'
        required
        rows={6}
      />
    </div>
  );
};
