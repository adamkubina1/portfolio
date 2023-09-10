import { PageHeading } from '@/components/generic/typography/pageHeading';
import { PageWrapper } from '@/components/layouts/pageWrapper';
import { AboutInfo } from '@/components/pageSpecific/about/aboutInfo';
import { Timelines } from '@/components/pageSpecific/about/timelines/timelines';

export default function About() {
  return (
    <PageWrapper
      direction={'both'}
      leftHref={'/'}
      rightHref={'/projects'}
      title='About'
    >
      <PageHeading heading='ABOUT' />
      <AboutInfo />
      <Timelines />
    </PageWrapper>
  );
}
