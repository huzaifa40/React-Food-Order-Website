import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../Assets/assets/assets'
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import { shopContext } from '../ShopContext/ShopContext'
import Menu from '../Menu/Menu'
import { useNavigate } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home")
    const {getTotalAmount} = useContext(shopContext)

    const navigate = useNavigate();

    const handleItemClick = () => {
      navigate('/home');
    };
      
  return (
    <div className='container'>
        <h1>Eato.</h1>
        <ul>
            <Link to='home'><li onClick={(e) => {setMenu("home"); handleItemClick();}} className={menu === "home" ? "active" : ""}>Home</li></Link>
            <Link to="menu" smooth={true} duration={500}><li onClick={() => setMenu("menu") } className={menu === "menu"? "active" : ""}>Menu</li></Link>
            <Link to="mobile-app" smooth={true} duration={500}><li onClick={() => setMenu("mobile") } className={menu === "mobile"? "active" : ""}>Mobile-app</li></Link>
            <Link to="contact" smooth={true} duration={500}><li onClick={() => setMenu("contact") } className={menu === "contact"? "active" : ""}>Contact us</li></Link>
        </ul>
        <div className='icons-btn'>
            <img src={assets.search_icon} className='search' alt="" />
            <RouterLink to='/cart'>
              <img src={assets.basket_icon} className='basket' alt="" />
            </RouterLink>
            <button onClick={() => setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default Navbar
