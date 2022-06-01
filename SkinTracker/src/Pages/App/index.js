import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from "../../Component/MainContainer";
import Spinner from "../../Component/Spinner";
import { fetchPromo } from "../../Slices/appSlice";
import Home from "../Home";

function App() {
  const loading = useSelector(
    (state) => state.app.loading
  );
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPromo());
  }, [dispatch]);

  return loading ? (
    <Spinner/>
  ) : (
    <MainContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
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