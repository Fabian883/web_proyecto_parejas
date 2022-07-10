import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { CgChevronLeftR, CgChevronRightR, CgChevronDoubleLeftR, CgChevronDoubleRightR, CgArrowLeftR } from "react-icons/cg";

import yone from "../../images/champs/yone/yone.jpg";
import yone_skin from "../../images/champs/yone/thumbnail-yone-spiritblossom.jpg";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Champ() {
  const theme = useSelector((state) => state.app.theme);

  const [champ, setChamp] = useState([]);
  const [champName, setChampName] = useState("");
  const [skins, setSkins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const setFirst = (event) => {
    setCurrentPage(1);
  };

  const setLast = (event) => {
    setCurrentPage(2);
  };

  const changePrevious = (event) => {
    if (currentPage > 1){
      setCurrentPage(currentPage-1);
    }
  };

  const changeNext = (event) => {
    if (currentPage < 2){//ese dos es la cantidad total de páginas que no se como conseguir en el front pero sí en el back
      setCurrentPage(currentPage+1);
    }
  };

  const {id} = useParams();
  

  useEffect (()=> {
    const getChampById = async() => {
      const champFetch = await fetch(`http://localhost:7500/champs/${id}`);
       //en esta dirección pongo la dirección del api
      const champData = await champFetch.json();
      if (champFetch.status === 200) {
        setChampName(champData.name);
        setChamp(champData);
      } else {
        setChamp([]);
      }
    }
    getChampById();
    }, [id, currentPage])

    useEffect (()=> {
  
      const getChampSkinsByName = async() => {
        const skinFetch = await fetch(`http://localhost:7500/skins?page=${currentPage}&items=10&champ=${champName}`);//ver como crear ruta alternativa para que no choque con la ruta de filterSkins
         //en esta dirección pongo la dirección del api
        const skinData = await skinFetch.json();
        if (skinFetch.status === 200) {
          setSkins(skinData);
        } else {
          setSkins([]);
        }
      }
      getChampSkinsByName();
      }, [champName, currentPage])

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
                <p>Skins &nbsp;de ‏‏‎‎&nbsp;</p>
                <p> {champ.name}</p>
              </div>
            </div>
        </div>

        <div className = "pb-24">
          <div className=" grid grid-cols-4 gap-4 px-4 md:px-8 lg:px-20 py-4 w-full">
            {skins.map((p) => {
              return (
                <div
                  key={`${p.id}`}
                  className={`border ${theme.productBorder}`}
                >
                  <div className = "bg-black">
                  <Link to={`/skin/${p.id}`} onClick={() =>{
                  }} >

                    {" "}
                    <img src={p.thumbnail}  alt={champName + " skin"} />
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
        <CgChevronDoubleLeftR onClick={setFirst} className="cursor-pointer text-3xl absolute left-96 bottom-10"></CgChevronDoubleLeftR>
        <CgChevronLeftR onClick={changePrevious} className="cursor-pointer text-3xl absolute left-1/3 right-5 bottom-10"></CgChevronLeftR>
        
        <CgChevronRightR onClick={changeNext} className="cursor-pointer text-3xl absolute right-1/3 bottom-10"></CgChevronRightR>
        <CgChevronDoubleRightR onClick={setLast} className="cursor-pointer text-3xl absolute right-96 bottom-10"></CgChevronDoubleRightR>

      </div>
      <Footer />
    </div>
  );
}

export default Champ;
