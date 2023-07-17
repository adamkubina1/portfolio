import Image from 'next/image';

export const ProjectCard = ({
  imgSrc,
  imgAlt,
  projectName,
  projectDesc,
  tags,
}: {
  imgSrc: string;
  imgAlt: string;
  projectName: string;
  projectDesc?: React.ReactNode;
  tags?: React.ReactNode;
}) => {
  return (
    <div className='flex'>
      <div className='relative w-40 h-24 md:w-80 md:h-44'>
        <Image
          src={imgSrc}
          style={{ objectFit: 'cover' }}
          alt={imgAlt}
          fill
          className='z-20 rounded-lg'
        />
      </div>
      <div className='flex flex-col justify-center items-end'>
        <div className=''>{projectName}</div>
        <div className='z-30 -ml-20 bg-gray-100 p-2 rounded-lg w-60 md:w-72'>
          <p className='text-sm'>{projectDesc}</p>
        </div>
        <div>{tags}</div>
      </div>
    </div>
  );
};
