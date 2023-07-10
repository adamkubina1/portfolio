import { InternalPageLinkSlashed } from '@/lib/types';
import Link from 'next/link';

export const PagePusher = ({
  pageHref,
  direction,
}: {
  pageHref: InternalPageLinkSlashed;
  direction: 'left' | 'right';
}) => {
  return (
    <Link href={pageHref}>{direction === 'left' ? <>Left</> : <>Right</>}</Link>
  );
};
