import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  CgChevronLeftR,
  CgChevronRightR,
  CgChevronDoubleLeftR,
  CgChevronDoubleRightR,
  CgArrowLeftR,
} from "react-icons/cg";
import { AiOutlineFilter } from "react-icons/ai";
import { Link } from "react-router-dom";
import Mixpanel from "../../services/mixpanel";

// List of all skins satisfing all the filters
//const [filters, setFilters] = useState({minPrice:"", maxPrice:""});

const options = [
  { label: "Precio", value: "price" },
  { label: "Nombre", value: "name" },
  { label: "Fecha", value: "date" },
];

function Skins() {
  const theme = useSelector((state) => state.app.theme);

  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [skins, setSkins] = useState([]);
  const [hide, setHide] = useState("hidden");

  useEffect(() => {
    const getFilteredSkins = async () => {
      console.log(currentPage);
      const skinFetch = await fetch(
        `http://localhost:7500/skins?filter=${filter}&page=${currentPage}&items=10`
      ); //en esta dirección pongo la dirección del api
      const skinData = await skinFetch.json();
      if (skinFetch.status === 200) {
        setSkins(skinData);
      } else {
        setSkins([]);
      }
    };
    getFilteredSkins();
  }, [filter, currentPage]);

  const setFirst = (event) => {
    setCurrentPage(1);
  };

  const setLast = (event) => {
    setCurrentPage(2);
  };

  const changePrevious = (event) => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeNext = (event) => {
    if (currentPage < 2) {
      //ese dos es la cantidad total de páginas que no e como conseguir en el front pero sí en el back
      setCurrentPage(currentPage + 1);
    }
  };

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const show = (event) => {
    setHide("block");
  };

  const Dropdown = ({ label, value, options, onChange }) => {
    return (
      <label display={hide} className="text-black absolute right-20 top-40">
        <select label={label} value={value} onChange={onChange}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    );
  };

  return (
    <div>
      <Header />
      <div
        className="pt-24 pb-24 bg-local bg-no-repeat bg-cover bg-center 
        bg-[url('https://images.alphacoders.com/656/656584.jpg')]"
      >
        <a href="/">
          <CgArrowLeftR className="cursor-pointer text-6xl absolute left-20 top-40"></CgArrowLeftR>
        </a>
        {/* TODO: Cambiar a x6 en todo el programa */}
        <AiOutlineFilter
          className="cursor-pointer text-6xl absolute right-20 top-40"
          onClick={show}
        ></AiOutlineFilter>
        <Dropdown
          label="Hello?"
          options={options}
          value={filter}
          onChange={handleChange}
        />
        <div className="right-20 top-20"></div>

        {/* TODO: Quitar ese quickfix de que se muestren 10 por 8 otra vez */}
        <div className=" grid grid-cols-5 gap-4 px-4 md:px-8 lg:px-20 py-4 w-full">
          {skins.map((p) => {
            return (
              <div
                key={`${p.id}`}
                className={`border ${theme.productBorder}`}
              >
                <div className="bg-black">
                  <Link
                    to={`/skin/${p.id}`}
                    onClick={() => {
                      Mixpanel.track(Mixpanel.TYPES.VIEW_SKIN, {
                        skinId: p.id,
                        skinName: p.name,
                        photo: p.thumbnail,
                      });
                    }}
                  >
                    {" "}
                    <img src={p.thumbnail} alt={p.name} />
                    {/* aquí llamo al arreglo o a skins? */}
                  </Link>
                </div>
                <div className="p-4 text-center bg-black">
                  <p>{p.name}</p>
                  <p className={`${theme.priceTag}`}>RP-{p.rp}</p>
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

export default Skins;
