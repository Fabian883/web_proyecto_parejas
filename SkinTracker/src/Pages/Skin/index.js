import Header from "../../Component/Header";
import { useSelector } from "react-redux";

const products = [
  {
    id: 1,
    skin: "Taliyah Veraniega",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Taliyah_3.jpg",
    rp: 1350,
  },
];

function Skin() {
  const theme = useSelector((state) => state.app.theme);

  return (
    <div>
      <Header />
      <div
        className="bg-local bg-no-repeat bg-cover bg-center bg-opacity-0
       bg-[url('https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Taliyah_3.jpg')]"
      >
        <div className="place-content-center 
        grid grid-cols-[repeat(1,224px)] gap-4 h-54">
          <div
            className="flex items-center justify-center
        shadow-lg rounded-lg bg-indigo-500"
          >
             <p>{products[0].skin}</p>
          </div>
        </div>
        <div className="flex items-center justify-center h-screen">
          {products.map((p) => {
            return (
              <div
                key={`product_${p.id}`}
                className={`border ${theme.productBorder} box: h-30 w-80`}
              >
                
                <div className="object-center text-center">
                  <img src={p.image} alt={p.skin} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="place-content-center 
        grid grid-cols-[repeat(4,112px)] gap-4 h-54">
          <div
            className="flex items-center justify-center
        shadow-lg rounded-lg bg-indigo-500"
          >
            <p>Tipo</p>
          </div>
          <div
            className="flex items-center justify-center
        shadow-lg rounded-lg bg-indigo-500"
          >
            <p>Estado</p>
          </div>
          <div
            className="flex items-center justify-center
        shadow-lg rounded-lg bg-indigo-500"
          >
            <p>RP: {products[0].rp}</p>
          </div>
          <div
            className="flex items-center justify-center
        shadow-lg rounded-lg bg-indigo-500"
          >
           <p>Fecha</p>
          </div>
        </div>
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

export default Skin;
