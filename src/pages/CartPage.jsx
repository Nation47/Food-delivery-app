import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const CartPage = () => {
    const {cartItems, foodList, removeFromCart, getTotalCartAmount} = useContext(StoreContext);

    return (
        <>
            <div className="m-auto max-w-6xl mt-24">
                <div>
                    <div className="capitalize grid grid-cols-6  items-center text-sm text-gray-500 ">
                        <p>items</p>
                        <p>title</p>
                        <p>price</p>
                        <p>quantity</p>
                        <p>total</p>
                        <p>remove</p>
                    </div>
                    <br />
                    <hr />
                    {foodList.map((item,index) => {
                        if(cartItems[item.id] > 0) {
                            return (
                                <div>
                                    <div className="grid grid-cols-6 items-center text-sm text-black mx-0 my-3">
                                        <img className="w-14" src={item.img} alt="" />
                                        <p>{item.name}</p>
                                        <p>{item.price} Tsh</p>
                                        <p>{cartItems[item.id]}</p>
                                        <p>{item.price*cartItems[item.id]} Tsh</p>
                                        <p onClick={() => removeFromCart(item.id)} className="cursor-pointer">x</p>
                                    </div>
                                    <hr  className="bg-gray-200 border-none h-0.5"/>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className="flex justify-between mt-20 gap-5">
                    <div className="flex-1 gap-5 flex-col ">
                        <h2>Cart Total</h2>
                        <div>
                            <div className="flex justify-between text-gray-700">
                                <p>Subtotal</p>
                                <p>{getTotalCartAmount()} Tsh</p>
                            </div>
                            <hr className="my-2.5" />
                            <div className="flex justify-between text-gray-700"> 
                                <p>Delivery Fee</p>
                                <p>{5000} Tsh</p>
                            </div>
                            <hr className="my-2.5" />
                            <div className="flex justify-between text-gray-700">
                                <b>Total</b>
                                <b>{getTotalCartAmount() + 5000} Tsh</b>
                            </div>
                        </div>
                        <button className="w-52 bg-orange-600 py-3  border-none cursor-pointer rounded-md text-white">PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="flex-1">
                        <div>
                            <p className="text-gray-700">If you have a Promo code, Enter it here</p>
                            <div className="flex justify-between items-center rounded bg-gray-200">
                                <input className="bg-transparent border-none outline-none pl-2.5" type="text" placeholder="Promo code"/>
                                <button className="w-36 rounded border-none bg-black text-white px-1.5 py-3">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default CartPage;