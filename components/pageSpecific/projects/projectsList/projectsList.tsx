import { Heading } from '@/components/generic/typography/heading';
import { Undertext } from '@/components/generic/typography/underText';
import { animationTimeline } from '@/lib/animations/animationTimeline';
import { projects } from '@/lib/data/projects';
import { useState } from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { ProjectCard } from './projectCard';
import { ProjectCardAnim } from './projectCardAnim';

export const ProjectsList = () => {
  const [projectsHidden, setProjectsHidden] = useState<Boolean>(true);

  return (
    <>
      <Heading level={2}>Projects</Heading>
      <Undertext className='text-center'>
        Latest projects I have worked on
      </Undertext>
      <div className='flex flex-col gap-3 md:gap-2 items-start mt-4'>
        {projects.slice(0, 2).map((project, i) => (
          <ProjectCardAnim
            key={i}
            duration={animationTimeline.projects.projectCardDuration}
            delay={animationTimeline.projects.projectCardDelay * (i + 1)}
          >
            <ProjectCard {...project} />
          </ProjectCardAnim>
        ))}

        {projectsHidden ? null : <HiddenProjects />}
        <div
          onClick={() => setProjectsHidden(!projectsHidden)}
          className='flex self-center hover:cursor-pointer mt-2 mb-4'
        >
          {projectsHidden ? (
            <MdExpandMore size={24} />
          ) : (
            <MdExpandLess size={24} />
          )}
        </div>
      </div>
    </>
  );
};

const HiddenProjects = () => {
  return (
    <div className='flex flex-col gap-3 md:gap-2 items-start'>
      {projects.slice(2, undefined).map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </div>
  );
};
