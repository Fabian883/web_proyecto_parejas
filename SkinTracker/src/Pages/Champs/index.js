import Header from "../../Component/Header";
import { useSelector } from "react-redux";

const products = [
  {
    id: 1,
    champ: "Kindred",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kindred_0.jpg",
    rp: 1350,
  },
  {
    id: 2,
    champ: "Akali",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Akali_0.jpg",
    rp: 1350,
  },
  {
    id: 3,
    champ: "Anivia",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Anivia_0.jpg",
    rp: 1850,
  },
  {
    id: 4,
    champ: "Ashe",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ashe_0.jpg",
    rp: 1350,
  },
  {
    id: 5,
    champ: "Yasuo",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_0.jpg",
    rp: 975,
  }
  ,
  {
    id: 6,
    champ: "Yasuo",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_0.jpg",
    rp: 975,
  }
  ,
  {
    id: 7,
    champ: "Yasuo",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_0.jpg",
    rp: 975,
  }
  ,
  {
    id: 8,
    champ: "Yasuo",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_0.jpg",
    rp: 975,
  }
  ,
  {
    id: 9,
    champ: "Yasuo",
    image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_0.jpg",
    rp: 975,
  }
];

function Champs() {
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
                <img src={p.image} alt={p.champ} />
              </div>
              <div className="p-4 text-center">
                <p>{p.champ}</p>
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
  .column {
    float: left;
    width: 33.33%;
    padding: 15px;
  }
*/

export default Champs;
