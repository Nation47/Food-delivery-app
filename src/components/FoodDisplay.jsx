import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({category}) => {
    const {foodList} = useContext(StoreContext)
    return (
        <>
            <div className="m-auto max-w-6xl mt-7">
                <h2 className="font-bold text-pink-900 text-2xl">Chakula Pendwa</h2>
                <div className="grid grid-cols-4 mt-7 gap-7 row-auto">
                    {foodList.map((item,index) => {
                        return <FoodItem key={index} item={item} />
                    })}
                </div>
            </div>
        </>
    );
}
 
export default FoodDisplay;