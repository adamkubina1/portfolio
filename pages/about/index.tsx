import { NavigationControls } from '@/components/generic/navigationControls/navigationControls';
import { PageHeading } from '@/components/generic/typography/pageHeading';
import { PageWrapper } from '@/components/layouts/pageWrapper';
import { AboutInfo } from '@/components/pageSpecific/about/aboutInfo';
import { Timelines } from '@/components/pageSpecific/about/timelines/timelines';

export default function About() {
  return (
    <PageWrapper>
      <PageHeading heading='ABOUT' />
      <AboutInfo />
      <Timelines />
      <NavigationControls
        direction={'both'}
        leftHref={'/'}
        rightHref={'/projects'}
      />
    </PageWrapper>
  );
}
