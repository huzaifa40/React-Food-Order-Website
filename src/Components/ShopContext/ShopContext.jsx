import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../../Assets/assets/assets";

export const shopContext = createContext();

export const ShopContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId) => {
        if(!cartItems[itemId]) {
            setCartItems((prev) => ({...prev, [itemId]:1}))
        }
        else {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const getTotalAmount = () => {
        let totalAmount = 0
        for(let item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = food_list.find((prod) => prod._id === item) 
                totalAmount = itemInfo.price*cartItems[item]
            }
        }
        return totalAmount;
    }

    // useEffect(() => {
    //     console.log(cartItems)
    // }, [cartItems])

    const contextValue = {
        food_list, cartItems, setCartItems, addToCart, removeFromCart, getTotalAmount
    };

    return (
        <shopContext.Provider value={contextValue}>
            {children}
        </shopContext.Provider>
    );
};
