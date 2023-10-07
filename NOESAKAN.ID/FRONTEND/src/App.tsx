import Home from './pages/home';
/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';
import Register from './pages/register';
import Article from './components/Article';
import DetailProduct from './pages/detailProduct';
import Product from './pages/product';

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
            element={<Article />}
          />
          <Route
            path="/Product"
            element={<Product />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
