import { NavigationControls } from '@/components/generic/navigationControls/navigationControls';
import { PageHeading } from '@/components/generic/typography/pageHeading';
import { PageWrapper } from '@/components/layouts/pageWrapper';
import { ContactForm } from '@/components/pageSpecific/contact/contactForm';
import { DownloadCv } from '@/components/pageSpecific/contact/downloadCv';
import { Socials } from '@/components/pageSpecific/contact/socials';
import { Status } from '@/components/pageSpecific/contact/status';

export default function Contact() {
  return (
    <PageWrapper>
      <PageHeading heading='Contact' />
      <div className='flex flex-col md:flex-row w-full items-center md:items-start md:justify-center md:gap-4'>
        <div>
          <Status />
          <DownloadCv />
        </div>
        <Socials />
      </div>
      <div className='md:mt-24'>
        <ContactForm />
      </div>

      <NavigationControls direction={'left'} leftHref={'/blog'} />
    </PageWrapper>
  );
}
