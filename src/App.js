import React from 'react';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Contact from './component/Contact';
import Start from './component/Start';
import WordDay from './component/WordDay';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/contact" element={<Contact/>}/>
        <Route index element={<Home/>}/>
        <Route path="/start" element={<Start/>}/>
        <Route path="/nav" element={<Navbar/>}/>
        <Route path="/wordday" element={<WordDay/>}/>
      </Routes>    
      <Footer/>    
    </BrowserRouter>
  );
}

export default App;
