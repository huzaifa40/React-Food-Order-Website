import React, { useContext } from 'react'
import './Cart.css'
import { shopContext } from '../../Components/ShopContext/ShopContext'

const Cart = () => {
    const {food_list, removeFromCart, cartItems, getTotalAmount} = useContext(shopContext)
  return (
    <div className='cart-section'>
        <div className='cart-items'>
            <div className='cart-items-title cart-items-heading'>
                <p>Item</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
            </div>
            <br />
            <hr />
            {food_list.map((item, index) => {
                if(cartItems[item._id] > 0) {
                    return (
                        <div>
                            <div className='cart-items-title cart-items-item'>
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>$ {item.price}</p>
                                <p>{cartItems[item._id]}</p>
                                <p>$ {item.price*cartItems[item._id]}</p>       
                                <p onClick={() => removeFromCart(item._id)} className='remove-cart-icon'>x</p>             
                            </div>
                            <hr />
                        </div>    
                    )
                }                
            })}
        </div>

        <div className='cart-total '>
            <h2>Cart Total</h2>
            <div className='cart-subtotal'>
                <p>Subtotal</p>
                <p>$ {getTotalAmount()}</p>
            </div>
            <hr className=''/>
            <div className='cart-subtotal'>
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr className='my-2'/>
            <div className='cart-subtotal'>
                <p>Total</p>
                <p>$ {getTotalAmount()}</p>
            </div>    
            <button className='border-2 bg-red-600 text-gray-300 py-3 px-6 items-start w-[260px] mt-8 '>PROCEED TO CHECKOUT</button>            
        </div>     
    </div>
  )
}

export default Cart
