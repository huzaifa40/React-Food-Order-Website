import React from 'react'
import './Header.css'
import {Link} from 'react-scroll'
import secondImg from '../../Assets/assets/second-head.jpg'

const Header = () => {
  return ( 
    <div className='header' name='header'>
        <div className='head-content'>
          <h1>Order your <br />favorite food here</h1>    
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed alias voluptatum omnis suscipit ipsa. <br />
          Earum distinctio reprehenderit voluptatem ipsam id omnis tempora officia, quis sequi quaerat eius deserunt, <br />
          ducimus cupiditate?</p> 
          <Link to='dishes' duration={500} smooth={true}><button>View Menu</button></Link>
        </div>
    </div>
  )
}

export default Header
