import { NavigationControls } from '@/components/generic/navigationControls/navigationControls';
import { Hero } from '@/components/pageSpecific/home/hero';

export default function Home() {
  return (
    <>
      <Hero />
      <NavigationControls direction={'right'} rightHref={'/about'} />
    </>
  );
}
