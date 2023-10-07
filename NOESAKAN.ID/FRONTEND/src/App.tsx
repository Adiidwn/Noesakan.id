<<<<<<< HEAD
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
=======
import Home from './pages/home';
/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';
import Register from './pages/register';
import DetailProduct from './pages/detailProduct';
import Product from './pages/product';
import DetailArticle from './pages/detailarticle';
import ArticleList from './pages/article';
import Store from './pages/store';
>>>>>>> 84710b088f767b8df5d169b087867a2350068026

function App() {
  return (
    <>
<<<<<<< HEAD
      <Box>
=======
      <div>
>>>>>>> 84710b088f767b8df5d169b087867a2350068026
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
            path="/"
            element={<Home />}
          />
          <Route
            path="/Store"
            element={<Store />}
          />
          <Route
            path="/ProductDetail"
            element={<DetailProduct />}
          />
          <Route
            path="/auth/login"
            element={!localStorage.token ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/auth/register"
            element={!localStorage.token ? <Register /> : <Navigate to="/" />}
          />
<<<<<<< HEAD
          <Route path="/DiscussGrup" element={<Article />} />
        </Routes>
      </Box>
=======
          <Route
            path="/DiscussGrup"
            element={<ArticleList />}
          />
          <Route
            path="/Product"
            element={<Product />}
          />
          <Route
            path="/DetailArticle"
            element={<DetailArticle />}
          />
        </Routes>
      </div>
>>>>>>> 84710b088f767b8df5d169b087867a2350068026
    </>
  );
}

export default App;
