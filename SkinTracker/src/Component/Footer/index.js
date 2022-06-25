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
          <p>Fabián Gonzalez</p>
          <p>Jorim Wilson</p>
        </div>
        <div className="flex px-40">
          <BiMailSend>

          </BiMailSend>
          @ucr.ac.cr
          <BiPhone>
            
          </BiPhone>
          2511-2222
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
