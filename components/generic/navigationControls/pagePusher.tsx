import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const PagePusher = ({
  pageHref,
  direction,
  disabled = false,
}: {
  pageHref: string;
  direction: 'left' | 'right';
  disabled?: boolean;
}) => {
  return (
    <Link
      href={pageHref}
      className={`${
        disabled ? 'text-gray-200 dark:text-gray-400 pointer-events-none' : ''
      }`}
    >
      {direction === 'left' ? (
        <IoIosArrowBack size={28} />
      ) : (
        <IoIosArrowForward size={28} />
      )}
    </Link>
  );
};
