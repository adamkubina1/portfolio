import { NavigationControls } from '@/components/generic/navigationControls/navigationControls';
import { PageWrapper } from '@/components/layouts/pageWrapper';
import { Hero } from '@/components/pageSpecific/home/hero';
import { Model } from '@/components/pageSpecific/home/model';

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Model />
      <NavigationControls direction={'right'} rightHref={'/about'} />
    </PageWrapper>
  );
}
