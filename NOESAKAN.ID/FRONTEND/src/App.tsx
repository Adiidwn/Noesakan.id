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
    </>
  );
}

export default App;
