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
import ErrorPage from '../components/ErrorPage';
import ServicePage from '../components/pages/ServicePage';
import RequestQuote from '../components/pages/RequestQuote';


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
        <Route path='/service/:slug' exact element={<ServicePage />} />
        <Route path="/contact"  element={<Contact />} /> 
        <Route path="/request-a-quote"  element={<RequestQuote />} /> 
        <Route path="*"  element={<ErrorPage />} /> 
    </Routes>
    <Footer />
    </>
  );
}

export default Layout;

