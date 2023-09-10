import React from 'react';
import { NavigationControls } from '../generic/navigationControls/navigationControls';
import { Content } from './content';
import { PageTransition } from './pageTransition';
import { Seo } from './seo';

export const PageWrapper = ({
  children,
  title,
  direction,
  leftHref,
  rightHref,
}: {
  children: React.ReactNode;
  title?: string;
  direction: 'left' | 'right' | 'both';
  leftHref?: string;
  rightHref?: string;
}) => {
  return (
    <>
      <Seo title={title} />
      <Content>
        <PageTransition>{children}</PageTransition>
        <NavigationControls
          direction={direction}
          leftHref={leftHref}
          rightHref={rightHref}
        />
      </Content>
    </>
  );
};
