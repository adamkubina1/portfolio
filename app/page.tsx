import { PagePusher } from '@/components/generic/pagePusher';

export default function Home() {
  return (
    <div>
      <h1>Hey</h1>

      <p className={'text-red-700 dark:text-blue-700 '}>My name is Adam </p>
      <p>and I am dev/anything to put here</p>
      <PagePusher direction={'right'} pageHref={'/about'} />
    </div>
  );
}
