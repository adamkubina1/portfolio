import { NavigationControls } from '@/components/generic/navigationControls/navigationControls';
import { PageHeading } from '@/components/generic/typography/pageHeading';
import { AboutInfo } from '@/components/pageSpecific/about/aboutInfo';
import { Timelines } from '@/components/pageSpecific/about/timelines/timelines';

export default function About() {
  return (
    <>
      <PageHeading heading='ABOUT' />
      <AboutInfo />
      <Timelines />
      <NavigationControls
        direction={'both'}
        leftHref={'/'}
        rightHref={'/projects'}
      />
    </>
  );
}
