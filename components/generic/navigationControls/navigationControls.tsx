import { PagePusher } from './pagePusher';

export const NavigationControls = ({
  direction,
  leftHref,
  rightHref,
}: {
  direction: 'left' | 'right' | 'both';
  leftHref?: string;
  rightHref?: string;
}) => {
  if (direction === 'left')
    return (
      <NavControlContainer>
        <PagePusher
          direction={direction}
          pageHref={leftHref ? leftHref : '/'}
        />
      </NavControlContainer>
    );

  if (direction === 'right')
    return (
      <NavControlContainer>
        <PagePusher
          direction={direction}
          pageHref={rightHref ? rightHref : '/'}
        />
      </NavControlContainer>
    );

  return (
    <NavControlContainer>
      <PagePusher direction={'left'} pageHref={leftHref ? leftHref : '/'} />
      <PagePusher direction={'right'} pageHref={rightHref ? rightHref : '/'} />
    </NavControlContainer>
  );
};

const NavControlContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={'mt-auto pb-6 md:pb-8'}>{children}</div>;
};
