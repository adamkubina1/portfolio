import React from 'react';

export const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className={
        'w-full max-w-xl max-sm:max-w-xs mx-auto flex justify-center pt-40'
      }
    >
      {children}
    </main>
  );
};