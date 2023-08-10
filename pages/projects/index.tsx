import { PageHeading } from '@/components/generic/typography/pageHeading';
import { PageWrapper } from '@/components/layouts/pageWrapper';
import { ProjectsList } from '@/components/pageSpecific/projects/projectsList/projectsList';
import { ToolsInfo } from '@/components/pageSpecific/projects/toolsInfo/toolsInfo';

export default function Projects() {
  return (
    <PageWrapper direction={'both'} leftHref={'/about'} rightHref={'/blog'}>
      <PageHeading heading='PROJECTS' />
      <ToolsInfo />
      <ProjectsList />
    </PageWrapper>
  );
}
