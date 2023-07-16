import { NavigationControls } from '@/components/generic/navigationControls/navigationControls';
import { PageHeading } from '@/components/generic/pageHeading';

export default function Contact() {
  return (
    <>
      <PageHeading heading='Contact' />
      <div>Employment/projects status</div>
      <div>Where to reach me</div>
      <div>Simple email form?</div>
      <NavigationControls direction={'left'} leftHref={'/blog'} />
    </>
  );
}
