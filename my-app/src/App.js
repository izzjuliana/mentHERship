import React from "react";
import './App.css';
import  Navbar from "./Components/Navbar"; 
import How from "./Components/How";
import About from "./Components/About";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Signup from './Components/Signup';
import Home from "./Components/Home/Home";
import { AuthProvider } from './contexts/AuthContext';
function App() {
  return(
    <AuthProvider>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<How />} />
          <Route path="/login-signup" element={<Signup />} />
        </Routes>
     </Router>
    </AuthProvider>
     

    );
} 

export default App;
