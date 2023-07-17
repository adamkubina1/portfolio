import { NavigationControls } from '@/components/generic/navigationControls/navigationControls';
import { PageHeading } from '@/components/generic/pageHeading';
import { ProjectsList } from '@/components/pageSpecific/projects/projectsList/projectsList';
import { ToolsInfo } from '@/components/pageSpecific/projects/toolsInfo/toolsInfo';

export default function Projects() {
  return (
    <>
      <PageHeading heading='PROJECTS' />

      <ToolsInfo />
      <ProjectsList />

      <NavigationControls
        direction={'both'}
        leftHref={'/about'}
        rightHref={'/blog'}
      />
    </>
  );
}
