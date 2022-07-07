import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { CgArrowLeftR } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import yone from "../../images/champs/yone/yone-spiritblossom.jpg";

const product = {
  id: 1,
  skin: "Yone Spirit Blossom",
  image: yone,
  rp: 975,
};






function Skin() {
  const [skin, setSkin] = useState([]);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.app.theme);
  
  useEffect (()=> {
  const getFilteredSkins = async(filter) => {
    const skinFetch = await fetch("https://localhost:7500/Skin/id=${id}"); //en esta dirección pongo la dirección del api
    const skinData = await skinFetch.json();
    if (skinFetch.status === 200) {
      setSkin(skinData);
    } else {
      setSkin([]);
    }
  }
  getFilteredSkins();
})

  return (
    <div>
      <Header />
      <div className="bg-local bg-no-repeat bg-cover bg-center bg-[url('https://images.alphacoders.com/656/656584.jpg')]">
        <a href="/Skins">
          <CgArrowLeftR className="cursor-pointer text-3xl absolute left-20 top-40"></CgArrowLeftR>
        </a>

        <div className = "container mx-auto px-40 py-24">
          <div className={`border ${theme.productBorder}`}>
            <div className="flex items-center justify-center shadow-lg bg-black">
              <p>{skin.skin}</p>
            </div>
            <div className="flex items-center justify-center">
              <img src={skin.image}  alt={skin.skin} />
            </div>
          </div>
          
          <div className="place-content-center grid grid-cols-[repeat(4,150px)] gap-10 pt-5">
            <div className={`border ${theme.productBorder}`}>
              <div className="flex items-center justify-center shadow-lg bg-black ">
                <p>Epica</p>
              </div>
            </div>
            <div className={`border ${theme.productBorder}`}>
              <div className="flex items-center justify-center shadow-lg bg-black ">
                <p>Disponible</p>
              </div>
            </div>
            <div className={`border ${theme.productBorder}`}>
              <div className="flex items-center justify-center shadow-lg bg-black ">
                <p>RP: {skin.rp}</p>
              </div>
            </div>
            <div className={`border ${theme.productBorder}`}>
              <div className="flex items-center justify-center shadow-lg bg-black ">
                <p>Fecha</p>
              </div>
            </div>
          </div>

          <div className="place-content-center grid grid-cols-[repeat(1,720px)] pt-6">
            <div className={`border ${theme.productBorder}`}>
            <div className="items-center justify-center shadow-lg bg-black text-center">
              <p className="font-sans text-xl">Descripción</p>
              <p className="font-sans text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
                lacus sed lacus porta auctor et nec metus. Nullam finibus arcu eu
                dui pharetra, ut congue ante blandit. Vivamus sit amet mi et
                mauris mattis ullamcorper. Donec porttitor dapibus nibh, at luctus
                turpis euismod et. Suspendisse potenti. Integer dignissim in justo
                id vestibulum. Curabitur ligula ipsum, tristique ut tincidunt sit
                amet, cursus a diam.{" "}
              </p>
            </div>
            </div>
          </div>

          <div className="place-content-center grid grid-cols-[repeat(1,368px)] pt-6" >
            <a href="https://signup.leagueoflegends.com/es-mx/signup/redownload">
              <div className={`border ${theme.productBorder}`}>
                <div className="items-center justify-center shadow-lg rounded-lg bg-black text-center">
                  <p className="font-sans text-l">
                    Haga click aquí, para ir a comprar la skin{" "}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Skin;
