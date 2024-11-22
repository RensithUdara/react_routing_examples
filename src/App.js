import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Company from './pages/Company';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/company" element={<Company />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <footer>
        © {new Date().getFullYear()} My React App. Built with ❤️. 
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </footer>
    </BrowserRouter>
  );
}


export default App;
