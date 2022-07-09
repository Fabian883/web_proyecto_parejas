import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { useSelector } from "react-redux";

import thumbnail_generic from "../../images/champs/skin_thumbnail_generic.jpg";
import thumbnail_skins from "../../images/champs/thumbnail_skins.jpg";
import thumbnail_champs from "../../images/champs/thumbnail_champs.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Mixpanel from "../../services/mixpanel";

function Home() {
  const theme = useSelector(
    (state) => state.app.theme
  );

  const [skins, setSkins] = useState([]);

  useEffect (()=> {
    const getSkins = async() => {
      const skinFetch = await fetch("http://localhost:7500/skins?filter=date&page=1&items=4");
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
                <Link to="/skins" onClick={() => {
                      Mixpanel.track(Mixpanel.TYPES.VIEW_SKINS, {
                        skins: 1,
                        photo: thumbnail_skins,
                      });
                    }}>
                  {" "}
                  <img src={thumbnail_skins} alt="thumbnail_skins" />
                </Link>
              </div>
            </div>
            <div className={`border ${theme.productBorder}`}>
              <div className="p-4 text-center bg-black">
                <p>Campeones</p>
              </div>
              <div className = "bg-black">
                <Link to="/champs" onClick={() => {
                      Mixpanel.track(Mixpanel.TYPES.VIEW_CHAMPS, {
                        champs: 1,
                        photo: thumbnail_skins,
                      });
                    }}>
                  {" "}
                  <img src={thumbnail_champs} alt="thumbnail_skins" />
                </Link>
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
                  <Link to={`/skin/${p.id}`} onClick={() => {
                      Mixpanel.track(Mixpanel.TYPES.VIEW_SKIN, {
                        skinId: p.id,
                        skinName: p.skin,
                        photo: p.image,
                      });
                    }} >

                    {" "}
                    <img src={p.image}  alt={p.skin} />{/* aquí llamo al arreglo o a skins? */}
                  </Link>
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
