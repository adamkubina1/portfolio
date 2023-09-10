import React from 'react';

/**
 * Heading assumes everypage has saperate h1 so it starts from h2 for level 1
 */
export const Heading = ({
  level,
  children,
  className,
}: {
  level: 1 | 2 | 3;
  children: React.ReactNode;
  className?: string;
}) => {
  switch (level) {
    case 1:
      return (
        <h2 className={`text-3xl font-semibold ${className}`}>{children}</h2>
      );

    case 2:
      return (
        <h3 className={`text-2xl font-semibold ${className}`}>{children}</h3>
      );
    case 3:
      return (
        <h4 className={`text-lg font-semibold ${className}`}>{children}</h4>
      );
  }
};
