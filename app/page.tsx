import { NavigationControls } from '@/components/generic/navigationControls/navigationControls';
import { Ceviche_One } from 'next/font/google';

const cevicheOne = Ceviche_One({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  return (
    <div className={''}>
      <div className={'flex gap-2'}>
        <p className={'text-7xl font-bold'}>Hey! </p>
        <div className={'pt-4 text-2xl'}>
          <p className={'text-red-700 dark:text-blue-700 '}>My</p>
          <p>name is</p>
        </div>
      </div>
      <p className={`text-9xl ${cevicheOne.className}`}>Adam</p>

      <p className={'text-2xl'}>and I am</p>
      <p className={'text-4xl'}>developer</p>
      <NavigationControls direction={'right'} rightHref={'/about'} />
    </div>
  );
}
