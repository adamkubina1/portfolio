import React from 'react';
import { Content } from './content';
import { PageTransition } from './pageTransition';

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageTransition>
      <Content>{children}</Content>
    </PageTransition>
  );
};
