import { Heading } from '@/components/generic/typography/heading';
import { Text } from '@/components/generic/typography/text';
import Image from 'next/image';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';
import { BsFileEarmarkCode } from 'react-icons/bs';

export type ProjectCardType = {
  imgSrc: string;
  imgAlt: string;
  projectName: string;
  projectDesc?: React.ReactNode;
  codeLink?: string;
  webLink: string | null;
  tags?: string[];
};

export const ProjectCard = ({
  imgSrc,
  imgAlt,
  projectName,
  webLink,
  codeLink,
  projectDesc,
  tags,
}: ProjectCardType) => {
  return (
    <div className='flex max-w-lg'>
      <Link
        href={webLink ? webLink : '/'}
        target='_blank'
        className='z-20 relative w-40 h-24 md:w-80 md:h-44 hover:scale-105'
      >
        <Image
          src={imgSrc}
          style={{ objectFit: 'cover' }}
          alt={imgAlt}
          fill
          className=' rounded-lg'
        />
      </Link>
      <div className='flex flex-col justify-end items-end z-30'>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-1'>
            {webLink ? (
              <Link href={webLink} target='_blank'>
                <BiLinkExternal />
              </Link>
            ) : null}
            {codeLink ? (
              <Link href={codeLink} target='_blank' className='hover:scale-110'>
                <BsFileEarmarkCode />
              </Link>
            ) : null}
          </div>
          <Heading level={3}>{projectName}</Heading>
        </div>
        <div className=' -ml-20 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg w-60 md:w-72'>
          <Text className='text-sm'>{projectDesc}</Text>
        </div>
        <div className='flex flex-row mt-1 gap-1 -ml-20'>
          {tags?.map((tag, i) => (
            <ProjectTag key={i}>{tag}</ProjectTag>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectTag = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className='bg-light-highlight2 text-gray-600 text-xs font-medium px-1 py-0.5 rounded dark:bg-dark-highlight2 dark:text-gray-200'>
      {children}
    </span>
  );
};
