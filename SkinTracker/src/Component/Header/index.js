import Logo from "../Logo";

function Header() {

  return (
    <>
      <div className="flex px-4 md:px-8 lg:px-20 py-4">
        <div className="w-1/2">
          <Logo width="w-60" height="h-20" /* CAMBIAR TAMAÑO DEL LOGO *//>
        </div>
        <div className="w-1/2 pr-16 flex gap-3 items-center justify-end">
          <p>¡Bienvenido!</p>
        </div>
      </div>
    </>
  );
}

export default Header;
