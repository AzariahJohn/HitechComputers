import React from 'react';
import HomePage from './Pages/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './Pages/AboutPage/AboutPage';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import ServicePage from './Pages/ServicePage/ServicePage';
import RecyclerPage from './Pages/RecyclerPage/RecyclerPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import CablesPage from './Pages/ProductsPage/CablesPage';
import DesktopsPage from './Pages/ProductsPage/DesktopsPage';
import HardDiskPage from './Pages/ProductsPage/HardDiskPage';
import InterfacePage from './Pages/ProductsPage/InterfacePage';
import LaptopPage from './Pages/ProductsPage/LaptopPage';
import MemoryPage from './Pages/ProductsPage/MemoryPage';
import MotherBoardPage from './Pages/ProductsPage/MotherBoardPage';
import MonitorsPage from './Pages/ProductsPage/MonitorsPage';
import NetworkingPage from './Pages/ProductsPage/NetworkingPage';
import ProcessorPage from './Pages/ProductsPage/ProcessorPage';
import PsuPage from './Pages/ProductsPage/PsuPage';
import ServersPage from './Pages/ProductsPage/ServersPage';
import IndividualProduct from './Pages/ProductsPage/IndividualProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cables" element={<CablesPage />} />
        <Route path="/desktop" element={<DesktopsPage />} />
        <Route path="/hard-disk" element={<HardDiskPage />} />
        <Route path="/interface" element={<InterfacePage />} />
        <Route path="/laptop" element={<LaptopPage />} />
        <Route path="/memory" element={<MemoryPage />} />
        <Route path="/motherboard" element={<MotherBoardPage />} />
        <Route path="/monitor" element={<MonitorsPage />} />
        <Route path="/networking" element={<NetworkingPage />} />
        <Route path="/processor" element={<ProcessorPage />} />
        <Route path="/psu" element={<PsuPage />} />
        <Route path="/server" element={<ServersPage />} />
        <Route path="/product/:slug" element={<IndividualProduct />}/>
        <Route path="/service" element={<ServicePage />}/>
        <Route path="/recycler" element={<RecyclerPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
