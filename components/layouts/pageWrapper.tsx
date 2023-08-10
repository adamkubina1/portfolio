import React from 'react';
import { NavigationControls } from '../generic/navigationControls/navigationControls';
import { Content } from './content';
import { PageTransition } from './pageTransition';

export const PageWrapper = ({
  children,
  direction,
  leftHref,
  rightHref,
}: {
  children: React.ReactNode;
  direction: 'left' | 'right' | 'both';
  leftHref?: string;
  rightHref?: string;
}) => {
  return (
    <Content>
      <PageTransition>{children}</PageTransition>
      <NavigationControls
        direction={direction}
        leftHref={leftHref}
        rightHref={rightHref}
      />
    </Content>
  );
};
