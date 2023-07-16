import { NavigationControls } from '@/components/generic/navigationControls/navigationControls';
import { Hero } from '@/components/pageSpecific/home/hero';
import { Ceviche_One } from 'next/font/google';

const cevicheOne = Ceviche_One({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  return (
    <>
      <Hero />
      <NavigationControls direction={'right'} rightHref={'/about'} />
    </>
  );
}
