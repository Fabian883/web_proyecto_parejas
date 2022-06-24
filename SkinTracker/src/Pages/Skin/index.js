import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { useSelector } from "react-redux";
import { CgArrowLeftR } from "react-icons/cg";
import yone from "../../images/champs/yone/yone.jpg";

const product = {
  id: 1,
  skin: "Yone, el imborrable",
  image: yone,
  rp: 1350,
};

function Skin() {
  const theme = useSelector((state) => state.app.theme);
  //const products = useSelector((state) => state.skin.products);
  return (
    <div>
      <Header />
      <div
        className="bg-local bg-no-repeat bg-cover bg-center 
       bg-[url('https://images.alphacoders.com/656/656584.jpg')]"
      >
        <a href="/Skins">
          <CgArrowLeftR className="cursor-pointer text-3xl absolute left-20 top-40"></CgArrowLeftR>
        </a>

        <div
          className="pt-6 place-content-center 
        grid grid-cols-[repeat(1,224px)] gap-4"
        >
          <div
            className="flex items-center justify-center
        shadow-lg bg-black"
          >
            <p>{product.skin}</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img className="w-1/2" src={product.image} alt={product.skin} />
        </div>
        <div
          className="place-content-center 
        grid grid-cols-[repeat(4,112px)] gap-4  h-54"
        >
          <div
            className="flex items-center justify-center
        shadow-lg bg-black"
          >
            <p>Epica</p>
          </div>
          <div
            className="flex items-center justify-center
        shadow-lg bg-black"
          >
            <p>Disponible</p>
          </div>
          <div
            className="flex items-center justify-center
        shadow-lg bg-black"
          >
            <p>RP: {product.rp}</p>
          </div>
          <div
            className="flex items-center justify-center
        shadow-lg bg-black"
          >
            <p>Fecha</p>
          </div>
        </div>
        <div
          className="place-content-center 
        grid grid-cols-[repeat(1,448px)] pt-6"
        >
          <div
            className="items-center justify-center
        shadow-lg bg-black text-center"
          >
            <p className="font-sans text-xl">Descripción</p>
            <p className="font-sans text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              lacus sed lacus porta auctor et nec metus. Nullam finibus arcu eu
              dui pharetra, ut congue ante blandit. Vivamus sit amet mi et
              mauris mattis ullamcorper. Donec porttitor dapibus nibh, at luctus
              turpis euismod et. Suspendisse potenti. Integer dignissim in justo
              id vestibulum. Curabitur ligula ipsum, tristique ut tincidunt sit
              amet, cursus a diam.{" "}
            </p>
          </div>
        </div>
        <div
          className="place-content-center 
        grid grid-cols-[repeat(1,448px)] pt-6 pb-10"
        >
          <a href="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Taliyah_3.jpg">
            <div
              className="items-center justify-center
          shadow-lg rounded-lg bg-black text-center"
            >
              <p className="font-sans text-l">
                Haciendo click aquí, logrará redirigirse a una página autorizada
                para la venta de esta skin!{" "}
              </p>
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Skin;
