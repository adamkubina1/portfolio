'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import { NavbarContainer } from './navbarContainer';
import { NavbarDiamond } from './navbarDiamond';
import { NavbarLightSwitch } from './navbarLightSwitch';
import { NavbarLinks } from './navbarLinks/navbarLinks';

export type NavbarOpenType = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const Navbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <NavbarContainer>
      <div className={'flex flex-grow basis-0 justify-start order-1'}>
        <NavbarDiamond isOpen={isOpen} setOpen={setOpen} />
      </div>
      <div
        className={
          'flex flex-grow basis-0 justify-end md:justify-center order-3 md:order-2'
        }
      >
        <NavbarLinks isOpen={isOpen} setOpen={setOpen} />
      </div>
      <div
        className={
          'flex flex-grow basis-0 justify-center md:justify-end order-2 md:order-3'
        }
      >
        <NavbarLightSwitch />
      </div>
    </NavbarContainer>
  );
};
