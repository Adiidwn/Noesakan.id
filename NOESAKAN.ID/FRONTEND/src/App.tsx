/* eslint-disable react-hooks/exhaustive-deps */

import { Box } from "@chakra-ui/react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/home";
import CreateStore from "./pages/createStore";
import Store from "./pages/store";
import DetailProduct from "./pages/detailProduct";
import { Login } from "./pages/login";
import Register from "./pages/register";
import Article from "./components/Discuss";
import ArticleList from "./pages/article";
import Product from "./pages/product";
import DetailArticle from "./pages/detailarticle";

function App() {
  return (
    <>
      <Box>
        <Routes>
          <Route path="/MyStore/:id" element={<Store />} />
          <Route path="/create/store" element={<CreateStore />} />
          <Route path="/" element={<Home />} />
          <Route path="/ProductDetail" element={<DetailProduct />} />
          <Route
            path="/auth/login"
            element={!localStorage.token ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/auth/register"
            element={!localStorage.token ? <Register /> : <Navigate to="/auth/login" />}
          />
          <Route path="/DiscussGrup" element={<Article />} />
          <Route path="/DiscussGrup" element={<ArticleList />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/DetailArticle" element={<DetailArticle />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
