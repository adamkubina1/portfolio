//https://github.com/anuraghazra/github-readme-stats

export const Github = () => {
  return (
    <div className='md:self-start md:mt-4 flex flex-col gap-1 items-center'>
      <h2 className='max-md:hidden text-xl font-semibold'>Open sourcing</h2>
      <p className='text-xs md:text-sm text-center text-gray-400 w-1/2'>
        My Github stats
      </p>
      <div className='flex justify-start'>
        <img
          alt='stats'
          src='https://github-readme-streak-stats.herokuapp.com/?user=adamkubina1&theme=transparent&hide_border=true'
          className='h-full  '
        />
      </div>
    </div>
  );
};
