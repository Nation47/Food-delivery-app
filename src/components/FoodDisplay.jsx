import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({category}) => {
    const {foodList} = useContext(StoreContext)
    return (
        <>
            <div className=" mt-7">
                <h2 className="font-bold ml-4 md:ml-0 text-orange-700 text-2xl">Chakula Pendwa</h2>
                <div className="md:grid md:grid-cols-4 mt-7 gap-7 row-auto">
                    {foodList.map((item,index) => {
                        if(category === "All" || category === item.category){
                            return <FoodItem key={index} item={item} />
                        }
                    })}
                </div>
            </div>
        </>
    );
}
 
export default FoodDisplay;