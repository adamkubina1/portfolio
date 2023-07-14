import { NavigationControls } from '@/components/generic/navigationControls/navigationControls';

export default function Projects() {
  return (
    <>
      <div>My tech stack</div>
      <div>Projects</div>
      <div>Github stats/link</div>

      <NavigationControls
        direction={'both'}
        leftHref={'/about'}
        rightHref={'/blog'}
      />
    </>
  );
}
