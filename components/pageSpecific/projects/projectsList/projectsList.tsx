import { Heading } from '@/components/generic/typography/heading';
import { Undertext } from '@/components/generic/typography/underText';
import { projects } from '@/lib/data/projects';
import { useState } from 'react';
import { ProjectCard } from './projectCard';

export const ProjectsList = () => {
  const [projectsHidden, setProjectsHidden] = useState<Boolean>(true);

  return (
    <>
      <Heading level={2}>Projects</Heading>
      <Undertext>Latest projects I have worked on</Undertext>
      <div className='flex flex-col gap-2 items-start md:items-center'>
        {projects.slice(0, 2).map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}

        {projectsHidden ? null : <HiddenProjects />}
        <p
          onClick={() => setProjectsHidden(!projectsHidden)}
          className='flex self-center'
        >
          {projectsHidden ? 'More' : 'Less'}
        </p>
      </div>
    </>
  );
};

const HiddenProjects = () => {
  return (
    <>
      {projects.slice(2, undefined).map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </>
  );
};
