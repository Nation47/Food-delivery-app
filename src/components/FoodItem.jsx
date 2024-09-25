import { useContext} from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { StoreContext } from '../context/StoreContext';
const FoodItem = ({item}) => {
    const {cartItems, addToCart, removeFromCart} = useContext (StoreContext);

    return (
        <>
            <div className="m-auto rounded-xl shadow-lg ">
                <div className='relative'>
                    <img className="w-full h-44 rounded-t-lg" src={item.img} alt="" />
                    {
                        !cartItems[item.id] ? <div onClick={() => addToCart(item.id)} className='absolute right-4 p-1.5 bottom-4 cursor-pointer rounded-full bg-white'><FaPlus className=''/></div> : <div className='absolute right-4 bottom-4 flex items-center bg-white gap-2.5 p-1.5 rounded-3xl'>
                            <FaMinus onClick={() => removeFromCart(item.id)} className='text-red-700 bg-red-300 rounded-full p-0.5 cursor-pointer ' />
                            <p>{cartItems[item.id]}</p>
                            <FaPlus onClick={() => addToCart(item.id)} className='text-green-700 bg-green-300 rounded-full p-0.5 cursor-pointer'/>
                        </div>
                    }
                </div>
                <div className="p-5">
                    <div className="flex justify-between items-center mt-2.5">
                        <p className="text-xl capitalize text-pink-950 font-semibold">{item.name}</p>
                        <p className="text-yellow-400 flex"><FaStar /><FaStar /><FaStar /><FaStar /></p>
                    </div>
                    <p className="text-xs text-gray-600">{item.description}</p>
                    <p className="text-xl font-medium text-red-600 mt-2.5">{item.price} Tsh</p>
                </div>
            </div>
        </>
    );
}
 
export default FoodItem;