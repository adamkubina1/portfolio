export const Undertext = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={`text-xs md:text-sm text-center text-gray-400 w-3/4 ${className}`}
    >
      {children}
    </p>
  );
};
