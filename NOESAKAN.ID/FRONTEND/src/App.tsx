/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Login } from "./pages/login";
import Register from "./pages/register";
// import DiscussGrup from "./pages/DiscussGrup";
import Article from "./components/Article";
import Home from "./pages/home";
import CreateStore from "./pages/createStore";
import StorePage from "./pages/store";

function App() {
  return (
    <>
      <Box>
        <Routes>
        <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/MyStore/:id"
            element={<StorePage />}
          />
           <Route
            path="/create/store"
            element={<CreateStore />}
          />
          <Route
            path="/auth/login"
            element={!localStorage.token ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/auth/register"
            element={!localStorage.token ? <Register /> : <Navigate to="/" />}
          />
          <Route path="/DiscussGrup" element={<Article />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
