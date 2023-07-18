import { NavigationControls } from '@/components/generic/navigationControls/navigationControls';
import { PageHeading } from '@/components/generic/pageHeading';
import { WritingInfo } from '@/components/pageSpecific/blog/writingInfo/writingInfo';

export default function Blog() {
  return (
    <>
      <PageHeading heading='BLOG' />
      <WritingInfo />
      <div>Latest articles</div>
      <div>See more</div>
      <NavigationControls
        direction={'both'}
        leftHref={'/projects'}
        rightHref={'/contact'}
      />
    </>
  );
}
