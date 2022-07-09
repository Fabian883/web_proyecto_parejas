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
          <CgArrowLeftR className="cursor-pointer text-3xl absolute left-20 top-40"></CgArrowLeftR>
        </a>
        <AiOutlineFilter
          className="cursor-pointer text-3xl absolute right-20 top-40"
          onClick={show}
        ></AiOutlineFilter>
        <Dropdown
          label="Hello?"
          options={options}
          value={filter}
          onChange={handleChange}
        />
        <div className="right-20 top-20"></div>

        <div className=" grid grid-cols-4 gap-4 px-4 md:px-8 lg:px-20 py-4 w-full">
          {skins.map((p) => {
            return (
              <div
                key={`product_${p.id}`}
                className={`border ${theme.productBorder}`}
              >
                <div className="bg-black">
                  <Link
                    to={`/skin/${p.id}`}
                    onClick={() => {
                      Mixpanel.track(Mixpanel.TYPES.VIEW_PRODUCT, {
                        skinId: p.id,
                        skinName: p.skin,
                        photo: p.image,
                      });
                    }}
                  >
                    {" "}
                    <img src={p.image} alt={p.skin} />
                    {/* aquí llamo al arreglo o a skins? */}
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

        <CgChevronDoubleLeftR
          onClick={setFirst}
          className="cursor-pointer text-3xl sticky left-96 bottom-10"
        ></CgChevronDoubleLeftR>
        <CgChevronLeftR
          onClick={changePrevious}
          className="cursor-pointer text-3xl absolute left-1/3 right-5 bottom-10"
        ></CgChevronLeftR>

        <CgChevronRightR
          onClick={changeNext}
          className="cursor-pointer text-3xl absolute right-1/3 bottom-10"
        ></CgChevronRightR>
        <CgChevronDoubleRightR
          onClick={setLast}
          className="cursor-pointer text-3xl absolute right-96 bottom-10"
        ></CgChevronDoubleRightR>
      </div>
      <Footer />
    </div>
  );
}

export default Skins;
