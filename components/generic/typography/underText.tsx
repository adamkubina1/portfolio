export const Undertext = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={`text-xs md:text-sm w-full text-gray-400 ${className}`}>
      {children}
    </p>
  );
};
