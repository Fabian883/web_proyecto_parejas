import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { useSelector } from "react-redux";
import { CgArrowLeftR } from "react-icons/cg";
import { useState, useEffect } from "react";

import yone from "../../images/champs/yone/yone.jpg";
import yone_skin from "../../images/champs/yone/thumbnail-yone-spiritblossom.jpg";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Champ() {
  const theme = useSelector((state) => state.app.theme);

  const [champ, setChamp] = useState([]);

  const {id} = useParams();

  useEffect (()=> {
    const getSkinById = async() => {
      console.log(id)
      const champFetch = await fetch(`http://localhost:7500/champs/${id}`);
       //en esta dirección pongo la dirección del api
      const champData = await champFetch.json();
      if (champFetch.status === 200) {
        setChamp(champData);
      } else {
        setChamp([]);
      }
    }
    getSkinById();
    }, [id])

  return (
    <div>
      <Header />
      <div className="bg-local bg-no-repeat bg-cover bg-center bg-[url('https://images.alphacoders.com/656/656584.jpg')]">
        <a href="/Champs">
          <CgArrowLeftR className="cursor-pointer text-3xl absolute left-20 top-40"></CgArrowLeftR>
        </a>

        <div className = "container mx-auto px-40 pt-24">
          <div className={`border ${theme.productBorder}`}>
            <div className="flex items-center justify-center shadow-lg bg-black">
                <p>{champ.name}</p>
                <p>{champ.title}</p>
            </div>
            <div className="flex items-center justify-center">
              <img src={champ.thumbnail} alt={champ.name} />
            </div>
          </div>
        </div>
          

          <div className="place-content-center grid grid-cols-[repeat(1,150px)] pt-10 pb-8">
            <div className={`border ${theme.productBorder}`}>
              <div className="flex items-center justify-center shadow-lg bg-black ">
                <p>Skins de‏‏‎ ‎</p>
                <p>{champ.name}</p>
              </div>
            </div>
        </div>

        <div className = "pb-24">
          <div className=" grid grid-cols-4 gap-4 px-4 md:px-8 lg:px-20 py-4 w-full">
            {/*{champ.map((p) => {
              return (
                <div
                  key={`${p.id}`}
                  className={`border ${theme.productBorder}`}
                >
                  <div className = "bg-black">
                  <Link to={`/skin/${p.id}`} onClick={() =>{
                  }} >

                    {" "}
                    <img src={p.image}  alt={p.skin} />
                  </Link>
                  </div>
                  <div className="p-4 text-center bg-black">
                    <p>{p.skin}</p>
                    <p className={`${theme.priceTag}`}>RP-{p.rp}</p>
                  </div>
                </div>
              );
            })}*/}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Champ;
