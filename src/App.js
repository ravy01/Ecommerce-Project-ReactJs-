import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Footer from "./pages/Footer";
import ShopCategory from "./pages/ShopCategory";
import Singleproduct from "./components/Singleproduct";
import Login from "./pages/Login";
import Tracking from "./pages/Tracking";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import CartItem from "./components/CartItem";
import Cartside from "./components/Cartside";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "./components/ScrollToTop";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import Confirmation from "./pages/Confirmation";
import Cart from "./pages/Cart";







function App() {
  return (
      <Router>
        <ScrollToTop/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Shopcategory" element={<ShopCategory />}></Route>
          <Route path="/singleproduct" element={<Singleproduct />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/tracking" element={<Tracking />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/cartitem" element={<CartItem />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/sidebar" element={<Cartside />}></Route>
          <Route path="/singleproduct/:id" element={<Singleproduct />}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/singleblog" element={<SingleBlog/>}></Route>
          <Route path="/confirmation" element={<Confirmation/>}></Route>
          <Route path="/shopcart" element={<Cart/>}></Route>
        </Routes>
        <Sidebar/>
        <Footer />
      </Router>
      
    
  );
}

export default App;
