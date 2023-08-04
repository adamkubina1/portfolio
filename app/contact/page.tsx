import { NavigationControls } from '@/components/generic/navigationControls/navigationControls';
import { PageHeading } from '@/components/generic/pageHeading';
import { Heading } from '@/components/generic/typography/heading';
import { ContactForm } from '@/components/pageSpecific/contact/contactForm';
import { DownloadCv } from '@/components/pageSpecific/contact/downloadCv';
import { Socials } from '@/components/pageSpecific/contact/socials';
import { Status } from '@/components/pageSpecific/contact/status';

export default function Contact() {
  return (
    <>
      <PageHeading heading='Contact' />
      <div className='flex flex-row w-full justify-center align-center'>
        <Socials />
        <div>
          <Status />
          <DownloadCv />
        </div>
      </div>
      <ContactForm />
      <Heading level={1}>Test</Heading>
      <Heading level={2}>Test</Heading>
      <Heading level={3}>Test</Heading>

      <NavigationControls direction={'left'} leftHref={'/blog'} />
    </>
  );
}
