import { PageWrapper } from '@/components/layouts/pageWrapper';
import { Hero } from '@/components/pageSpecific/home/hero';
import dynamic from 'next/dynamic';

const Model = dynamic(() => import('@/components/pageSpecific/home/model'), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <PageWrapper direction='right' rightHref='/about'>
      <Hero />

      <Model />
    </PageWrapper>
  );
}
