import { PageWrapper } from '@/components/layouts/pageWrapper';
import { Hero } from '@/components/pageSpecific/home/hero';
import { Model } from '@/components/pageSpecific/home/model';

export default function Home() {
  return (
    <PageWrapper direction='right' rightHref='/about'>
      <Hero />
      <Model />
    </PageWrapper>
  );
}
