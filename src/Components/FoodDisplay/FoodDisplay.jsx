import React, { useContext } from 'react'
import './FoodDisplay.css'
import { assets } from '../../Assets/assets/assets'
import { shopContext } from '../ShopContext/ShopContext'
import FoodItems from '../FoodItems/FoodItems'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(shopContext)

  return (
    <div name='dishes'>
        <h2>Top Dishes</h2>
        <div className='all-items'>
            {
                food_list.map((item, index) => {
                    if(category === "All" || category === item.category ) {
                        return <FoodItems key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />
                    }
                })
            }
        </div>
      
    </div>
  )
}

export default FoodDisplay
