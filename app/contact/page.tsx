import { NavigationControls } from '@/components/generic/navigationControls/navigationControls';

export default function Contact() {
  return (
    <>
      <div>Contact</div>
      <div>Employment/projects status</div>
      <div>Where to reach me</div>
      <div>Simple email form?</div>
      <NavigationControls direction={'left'} leftHref={'/blog'} />
    </>
  );
}
