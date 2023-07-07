export const NavbarContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <nav
      className={
        'w-full h-fit  fixed z-40 content-center px-4 flex justify-between'
      }
    >
      {children}
    </nav>
  );
};
