import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CgArrowLeftR } from "react-icons/cg";
import { AiOutlineFilter } from "react-icons/ai";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { getSkins } from "../../Slices/skinSlice";



// List of all skins satisfing all the filters
//const [filters, setFilters] = useState({minPrice:"", maxPrice:""});

const options = ["one", "two", "three"];

function show() {

}

function Skins() {

  const theme = useSelector((state) => state.app.theme);
  const products = useSelector((state) => state.skin.products);

  const [filters, setFilters] = useState({ minPrice: "", maxPrice: "" });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkins({ filters }));
  }, [dispatch, filters]);

  //esto no funciona y no se porque?
  /*<Dropdown
            options={options}
            onClick={() => {}}
            value={options[0]}
            placeholder="weee"
          ></Dropdown>*/

  return (
    <div>
      <Header />
      <div
        className="pt-20 bg-local bg-no-repeat bg-cover bg-center 
       bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXAhX93ekTfLH299--3P15h8bMcVki0v5NTA&usqp=CAU')]"
      >
        <a href="/">
          <CgArrowLeftR className="cursor-pointer text-3xl absolute left-20 top-40"></CgArrowLeftR>
        </a>
        <AiOutlineFilter className="cursor-pointer text-3xl absolute right-20 top-40 " onClick={show()}>
          <Dropdown
            options={options}
            display= "block"
            value={options[0]}
            placeholder="weee"
          ></Dropdown>
        </AiOutlineFilter>
        

        <div className=" grid grid-cols-4 gap-4 px-4 md:px-8 lg:px-20 py-4 w-full">
          {products.map((p) => {
            return (
              <div
                key={`product_${p.id}`}
                className={`border ${theme.productBorder}`}
              >
                <div>
                  <a href="/Skin">
                    {" "}
                    <img src={p.image} alt={p.skin} />
                  </a>
                </div>
                <div className="p-4 text-center">
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

/*
  recordar pasar el p.image o  como parámetro
  .column {
    float: left;
    width: 33.33%;
    padding: 15px;
  }
*/

export default Skins;
