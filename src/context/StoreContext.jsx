import { createContext, useEffect, useState } from "react";
import { foodList } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState({});

    // function to add to cart
    const addToCart = (itemId) => {
        if(!cartItems[itemId]) {
            setCartItems((prev) => ({...prev,[itemId] : 1}))
        }
        else{
            setCartItems((prev) => ({...prev,[itemId] : prev[itemId] + 1}))
        }
    }

    // to remove from cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId] : prev[itemId] - 1}))
    }

    useEffect(() => {
        console.log(cartItems)
    },[cartItems])

    const contextValue = {
        foodList,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;