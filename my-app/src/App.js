import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Signup from './Components/Signup';
import Home from "./Components/Home/Home";
import { AuthProvider } from './contexts/AuthContext';
function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>

        
          <Route path="/login-signup" element={<Signup />} />
      
      </Routes>

    </Router>
    </AuthProvider>
    
  );
}

export default App;
