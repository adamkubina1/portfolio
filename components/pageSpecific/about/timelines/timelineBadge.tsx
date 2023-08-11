export const TimelineBadge = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      className='flex justify-start items-center bg-light-highlight2 dark:bg-dark-highlight1 text-[12px]  px-0.5
  py-0.5 rounded  dark:text-gray-300'
    >
      {children}
    </span>
  );
};
