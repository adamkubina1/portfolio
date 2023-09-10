export const TimelineBadge = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      className='flex justify-start items-center bg-light-highlight2 dark:bg-dark-highlight2 text-[12px]  px-0.5 md:px-1
  py-0.5 md:py-1 rounded  dark:text-gray-100'
    >
      {children}
    </span>
  );
};
