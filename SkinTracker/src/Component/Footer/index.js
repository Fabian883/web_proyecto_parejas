import Logo from "../Logo";
import { BiMailSend, BiPhone } from "react-icons/bi";

function Footer() {
  return (
    <>
      <div className="flex px-4 md:px-8 lg:px-20 py-4">
        <div className="w-1/2">
          <Logo width="w-60" height="h-20" /* CAMBIAR TAMAÑO DEL LOGO */ />
        </div>
        <div className="">
          <p>Developers de la aplicación:</p>
          <p>Fabián Gonzales</p>
          <p>Jorim Wilson</p>
        </div>
        <div className="px-20">
          <BiMailSend>

          </BiMailSend>
          <BiPhone>
            
          </BiPhone>
        </div>
      </div>
    </>
  );
}

export default Footer;

/*
  Como enlazar algo:
  import { Link } from "react-router-dom";
    <Link to="/admin">
      <BiUser className="cursor-pointer text-2xl" />
    </Link>

*/
