import { useState } from "react";
import { BiSearch, BiMoon } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../Logo";
import Modal from "../Modal";
import { toLight, toDark } from "../../Slices/appSlice";


function Header() {
  const [showSearch, setShowSearch] = useState(false);
  
  const dispatch = useDispatch();

  const theme = useSelector(
    (state) => state.app.theme
  );
  const user = useSelector(
    (state) => state.user.user
  );

  return (
    <>
      {showSearch && (
        <Modal 
          onClose={() => {
            setShowSearch(false);
          }}
          title="¿Qué busca?"
        >
          {/*todo lo que venga aqui es el children*/}
          <div className="w-full text-center">
            <input
              className="placeholder:text-white pl-4 w-full h-12 border-none bg-gray-400 mb-4"
              placeholder="Buscar..."
            />
            <button className="bg-white border-4 border-blue-800 px-8 py-2 text-cyan-500">
            ¡Vamos!
            </button>
          </div>
        </Modal>
      )}
      <div className="flex px-4 md:px-8 lg:px-20 py-4">
        <div className="w-1/2">
          <Logo width="w-60" height="h-20" /* CAMBIAR TAMAÑO DEL LOGO *//>
        </div>
        <div className="w-1/2 pr-16 flex gap-3 items-center justify-end">
          <p>{user && user.nombre ? ` ¡Bienvenido ${user.nombre}!` : "¡Bienvenido!"}</p>
          <BiSearch
            onClick={() => {
              setShowSearch(true);
            }}
            className="cursor-pointer text-2xl"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
