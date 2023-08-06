import { Heading } from '@/components/generic/typography/heading';
import { Undertext } from '@/components/generic/typography/underText';

export const Socials = () => {
  return (
    <div className='flex flex-col justify-start'>
      <Heading level={2}>Socials</Heading>
      <Undertext>Get in touch with me here</Undertext>
      <SocialsList />
    </div>
  );
};

const SocialsList = () => {
  return (
    <>
      <div>Linkedin</div>
      <div>Github</div>
    </>
  );
};
