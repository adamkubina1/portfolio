import { NavigationControls } from '@/components/generic/navigationControls/navigationControls';
import { PageHeading } from '@/components/generic/pageHeading';

export default function Blog() {
  return (
    <>
      <PageHeading heading='BLOG' />
      <div>Why am I writing</div>
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
