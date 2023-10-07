
import { Navigate, Route, Routes } from "react-router-dom";
// import DiscussGrup from "./pages/DiscussGrup";
import Home from "./pages/home";
import DetailArticle from "./pages/detailarticle";
// import Discuss from "./components/Discuss";


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/detailartikel"
            element={< DetailArticle/>}
          />
        </Routes>
        {/* <Route
            path="/discussgrup"
            element={< Discuss/>}
          /> */}
        
      </div>
    </>
  );
}


export default App;
