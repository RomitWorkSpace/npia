import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../components/pages/Home';
import Navbar from './Navbar';
import Footer from './Footer';
import About from '../components/pages/About'
import Contact from '../components/pages/Contact'
import OurProduct from '../components/pages/OurProduct';
import ProductDetail from '../components/pages/ProductDetail';
import IndustryPage from '../components/pages/IndustryPage';


function Layout() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/products" exact element={<OurProduct />} />
        <Route path="/product/:slug" exact element={<ProductDetail />} />
        <Route path="/industry/:slug" exact element={<IndustryPage />} />
        {/* <Route path="/services"  element={<Service />} />
        <Route path='/service/:slug' exact element={<SubService/>} /> */}
        <Route path="/contact"  element={<Contact />} /> 
    </Routes>
    <Footer />
    </>
  );
}

export default Layout;

