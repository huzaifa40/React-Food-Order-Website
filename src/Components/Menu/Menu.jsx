import React, { useState } from 'react';
import './Menu.css';
import { menu_list } from '../../Assets/assets/assets';

const Menu = ({category, setCategory}) => {

  return (
    <div className='section' name='menu'>
      <div className='content'>
        <h2>Menu Categories</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde repudiandae omnis, at odio aperiam magni
          accusantium nam! Repellendus labore molestias nisi quaerat non dignissimos ducimus, quam cumque dolorum illo.
        </p>
      </div>
      <div className='dishes'>
        {menu_list.map((item, index) => {
          return (
            <div className='pic-name' onClick={() => setCategory (prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} >
              <img src={item.menu_image} className={category === item.menu_name ? "active" : ""} alt="" />
              <h5>{item.menu_name}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
