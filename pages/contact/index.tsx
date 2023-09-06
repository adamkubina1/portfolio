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
      <div className='flex flex-col items-center gap-6 md:gap-12 justify-start w-full'>
        <div className='flex flex-col md:flex-row w-full md:items-start items-center justify-center md:gap-12 '>
          <Status />
          <Socials />
        </div>
        <DownloadCv />
        <div className=' w-full'>
          <ContactForm />
        </div>
      </div>
    </PageWrapper>
  );
}
