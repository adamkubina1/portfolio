import React from 'react';

export const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className={
        'w-full h-screen max-w-2xl max-sm:max-w-xs mx-auto  flex flex-col items-center  pt-16 md:pt-24'
      }
    >
      {children}
    </main>
  );
};
