export const Status = () => {
  return (
    <>
      <h2>Status</h2>
      <div className='flex flex-col gap-2 w-fit border-2 rounded-lg border-black px-4 py-2'>
        <div className='flex flex-row items-center gap-6 justify-between'>
          <p className='w-3/4'>Employment</p>
          <span className='inline-block w-4 h-4 rounded-full bg-green-500' />
        </div>
        <div className='flex flex-row items-center gap-6 justify-between'>
          <p className='w-3/4'>Side projects</p>
          <span className='inline-block w-4 h-4 rounded-full bg-yellow-300' />
        </div>
      </div>
    </>
  );
};
