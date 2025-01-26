import React from "react";
import './App.css';
import  Navbar from "./Navbar"; 
import How from "./How";
import About from "./About";
import Home from "./Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return(
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<How />} />
        </Routes>
     </Router>
  );
} 

export default App;
