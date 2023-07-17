'use client';
import { useState } from 'react';
import { ProjectCard } from './projectCard';

//TODO implement a stepper probably something with upper limit of for function to render?

export const ProjectsList = () => {
  const [projectsHidden, setProjectsHidden] = useState<Boolean>(true);

  return (
    <>
      <div className='text-xl font-semibold'>Projects</div>
      <p className='text-xs md:text-sm text-center text-gray-400 w-3/4'>
        Latest projects I have worked on
      </p>
      <div className='flex flex-col gap-2 items-center'>
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
        {projectsHidden ? null : <HiddenProjects />}
        <p onClick={() => setProjectsHidden(!projectsHidden)} className=''>
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
