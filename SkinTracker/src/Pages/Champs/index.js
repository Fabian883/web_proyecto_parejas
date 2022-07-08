import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AiOutlineFilter } from "react-icons/ai";
import { CgChevronLeftR, CgChevronRightR, CgChevronDoubleLeftR, CgChevronDoubleRightR, CgArrowLeftR } from "react-icons/cg";


/* Esta pagina NO va a tener FILTROS */
/* TODO: Quitar los filtros de las opciones */

const options = ["one", "two", "three"];

function show() {

}

function Champs() {
  const theme = useSelector((state) => state.app.theme);
  const champs_thumbnails = useSelector((state) => state.champs.champs_thumbnails);

  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [skins, setSkins] = useState([]);
  const [hide, setHide] = useState("hidden");

  useEffect (()=> {
    const getFilteredSkins = async() => {
      console.log(currentPage)
      const skinFetch = await fetch(`http://localhost:7500/champs?filter=${filter}&page=${currentPage}&items=10`); //en esta dirección pongo la dirección del api
      const skinData = await skinFetch.json();
      if (skinFetch.status === 200) {
        setSkins(skinData);
      } else {
        setSkins([]);
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
          <CgArrowLeftR className="cursor-pointer text-3xl absolute left-20 top-40"></CgArrowLeftR>
        </a>
        
        

        <div className=" grid grid-cols-4 gap-4 px-4 md:px-8 lg:px-20 py-4 w-full">
          {skins.map((ct) => {
            return (
              <div
                key={`product_${ct.id}`}
                className={`border ${theme.productBorder}`}
              >
                <div className = "bg-black">
                  <a href="/Champ">
                    {" "}
                    <img src={ct.image} alt={ct.skin} />
                  </a>
                </div>
                <div className="p-4 text-center bg-black">
                  <p>{ct.skin}</p>
                </div>
              </div>
            );
          })}
        </div>
        <CgChevronDoubleLeftR onClick={setFirst} className="cursor-pointer text-3xl sticky left-96 bottom-10"></CgChevronDoubleLeftR>
        <CgChevronLeftR onClick={changePrevious} className="cursor-pointer text-3xl absolute left-1/3 right-5 bottom-10"></CgChevronLeftR>
        
        <CgChevronRightR onClick={changeNext} className="cursor-pointer text-3xl absolute right-1/3 bottom-10"></CgChevronRightR>
        <CgChevronDoubleRightR onClick={setLast} className="cursor-pointer text-3xl absolute right-96 bottom-10"></CgChevronDoubleRightR>

      </div>
      <Footer />
    </div>
  );
}

export default Champs;
