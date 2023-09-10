export const Text = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={`text-md ${className}`}>{children}</p>;
};
