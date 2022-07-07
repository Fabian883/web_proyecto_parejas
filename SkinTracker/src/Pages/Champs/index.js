import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CgArrowLeftR } from "react-icons/cg";
import { AiOutlineFilter } from "react-icons/ai";
import { getChamps } from "../../Slices/champsSlice";

/* Esta pagina NO va a tener FILTROS */
/* TODO: Quitar los filtros de las opciones */

const options = ["one", "two", "three"];

function show() {

}

function Champs() {
  const theme = useSelector((state) => state.app.theme);
  const champs_thumbnails = useSelector((state) => state.champs.champs_thumbnails);
  const dispatch = useDispatch();


  return (
    <div>
      <Header />
      <div className="pt-24 pb-24 bg-local bg-no-repeat bg-cover bg-center 
        bg-[url('https://images.alphacoders.com/656/656584.jpg')]">
        <a href="/">
          <CgArrowLeftR className="cursor-pointer text-3xl absolute left-20 top-40"></CgArrowLeftR>
        </a>
        
        

        <div className=" grid grid-cols-4 gap-4 px-4 md:px-8 lg:px-20 py-4 w-full">
          {champs_thumbnails.map((ct) => {
            return (
              <div
                key={`product_${ct.id}`}
                className={`border ${theme.productBorder}`}
              >
                <div className = "bg-black">
                  <a href="/Champ">
                    {" "}
                    <img src={ct.champ_thumbnail} alt={ct.champ_name} />
                  </a>
                </div>
                <div className="p-4 text-center bg-black">
                  <p>{ct.champ_name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Champs;
