import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Cart from './Pages/Cart/Cart';

function App() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginSignup setShowLogin={setShowLogin} />:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>    
      </div>
      <Footer />  
    </>
  );
}

export default App;
