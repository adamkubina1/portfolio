import { NavigationControls } from '@/components/generic/navigationControls/navigationControls';
import { Hero } from '@/components/pageSpecific/home/hero';
import { Model } from '@/components/pageSpecific/home/model';

export default function Home() {
  return (
    <>
      <Hero />
      <Model />
      <NavigationControls direction={'right'} rightHref={'/about'} />
    </>
  );
}
