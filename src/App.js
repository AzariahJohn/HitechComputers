import React from 'react';
import HomePage from './Pages/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './Pages/AboutPage/AboutPage';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import ServicePage from './Pages/ServicePage/ServicePage';
import RecyclerPage from './Pages/RecyclerPage/RecyclerPage';
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:slug"/>
        <Route path="/service" element={<ServicePage />}/>
        <Route path="/recycler" element={<RecyclerPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
