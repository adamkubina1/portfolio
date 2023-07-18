import { NavigationControls } from '@/components/generic/navigationControls/navigationControls';
import { PageHeading } from '@/components/generic/pageHeading';
import { ContactForm } from '@/components/pageSpecific/contact/contactForm';
import { DownloadCv } from '@/components/pageSpecific/contact/downloadCv';
import { Socials } from '@/components/pageSpecific/contact/socials';
import { Status } from '@/components/pageSpecific/contact/status';

export default function Contact() {
  return (
    <>
      <PageHeading heading='Contact' />
      <div className='flex flex-row w-full justify-center'>
        <Socials />
        <div className='w-full'>
          <Status />
          <DownloadCv />
        </div>
      </div>
      <ContactForm />
      <NavigationControls direction={'left'} leftHref={'/blog'} />
    </>
  );
}
