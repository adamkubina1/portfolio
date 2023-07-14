import Link from 'next/link';

export const PagePusher = ({
  pageHref,
  direction,
}: {
  pageHref: string;
  direction: 'left' | 'right';
}) => {
  return (
    <Link href={pageHref}>{direction === 'left' ? <>Left</> : <>Right</>}</Link>
  );
};
