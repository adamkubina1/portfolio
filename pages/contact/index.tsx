import { PageHeading } from '@/components/generic/typography/pageHeading';
import { PageWrapper } from '@/components/layouts/pageWrapper';
import { ContactForm } from '@/components/pageSpecific/contact/contactForm';
import { ContactText } from '@/components/pageSpecific/contact/contactText';
import { DownloadCv } from '@/components/pageSpecific/contact/downloadCv';
import { Socials } from '@/components/pageSpecific/contact/socials';

export default function Contact() {
  return (
    <PageWrapper direction={'left'} leftHref={'/projects'}>
      <PageHeading heading='Contact' />
      <ContactText />
      <div className='flex flex-col items-center gap-4 justify-start w-full'>
        <div>
          <Socials />
          <DownloadCv />
        </div>
        <div className='w-full md:pt-12'>
          <ContactForm />
        </div>
      </div>
    </PageWrapper>
  );
}
