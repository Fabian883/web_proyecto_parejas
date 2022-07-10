import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CgChevronLeftR, CgChevronRightR, CgChevronDoubleLeftR, CgChevronDoubleRightR, CgArrowLeftR } from "react-icons/cg";
import { Link } from "react-router-dom";
import Mixpanel from "../../services/mixpanel";

/* Esta pagina NO va a tener FILTROS */
/* TODO: Quitar los filtros de las opciones */

const options = ["one", "two", "three"];

function Champs() {
  const theme = useSelector((state) => state.app.theme);

  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [champs, setChamps] = useState([]);

  useEffect (()=> {
    const getFilteredSkins = async() => {
      console.log(currentPage)
      const champFetch = await fetch(`http://localhost:7500/champs?filter=${filter}&page=${currentPage}&items=10`); //en esta dirección pongo la dirección del api
      const champData = await champFetch.json();
      if (champFetch.status === 200) {
        setChamps(champData);
      } else {
        setChamps([]);
      }
    }
    getFilteredSkins();
  },[filter, currentPage])

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
    if (currentPage < 2){//ese dos es la cantidad total de páginas que no e como conseguir en el front pero sí en el back
      setCurrentPage(currentPage+1);
    }
    
  };


  return (
    <div>
      <Header />
      <div className="pt-24 pb-24 bg-local bg-no-repeat bg-cover bg-center 
        bg-[url('https://images.alphacoders.com/656/656584.jpg')]">
        <a href="/">
          <CgArrowLeftR className="cursor-pointer text-6xl absolute left-20 top-40"></CgArrowLeftR>
        </a>

        <div className=" grid grid-cols-4 gap-4 px-4 md:px-8 lg:px-20 py-4 w-full">
          {champs.map((ct) => {
            return (
              <div
                key={`${ct.id}`}
                className={`border ${theme.productBorder}`}
              >
                <div className = "bg-black">
                <Link to={`/champ/${ct.id}`} onClick={() => {
                      Mixpanel.track(Mixpanel.TYPES.VIEW_CHAMP, {
                        champId: ct.id,
                        champName: ct.name,
                        photo: ct.thumbnail,
                      });
                    }}>
                {" "}
                <img src={ct.thumbnail}  alt={ct.name} />
                </Link>
                </div>
                <div className="p-4 text-center bg-black">
                  <p>{ct.name}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="place-content-center grid grid-cols-[repeat(4,70px)] gap-10 pt-5">
          <CgChevronDoubleLeftR onClick={setFirst} className="cursor-pointer text-6xl"></CgChevronDoubleLeftR>
          <CgChevronLeftR onClick={changePrevious} className="cursor-pointer text-6xl"></CgChevronLeftR>
          <CgChevronRightR onClick={changeNext} className="cursor-pointer text-6xl"></CgChevronRightR>
          <CgChevronDoubleRightR onClick={setLast} className="cursor-pointer text-6xl"></CgChevronDoubleRightR>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Champs;
