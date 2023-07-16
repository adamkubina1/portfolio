import { NavigationControls } from '@/components/generic/navigationControls/navigationControls';
import { PageHeading } from '@/components/generic/pageHeading';

export default function Projects() {
  return (
    <>
      <PageHeading heading='PROJECTS' />

      <div>My tech stack</div>
      <div>Projects</div>
      <div>Github stats/link</div>

      <NavigationControls
        direction={'both'}
        leftHref={'/about'}
        rightHref={'/blog'}
      />
    </>
  );
}
