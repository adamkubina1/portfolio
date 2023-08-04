import { Heading } from '@/components/generic/typography/heading';

export const Socials = () => {
  return (
    <div className='flex flex-col'>
      <Heading level={1}>Socials</Heading>
      <p>Get in touch with me here</p>
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
