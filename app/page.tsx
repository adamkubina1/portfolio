import { NavigationControls } from '@/components/generic/navigationControls/navigationControls';

export default function Home() {
  return (
    <div>
      <h1>Hey</h1>

      <p className={'text-red-700 dark:text-blue-700 '}>My name is Adam </p>
      <p>and I am dev/anything to put here</p>
      <NavigationControls direction={'right'} rightHref={'/about'} />
    </div>
  );
}
