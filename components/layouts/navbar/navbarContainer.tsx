export const NavbarContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <nav
      className={
        'w-full h-fit absolute z-40 content-center px-6 md:px-12 flex justify-between'
      }
    >
      {children}
    </nav>
  );
};
