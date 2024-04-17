// import logo from './logo.svg';
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import { Route, Routes } from 'react-router-dom';
// import Home from './Pages/Home/Home';
// import Footer from './Components/Footer/Footer';
// import { useState } from 'react';
// import LoginSignup from './Components/LoginSignup/LoginSignup';
// import Cart from './Pages/Cart/Cart';
// import Extra from './Components/Extra/Extra';
// import { BrowserRouter } from 'react-router-dom';

// function App() {
//   const [showLogin, setShowLogin] = useState(false)

//   return (
//     <>
//     <BrowserRouter>
//     {showLogin?<LoginSignup setShowLogin={setShowLogin} />:<></>}
//       <div className="app">
//         <Navbar setShowLogin={setShowLogin}/>
//         <Home />
//         <Routes>
//           <Route path='/' element={<Extra />} />
//           <Route path='/cart' element={<Cart />} />
//         </Routes>    
//       </div>
//       <Footer />  
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;



import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Cart from './Pages/Cart/Cart';
import Extra from './Components/Extra/Extra';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      <BrowserRouter>
        {showLogin ? <LoginSignup setShowLogin={setShowLogin} /> : null}
        <div className="app">
          <Navbar setShowLogin={setShowLogin}/>
          <Routes>
            <Route path='/extra' element={<Extra />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>    
        </div>
        <Footer />  
      </BrowserRouter>
    </>
  );
}

export default App;
