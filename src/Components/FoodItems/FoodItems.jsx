import React, { useContext, useState } from 'react'
import './FoodItems.css'
import rating_stars from '../../Assets/assets/rating_starts.png'
import addIcon from '../../Assets/assets/add_icon_green.png'
import removeIcon from '../../Assets/assets/remove_icon_red.png'
import selectAddIcon from '../../Assets/assets/add_icon_white.png'
import { shopContext } from '../ShopContext/ShopContext'

const FoodItems = ({id, name, description, price, image}) => {
  // const [count, setCount] = useState(0)

  const {cartItems, addToCart, removeFromCart} = useContext(shopContext)

  return (
    <div className='items'>
        <div className='image-icons'>
          <img src={image} alt="" />
          {
            !cartItems[id]?<img src={selectAddIcon} onClick={() => addToCart(id)} className='add-icon'/>
            :<div className='counter-icons'>
              <img src={removeIcon} onClick={() => removeFromCart(id)} alt="" />
              <p>{cartItems[id]}</p>
              <img src={addIcon} onClick={() => addToCart(id)} alt="" />
            </div>
          }
        </div>
        <div className='item-detail'>
            <div className='title-stars'>
                <p className='title'>{name}</p>
                <img src={rating_stars} alt="" />
            </div>
            <p>{description}</p>
            <h5>$ {price}</h5>  
        </div>            
    </div>
  )
}

export default FoodItems
