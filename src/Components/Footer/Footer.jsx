import React from 'react'
import './Footer.css'
import facebookIcon from '../../Assets/assets/facebook_icon.png'
import twitterIcon from '../../Assets/assets/twitter_icon.png'
import linkedinIcon from '../../Assets/assets/linkedin_icon.png'

const Footer = () => {
  return (
    <div className='footer' name='contact'>
        <div className='upper-section'>
            <div className='left-upper-section'>
                <p className='heading'>Eato.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, deserunt molestiae. 
                    Veniam quaerat distinctio numquam eaque obcaecati, perspiciatis excepturi, culpa, 
                    nisi nihil tenetur atque facere id? Esse eveniet repellat mollitia?</p>
                <div className='social-icons'>
                    <img src={facebookIcon} alt="" />
                    <img src={twitterIcon} alt="" />
                    <img src={linkedinIcon} alt="" />
                </div>
            </div>

            <div className='upper-middle-section'>
                <h3>COMPANY</h3>
                <div className='list-options'>
                    <p>Home</p>
                    <p>About us</p>
                    <p>Delivery</p>
                    <p>Privacy policy</p>
                </div>
            </div>

            <div className='upper-right-section'>
                <h3>GET IN TOUCH</h3>
                <div className='list-options'>
                    <p>+92-3012691055</p>
                    <p>huzaifaahsan0301@gmail.com</p>
                </div>
            </div>
        </div>

        <div className='lower-section'>
            <p>Copyright 2024 © Eato.com - All Right Reserved</p>
        </div>      
    </div>
  )
}

export default Footer
