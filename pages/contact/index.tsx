import { PageHeading } from '@/components/generic/typography/pageHeading';
import { PageWrapper } from '@/components/layouts/pageWrapper';
import { ContactForm } from '@/components/pageSpecific/contact/contactForm';
import { DownloadCv } from '@/components/pageSpecific/contact/downloadCv';
import { Socials } from '@/components/pageSpecific/contact/socials';
import { Status } from '@/components/pageSpecific/contact/status';

export default function Contact() {
  return (
    <PageWrapper direction={'left'} leftHref={'/blog'}>
      <PageHeading heading='Contact' />
      <div className='flex flex-col md:flex-row w-full items-center md:items-start md:justify-center md:gap-4'>
        <div>
          <Status />
          <DownloadCv />
        </div>
        <Socials />
      </div>
      <div className='mt-20 md:mt-24 w-full'>
        <ContactForm />
      </div>
    </PageWrapper>
  );
}
