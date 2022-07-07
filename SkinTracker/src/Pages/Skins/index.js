import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CgArrowLeftR } from "react-icons/cg";
import { AiOutlineFilter } from "react-icons/ai";

// List of all skins satisfing all the filters
//const [filters, setFilters] = useState({minPrice:"", maxPrice:""});

const options = [ {label: "Precio", value: "price"}, {label: "Nombre", value: "name"}, {label: "Fecha", value: "Date"}];

function Skins() {

  const theme = useSelector((state) => state.app.theme);
  const products = useSelector((state) => state.skin.products);

  const [filter, setFilter] = useState("");
  const [skins, setSkins] = useState([]);
  const [hide, setHide] = useState("hidden");



  useEffect (()=> {
    const getFilteredSkins = async() => {
      const skinFetch = await fetch(`https://localhost:7500/Skins?filter=${filter}`); //en esta dirección pongo la dirección del api
      
      const skinData = await skinFetch.json();
      if (skinFetch.status === 200) {
        setSkins(skinData);
      } else {
        setSkins([]);
      }
    }
    getFilteredSkins();
  },[filter])

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const show = (event) => {
    setHide("block");
  };

  const Dropdown = ({ label, value, options, onChange}) => {
    return (
      <label display={hide} className="text-black absolute right-20 top-40">
        <select label="Hello?" value={value} onChange={onChange}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    );
  };

  return (
    <div>
      <Header />
      <div className="pt-24 pb-24 bg-local bg-no-repeat bg-cover bg-center 
        bg-[url('https://images.alphacoders.com/656/656584.jpg')]">
        <a href="/">
          <CgArrowLeftR className="cursor-pointer text-3xl absolute left-20 top-40"></CgArrowLeftR>
        </a>
        <AiOutlineFilter className="cursor-pointer text-3xl absolute right-20 top-40" onClick={show}>
          
        </AiOutlineFilter>
        <Dropdown 
                    label="Hello?"
                    options={options}
                    value={filter}
                    onChange={handleChange} 
                    /> 
        <div className="right-20 top-20">
           
        </div>
             
        

        <div className=" grid grid-cols-4 gap-4 px-4 md:px-8 lg:px-20 py-4 w-full">
          {skins.map((p) => {
            return (
              <div
                key={`product_${p.id}`}
                className={`border ${theme.productBorder}`}
              >
                <div className = "bg-black">
                  <a href="/Skin" >
                    {" "}
                    <img src={p.image}  alt={p.skin} />{/* aquí llamo al arreglo o a skins? */}
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
      <Footer />
    </div>
  );
}

export default Skins;
