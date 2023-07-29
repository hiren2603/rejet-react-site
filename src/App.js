import React from 'react'
import './App.css'
import { Home, About, Inkjet, Co2, Fiber, Uv, Thermal ,Desktop, Applictions, Ewaste,Contact } from './pages';
import {Footer, Navbar, WhatsApp} from './components';
import './App.css'
import { Routes,Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <Navbar />
     <Routes>
      <Route exect path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      {/* <Route exect path="/products" element={<Products />}/> */}
      <Route exect path="/products/inkjet" element={<Inkjet />}/>
      {/* <Route exect path="/products/laser" element={<Laser />}/> */}
      <Route exect path="/products/laser/co2" element={<Co2 />}/>
      <Route exect path="/products/laser/fiber" element={<Fiber />}/>
      <Route exect path="/products/laser/uv" element={<Uv />}/>
      <Route exect path="/products/laser/desktop" element={<Desktop />}/>
      <Route exect path="/products/thermal" element={<Thermal />}/>
      <Route exect path="/applications" element={<Applictions />}/>
      <Route exect path="/ewaste-mgmt" element={<Ewaste />}/>
      <Route exect path="/contact" element={<Contact/>}/>
      <Route path='*' element={<Home />} />
     </Routes>
     <WhatsApp />
     <Footer />
     </>
  )
}

export default App

