import { NavigationControls } from '@/components/generic/navigationControls/navigationControls';
import { PageHeading } from '@/components/generic/pageHeading';
import { Github } from '@/components/pageSpecific/projects/github';
import { Technologies } from '@/components/pageSpecific/projects/technologies';

export default function Projects() {
  return (
    <>
      <PageHeading heading='PROJECTS' />

      <div className='flex justify-between'>
        <Technologies />
        <Github />
      </div>
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
