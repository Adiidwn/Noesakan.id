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
import { useEffect, useState } from "react";
import { AUTH_CHECK, AUTH_ERROR } from "./stores/rootReducer";
import API, { setAuthToken } from "./lib/api";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function App() {
  const [isLoading, setIsLoading] =useState<boolean>(true)
  // const auth =useSelector
const navigate = useNavigate()
const dispatch =useDispatch()

async function AuthCheck(){
  try{
    setAuthToken(localStorage.token)
    const response = await API.get("/auth/check")
   dispatch(AUTH_CHECK(response.data.user))

    setIsLoading(false)
  }catch(err){
    dispatch(AUTH_ERROR())
    setIsLoading(false)
    navigate('/auth/login')

  }

}
useEffect(()=>{
  if (localStorage.token){
    
    AuthCheck()
  }else{
    navigate('/auth/login')
    setIsLoading(false)
  }
},[])
  return (
    <>
    {isLoading ? null:
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
      }
    </>
  );
}

export default App;
