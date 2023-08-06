'use client';
import { Heading } from '@/components/generic/typography/heading';
import { Undertext } from '@/components/generic/typography/underText';
import { useState } from 'react';
import { ProjectCard } from './projectCard';

//TODO implement a stepper probably something with upper limit of for function to render?

export const ProjectsList = () => {
  const [projectsHidden, setProjectsHidden] = useState<Boolean>(true);

  return (
    <>
      <Heading level={2}>Projects</Heading>
      <Undertext>Latest projects I have worked on</Undertext>
      <div className='flex flex-col gap-2 items-start md:items-center'>
        <ProjectCard
          imgSrc={'/imgs/imgPlaceholder.PNG'}
          imgAlt={'Logo'}
          projectName={'Lorem ipsum'}
          projectDesc={
            'lorem ipsum dolor dasjfoafjdo ofjda osifjoaj fodaij foidjasof'
          }
          tags={['React', 'Node.js', 'React', 'Node.js']}
        />
        <ProjectCard
          imgSrc={'/imgs/imgPlaceholder.PNG'}
          imgAlt={'Logo'}
          projectName={'Lorem ipsum'}
          projectDesc={
            'lorem ipsum dolor dasjfoafjdo ofjda osifjoaj fodaij foidjasof'
          }
          tags={['React', 'Node.js', 'React', 'Node.js']}
        />
        {projectsHidden ? null : <HiddenProjects />}
        <p
          onClick={() => setProjectsHidden(!projectsHidden)}
          className='flex self-center'
        >
          {projectsHidden ? 'See more' : 'See less'}
        </p>
      </div>
    </>
  );
};

const HiddenProjects = () => {
  return (
    <>
      <ProjectCard
        imgSrc={'/imgs/imgPlaceholder.PNG'}
        imgAlt={'Logo'}
        projectName={'Lorem ipsum'}
        projectDesc={
          'lorem ipsum dolor dasjfoafjdo ofjda osifjoaj fodaij foidjasof'
        }
      />
      <ProjectCard
        imgSrc={'/imgs/imgPlaceholder.PNG'}
        imgAlt={'Logo'}
        projectName={'Lorem ipsum'}
        projectDesc={
          'lorem ipsum dolor dasjfoafjdo ofjda osifjoaj fodaij foidjasof'
        }
      />
    </>
  );
};
