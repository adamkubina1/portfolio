import { NavigationControls } from '@/components/generic/navigationControls/navigationControls';

export default function Blog() {
  return (
    <>
      <h1>About me</h1>
      <div>Who am I</div>
      <div>Education - bachelors - masters</div>
      <div>Work expericence - employment status</div>
      <NavigationControls
        direction={'both'}
        leftHref={'/'}
        rightHref={'/projects'}
      />
    </>
  );
}
