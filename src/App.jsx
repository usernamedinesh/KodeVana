import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services"
import Projects from "./components/Projects"
import Reviews from "./components/Reviews"
import ContactUs from "./components/ContactUs"
import Header from './components/Header';
import Footer from './components/Footer';





function App() {
  return (
    <>
    
    <Router>
    
      
      <Routes>
      
        <Route exact path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/reviews"element={<Reviews/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
