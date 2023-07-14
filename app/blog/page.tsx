import { NavigationControls } from '@/components/generic/navigationControls/navigationControls';

export default function Blog() {
  return (
    <>
      <h1>Blog</h1>
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
