/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Login } from "./pages/login";
import Register from "./pages/register";
// import DiscussGrup from "./pages/DiscussGrup";
import Article from "./components/Article";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
