import { navigationLinks } from '@/lib/data';
import Link from 'next/link';

export const DesktopLinks = ({
  activeLink,
}: {
  activeLink: string | undefined;
}) => {
  return (
    <ul className={'hidden md:flex items-center'}>
      {navigationLinks.map((link, i) => (
        <li key={i} className={'px-4'}>
          <Link
            href={`/${link}`}
            className={
              link === activeLink?.replace('/', '') ? 'text-red-700' : ''
            }
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
};
