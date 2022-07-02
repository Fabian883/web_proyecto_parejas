import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { useSelector } from "react-redux";
import { CgArrowLeftR } from "react-icons/cg";

import yone from "../../images/champs/yone/yone.jpg";
import yone_skin from "../../images/champs/yone/thumbnail-yone-spiritblossom.jpg";

const champ = {
  id: 1,
  name: "Yone",
  title: ", el Imborrable",
  splash_art: yone,
};

const products = [
    {
      id: 1,
      skin: "Yone Spirit Blossom",
      image: yone_skin,
      rp: 975,
    },
    {
      id: 2,
      skin: "Yone Spirit Blossom",
      image: yone_skin,
      rp: 975,
    },
    {
      id: 3,
      skin: "Yone Spirit Blossom",
      image: yone_skin,
      rp: 975,
    },
    {
      id: 4,
      skin: "Yone Spirit Blossom",
      image: yone_skin,
      rp: 975,
    }
    ,
  ];

function Champ() {
  const theme = useSelector((state) => state.app.theme);
  //const products = useSelector((state) => state.skin.products);
  return (
    <div>
      <Header />
      <div className="bg-local bg-no-repeat bg-cover bg-center bg-[url('https://images.alphacoders.com/656/656584.jpg')]">
        <a href="/Champs">
          <CgArrowLeftR className="cursor-pointer text-3xl absolute left-20 top-40 bg-black"></CgArrowLeftR>
        </a>

        <div className = "container mx-auto px-40 pt-24">
          <div className={`border ${theme.productBorder}`}>
            <div className="flex items-center justify-center shadow-lg bg-black">
                <p>{champ.name}</p>
                <p>{champ.title}</p>
            </div>
            <div className="flex items-center justify-center">
              <img src={champ.splash_art} alt={champ.name} />
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
            {products.map((p) => {
              return (
                <div
                  key={`product_${p.id}`}
                  className={`border ${theme.productBorder}`}
                >
                  <div className = "bg-black">
                    <a href="/Skin">
                      {" "}
                      <img src={p.image} alt={p.skin} />
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
      </div>
      <Footer />
    </div>
  );
}

export default Champ;
