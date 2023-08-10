import { NavigationControls } from '@/components/generic/navigationControls/navigationControls';
import { PageHeading } from '@/components/generic/typography/pageHeading';
import { PageWrapper } from '@/components/layouts/pageWrapper';
import { WritingInfo } from '@/components/pageSpecific/blog/writingInfo/writingInfo';

export default function Blog() {
  return (
    <PageWrapper>
      <PageHeading heading='BLOG' />
      <WritingInfo />
      <div>Latest articles</div>
      <div>See more</div>
      <NavigationControls
        direction={'both'}
        leftHref={'/projects'}
        rightHref={'/contact'}
      />
    </PageWrapper>
  );
}
