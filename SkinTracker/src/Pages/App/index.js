import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from "../../Component/MainContainer";
import Spinner from "../../Component/Spinner";
import Champs from "../Champs";
import Skins from "../Skins";
import Skin from "../Skin";
import Home from "../Home";

function App() {
  const loading = useSelector(
    (state) => state.app.loading
  );

  return loading ? (
    <Spinner/>
  ) : (
    <MainContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Champs" element={<Champs />} />
          <Route path="/Skins" element={<Skins />} />
          <Route path="/Skin" element={<Skin />} />
        </Routes>
      </BrowserRouter>
    </MainContainer>
  );
}

export default App;

/*
Añadir a rutas caundo se hagan:
  <Route path="champsList" element={<ChampsList />} />
  <Route path="skinList" element={<SkinList />} />
  <Route path="champPage" element={<skinPage />} />
  <Route path="skinPage" element={<skinPage />} />
*/