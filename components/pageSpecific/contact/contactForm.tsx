'use client';

import { Undertext } from '@/components/generic/typography/underText';
import { Label, TextInput, Textarea } from 'flowbite-react';
import { FiMail } from 'react-icons/fi';

export const ContactForm = () => {
  return (
    <form
      className='flex flex-col gap-2 items-center'
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Undertext className='text-center'>Or contact me directly!</Undertext>
      <EmailField />
      <EmailBodyField />
      <button
        className={
          'border-[0.5px] px-8 py-2 mt-2 rounded-xl flex flex-row items-center gap-2'
        }
        type='submit'
      >
        Send!
        <FiMail />
      </button>
    </form>
  );
};

const EmailField = () => {
  return (
    <div className='w-3/4 md:w-1/2'>
      <div className='mb-2 block'>
        <Label htmlFor='email' value='Your email' />
      </div>
      <TextInput
        id='email'
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
    <div className='w-3/4 md:w-1/2' id='textarea'>
      <div className='mb-2 block'>
        <Label htmlFor='comment' value='Your message for me' />
      </div>
      <Textarea id='comment' placeholder='Lorem ipsum' required rows={4} />
    </div>
  );
};
