'use client';

import { Button, Label, TextInput, Textarea } from 'flowbite-react';

export const ContactForm = () => {
  return (
    <form className='flex max-w-md flex-col gap-4'>
      <EmailField />
      <SubjectField />
      <EmailBodyField />
      <Button type='submit'>Submit</Button>
    </form>
  );
};

const EmailField = () => {
  return (
    <div>
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

const SubjectField = () => {
  return (
    <div>
      <div className='mb-2 block'>
        <Label htmlFor='subject' value='Email subject' />
      </div>
      <TextInput
        id='subject'
        placeholder='Subject'
        required
        shadow
        type='text'
      />
    </div>
  );
};

const EmailBodyField = () => {
  return (
    <div className='max-w-md' id='textarea'>
      <div className='mb-2 block'>
        <Label htmlFor='comment' value='Email body' />
      </div>
      <Textarea id='comment' placeholder='Lorem ipsum' required rows={4} />
    </div>
  );
};
