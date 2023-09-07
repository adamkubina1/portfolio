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
  return (
    <NavControlContainer>
      <PagePusher
        direction={'left'}
        disabled={direction === 'right'}
        pageHref={leftHref ? leftHref : '/'}
      />
      <PagePusher
        direction={'right'}
        disabled={direction === 'left'}
        pageHref={rightHref ? rightHref : '/'}
      />
    </NavControlContainer>
  );
};

const NavControlContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={'mt-auto pb-6 md:pb-8 flex flex-row gap-5'}>{children}</div>
  );
};
