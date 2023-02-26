import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Footer from './components/Footer'
import Error from './pages/Error'
import Card from './pages/Card'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
  
      <Routes>

        
        <Route exact path="/p7kasa" element={<Home />} />
        <Route path="/p7kasa/card/:id" element={<Card />} />
        
        <Route path="/p7kasa/a_propos" element={<Apropos />} />
        
        <Route path="/p7kasa/error" element={<Error />} />
        
        <Route path="*" element={<Error />} />
 
      </Routes>

      <Footer />
    
    </Router>  
  </React.StrictMode>
);