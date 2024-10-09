import { createContext,  useState } from "react";
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

    // calculation on cart total and subtotal
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = foodList.find((product) => product.id === Number(item));
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const contextValue = {
        foodList,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;