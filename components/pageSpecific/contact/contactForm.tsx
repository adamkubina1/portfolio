'use client';

import { Undertext } from '@/components/generic/typography/underText';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';

export const ContactForm = () => {
  return (
    <form
      className='flex flex-col gap-2 items-center'
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Undertext className='text-center'>Or contact directly!</Undertext>
      <EmailField />
      <EmailBodyField />
      <Button className={'border-[0.5px] px-8'} type='submit'>
        Send!
      </Button>
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
        <Label htmlFor='comment' value='Message for me' />
      </div>
      <Textarea id='comment' placeholder='Lorem ipsum' required rows={4} />
    </div>
  );
};
