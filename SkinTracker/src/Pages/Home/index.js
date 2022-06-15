import Header from "../../Component/Header";
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
    skin: "Ashe Reina Cósmica",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ashe_11.jpg",
    rp: 1350,
  },
  {
    id: 5,
    skin: "Yasuo Luna Sangrienta",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_3.jpg",
    rp: 975,
  }
  ,
  {
    id: 6,
    skin: "Yasuo Luna Sangrienta",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_3.jpg",
    rp: 975,
  }
  ,
  {
    id: 7,
    skin: "Yasuo Luna Sangrienta",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_3.jpg",
    rp: 975,
  }
  ,
  {
    id: 8,
    skin: "Yasuo Luna Sangrienta",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_3.jpg",
    rp: 975,
  }
  ,
  {
    id: 9,
    skin: "Yasuo Luna Sangrienta",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_3.jpg",
    rp: 975,
  }
];

function Home() {
  const theme = useSelector(
    (state) => state.app.theme
  );

  return (
    <div>
      <Header />
      <div className=" grid grid-cols-4 gap-4 px-4 md:px-8 lg:px-20 py-4 w-full">
        {products.map((p) => {
          return (
            <div key={`product_${p.id}`} className={`border ${theme.productBorder}`}>
              <div>
                <a href="/Skin"> <img src={p.image}  alt={p.skin} /></a> 
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
