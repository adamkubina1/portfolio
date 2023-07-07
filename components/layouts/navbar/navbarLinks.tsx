'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export const NavbarLinks = () => {
  return (
    <>
      <MobileLinks />
      <DesktopLinks />
    </>
  );
};

const MobileLinks = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={'md:hidden flex items-center hover:cursor-pointer'}
        onClick={() => setOpen(!isOpen)}
      >
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </div>
      {isOpen ? <MobileLinksMenu /> : null}
    </>
  );
};

const MobileLinksMenu = () => {
  // Height is based on computed fit content navbar height
  return (
    <div
      className={'absolute mt-24 w-screen h-screen bg-slate-400 top-0 left-0'}
    ></div>
  );
};

const HamburgerIcon = () => {
  return <>Open</>;
};

const CloseIcon = () => {
  return <>Close</>;
};

const DesktopLinks = () => {
  return (
    <ul className={'hidden md:flex items-center'}>
      <DesktopLink>
        <Link href={'/about'}>About</Link>
      </DesktopLink>
      <DesktopLink>
        <Link href={'/projects'}>Projects</Link>
      </DesktopLink>
      <DesktopLink>
        <Link href={'/blog'}>Blog</Link>
      </DesktopLink>
      <DesktopLink>
        <Link href={'/contact'}>Contact</Link>
      </DesktopLink>
    </ul>
  );
};

const DesktopLink = ({ children }: { children: React.ReactNode }) => {
  return <li className={'px-4'}>{children}</li>;
};
