import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { useDispatch, useSelector } from "react-redux";

import thumbnail_generic from "../../images/champs/skin_thumbnail_generic.jpg";
import thumbnail_skins from "../../images/champs/thumbnail_skins.jpg";
import thumbnail_champs from "../../images/champs/thumbnail_champs.jpg";
import { useEffect, useState } from "react";

function Home() {
  const theme = useSelector(
    (state) => state.app.theme
  );

  const [skins, setSkins] = useState([]);

  useEffect (()=> {
    const getSkins = async() => {
      const skinFetch = await fetch("http://localhost:7500/skins");
      console.log(skinFetch)
      const skinsData = await skinFetch.json();
      if (skinFetch.status === 200) {
        setSkins(skinsData);
      } else {
        setSkins([]);
      }
    }
    getSkins();
  },[])

  return (
    <div>
      <Header />
      <div
        className="bg-local bg-no-repeat bg-cover bg-center 
       bg-[url('https://images.alphacoders.com/656/656584.jpg')]"
      >
        
        <div className="pt-24 grid grid-cols-2 gap-4 px-4 md:px-8 lg:px-20 w-full">
            <div className={`border ${theme.productBorder}`}>
              <div className="p-4 text-center bg-black">
                <p>Skins</p>
              </div>
              <div className = "bg-black">
                <a href="/skins">
                  {" "}
                  <img src={thumbnail_skins} alt="thumbnail_skins" />
                </a>
              </div>
            </div>
            <div className={`border ${theme.productBorder}`}>
              <div className="p-4 text-center bg-black">
                <p>Campeones</p>
              </div>
              <div className = "bg-black">
                <a href="/Champs">
                  {" "}
                  <img src={thumbnail_champs} alt="thumbnail_skins" />
                </a>
              </div>
            </div>
        </div>

        <div className="place-content-center grid grid-cols-[repeat(1,350px)] pt-16 pb-8">
            <div className={`border ${theme.productBorder}`}>
              <div className="flex items-center justify-center shadow-lg bg-black ">
                <p>¡Ultimos lanzamientos de Skins!</p>
              </div>
            </div>
        </div>

        <div className = "pb-24 mb-5 fracaso total metiendole sizes">
          <div className=" grid grid-cols-4 gap-4 px-4 md:px-8 lg:px-20 py-4 w-full">
            {skins.map((p) => {
              return (
                <div
                  key={`product_${p.id}`}
                  className={`border ${theme.productBorder}`}
                >
                  <div className = "bg-black">
                    <a href="/Skin">
                      {" "}
                      <img src={p.image} alt={p.skin} />
                    </a>
                  </div>
                  <div className="p-4 text-center bg-black">
                    <p>{p.skin}</p>
                    <p className={`${theme.priceTag}`}>RP-{p.rp}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Home;
