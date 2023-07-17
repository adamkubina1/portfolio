'use client';

//https://github.com/anuraghazra/github-readme-stats

export const Github = () => {
  return (
    <div className='md:self-start mt-4 flex flex-col gap-1 items-center'>
      <h2 className='text-xl font-semibold'>Open sourcing</h2>
      <p className='text-xs md:text-sm text-center text-gray-400 w-1/2'>
        I like my source open
      </p>
      <div className='flex justify-start'>
        <img
          alt='stats'
          src='http://github-readme-streak-stats.herokuapp.com/?user=adamkubina1&theme=transparent&hide_border=true'
          className='h-full  '
        />
        <img
          alt='stats'
          src='https://github-readme-stats.vercel.app/api/top-langs/?username=adamkubina1&layout=compact&theme=transparent&hide_border=true'
          className='h-full'
        />
      </div>

      {/* <Image
        alt='stats'
        src={
          'http://github-readme-streak-stats.herokuapp.com?user=adamkubina1&border_radius=4.4&type=png'
        }
        width={200}
        height={72}
      /> */}
    </div>
  );
};
