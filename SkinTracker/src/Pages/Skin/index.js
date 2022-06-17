import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { useSelector } from "react-redux";
import { CgArrowLeftR } from "react-icons/cg";

const products = [
  {
    id: 1,
    skin: "Taliyah Veraniega",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kindred_3.jpg",
    rp: 1350,
  },
];

function Skin() {
  const theme = useSelector((state) => state.app.theme);

  return (
    <div>
      <Header />
      <div
        className="bg-local bg-no-repeat bg-cover bg-center 
       bg-[url('https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kindred_3.jpg')]"
      >
        
        <a href="/Skins"> 
          <CgArrowLeftR className="cursor-pointer text-3xl absolute left-20 top-40" >
            
          </CgArrowLeftR>
        </a>
        
        <div
          className="pt-6 place-content-center 
        grid grid-cols-[repeat(1,224px)] gap-4"
        >
          <div
            className="flex items-center justify-center
        shadow-lg rounded-lg bg-rose-500"
          >
            <p>{products[0].skin}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-center h-screen">
          {products.map((p) => {
            return (
              <div
                key={`product_${p.id}`}
                className={`flex border ${theme.productBorder} box: h-30 w-80`}
              >
                <div className="object-center text-center">
                  <img src={p.image} alt={p.skin} />
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="place-content-center 
        grid grid-cols-[repeat(4,112px)] gap-4  h-54"
        >
          <div
            className="flex items-center justify-center
        shadow-lg rounded-lg bg-rose-500"
          >
            <p>Tipo</p>
          </div>
          <div
            className="flex items-center justify-center
        shadow-lg rounded-lg bg-rose-500"
          >
            <p>Estado</p>
          </div>
          <div
            className="flex items-center justify-center
        shadow-lg rounded-lg bg-rose-500"
          >
            <p>RP: {products[0].rp}</p>
          </div>
          <div
            className="flex items-center justify-center
        shadow-lg rounded-lg bg-rose-500"
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
        shadow-lg rounded-lg bg-rose-500 text-center"
          >
            <p className="font-sans text-xl">Descripción</p>
            <p className="font-sans text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et lacus sed lacus porta auctor et nec metus. Nullam finibus arcu eu dui pharetra, ut congue ante blandit. Vivamus sit amet mi et mauris mattis ullamcorper. Donec porttitor dapibus nibh, at luctus turpis euismod et. Suspendisse potenti. Integer dignissim in justo id vestibulum. Curabitur ligula ipsum, tristique ut tincidunt sit amet, cursus a diam. </p>
          </div>
        </div>
        <div
          className="place-content-center 
        grid grid-cols-[repeat(1,448px)] pt-6 pb-10"
        >
          <a href="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Taliyah_3.jpg"> 
            <div
              className="items-center justify-center
          shadow-lg rounded-lg bg-rose-500 text-center"
            >
              <p className="font-sans text-l">Haciendo click aquí, logrará redirigirse a una página autorizada para la venta de esta skin! </p>
            </div>
          </a>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

/*
  .column {
    float: left;
    width: 33.33%;
    padding: 15px;
  }
*/

export default Skin;
