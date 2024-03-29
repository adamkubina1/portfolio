'use client';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';
import { NavbarOpenType } from '../navbar';
import { DesktopLinks } from './desktopLinks';
import { MobileLinks } from './mobileLinks';

export const NavbarLinks = ({ isOpen, setOpen }: NavbarOpenType) => {
  const [activeLink, setActiveLink] = useState<string>();
  const path = usePathname();

  useMemo(() => {
    setActiveLink(path);
  }, [path]);

  return (
    <>
      <MobileLinks activeLink={activeLink} isOpen={isOpen} setOpen={setOpen} />
      <DesktopLinks activeLink={activeLink} />
    </>
  );
};
