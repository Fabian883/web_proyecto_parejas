import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { useSelector } from "react-redux";

const products = [
  {
    id: 1,
    skin: "Taliyah Veraniega",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Taliyah_3.jpg",
    rp: 1350,
  },
  {
    id: 2,
    skin: "Akali Cazadora de Cabezas",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Akali_7.jpg",
    rp: 1350,
  },
  {
    id: 3,
    skin: "Anivia Hielo Negro",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Anivia_5.jpg",
    rp: 1850,
  },
  {
    id: 4,
    skin: "Yasuo Luna Sangrienta",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_3.jpg",
    rp: 1850,
  }
  ,
];

function Home() {
  const theme = useSelector(
    (state) => state.app.theme
  );

  return (
    <div>
      <Header />
      <div
        className="bg-local bg-no-repeat bg-cover bg-center 
       bg-[url('https://images.alphacoders.com/656/656584.jpg')]"
      >
        
        <div
          className="pt-6 place-content-center 
        grid grid-cols-[repeat(1,896px)] gap-4"
        >
         <div className="object-center">
                  <img src='https://esports.as.com/2019/05/20/league-of-legends/campeones-League-of-Legends_1246985298_162511_1440x600.jpg' 
                  alt='https://esports.as.com/2019/05/20/league-of-legends/campeones-League-of-Legends_1246985298_162511_1440x600.jpg' />
                </div>
        </div>

        <div
          className="place-content-center 
        grid grid-cols-[repeat(1,448px)] pt-10 pb-8"
        >
          <a href="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Taliyah_3.jpg"> 
            <div
              className="items-center justify-center
          shadow-lg rounded-lg bg-rose-500 text-center"
            >
              <p className="font-sans text-l">Latest Skins! </p>
            </div>
          </a>
          
        </div>

        <div className=" grid grid-cols-7 gap-4 px-4 md:px-8 lg:px-20 py-4 w-full">
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
  recordar pasar el p.image o name como parámetro
  .column {
    float: left;
    width: 33.33%;
    padding: 15px;
  }
*/

export default Home;
