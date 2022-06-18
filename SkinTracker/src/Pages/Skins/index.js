import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { useSelector } from "react-redux";
import { CgArrowLeftR } from "react-icons/cg";
import { AiOutlineFilter } from "react-icons/ai";

const products = [
  {
    id: 1,
    skin: "Taliyah Veraniega",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Taliyah_3.jpg",
    rp: 1350,
  },
  {
    id: 2,
    skin: "Akali Cazadora de Cabezas",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Akali_7.jpg",
    rp: 1350,
  },
  {
    id: 3,
    skin: "Anivia Hielo Negro",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Anivia_5.jpg",
    rp: 1850,
  },
  {
    id: 4,
    skin: "Ashe Reina Cósmica",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ashe_11.jpg",
    rp: 1350,
  },
  {
    id: 5,
    skin: "Yasuo Luna Sangrienta",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_3.jpg",
    rp: 975,
  },
  {
    id: 6,
    skin: "Yasuo Luna Sangrienta",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_3.jpg",
    rp: 975,
  },
  {
    id: 7,
    skin: "Yasuo Luna Sangrienta",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_3.jpg",
    rp: 975,
  },
  {
    id: 8,
    skin: "Yasuo Luna Sangrienta",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_3.jpg",
    rp: 975,
  },
  {
    id: 9,
    skin: "Yasuo Luna Sangrienta",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_3.jpg",
    rp: 975,
  },
];

/*const filters = [
  {
    price: "Price",
    date: "Date",
  },
];*/

function show() {
  var x = document.getElementById("dropdown");
  if (x.style.display === "hidden") {
    x.style.display = "block";
    console.log("here");
  } else {
    x.style.display = "hidden";
  }
} 

function Home() {
  const theme = useSelector((state) => state.app.theme);

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
        <AiOutlineFilter
          data-dropdown-toggle="dropdown"
          className="
        cursor-pointer text-3xl absolute right-20 top-40"
        >
          <div
            id="dropdown"
            className="z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
            >
              <li>
                
                  filters[0].price
                
              </li>
              <li>
                
              filters[0].date
                
              </li>
            </ul>
          </div>
        </AiOutlineFilter>
        
<button id="dropdownDefault" onClick={show} data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button </button>

<div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700" >
<ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
<li>
<p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</p>
</li>
<li>
<p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</p>
</li>
<li>
<p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</p>
</li>
<li>
<p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</p>
</li>
</ul>
</div>
        
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

export default Home;
