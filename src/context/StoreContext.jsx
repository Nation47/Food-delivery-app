import { createContext } from "react";
import { foodList } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({children}) => {

    const contextValue = {
        foodList
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;