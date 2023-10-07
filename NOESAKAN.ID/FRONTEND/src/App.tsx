
import { Navigate, Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Login } from "./pages/login";
import Register from "./pages/register";
// import DiscussGrup from "./pages/DiscussGrup";
import Home from "./pages/home";
import DetailArticle from "./pages/detailarticle";


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
      </div>
    </>
  );
}

export default App;
