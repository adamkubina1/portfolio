import { NavbarContainer } from './navbarContainer';
import { NavbarDiamond } from './navbarDiamond';
import { NavbarLightSwitch } from './navbarLightSwitch';
import { NavbarLinks } from './navbarLinks';

export const Navbar = () => {
  return (
    <NavbarContainer>
      <div className={'flex flex-grow basis-0 justify-start order-1'}>
        <NavbarDiamond />
      </div>
      <div
        className={
          'flex flex-grow basis-0 justify-end md:justify-center order-3 md:order-2'
        }
      >
        <NavbarLinks />
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
