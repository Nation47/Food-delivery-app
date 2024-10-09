import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const PlaceOrderPage = () => {
    const {getTotalCartAmount} = useContext(StoreContext);
    
    return (
        <>
            <form className="m-auto max-w-6xl mt-24 flex items-start justify-between gap-12">
                <div className="w-full max-w-lg ">
                    <p className="text-3xl font-medium mb-12">Delivery Information</p>
                    <div className="flex gap-2.5">
                        <input className="mb-4 p-2.5 w-full rounded border border-gray-500 outline-orange-600" type="text" placeholder="Jina la kwanza" />
                        <input className="mb-4 p-2.5 w-full rounded border border-gray-500 outline-orange-600" type="text" placeholder="Jina la pili"/>
                    </div>
                    <input className="mb-4 p-2.5 w-full rounded border border-gray-500 outline-orange-600" type="email"  placeholder="Email address"/>
                    <input className="mb-4 p-2.5 w-full rounded border border-gray-500 outline-orange-600" type="text" placeholder="Mtaa" />
                    <div className="flex gap-2.5">
                        <input className="mb-4 p-2.5 w-full rounded border border-gray-500 outline-orange-600" type="text" placeholder="Mji" />
                        <input className="mb-4 p-2.5 w-full rounded border border-gray-500 outline-orange-600" type="text" placeholder="Mkoa"/>
                    </div>
                    <input className="mb-4 p-2.5 w-full rounded border border-gray-500 outline-orange-600" type="text" placeholder="Phone"/>
                </div>
                <div className="w-full max-w-lg">
                    <div className="flex-1 gap-5 flex-col w-full max-w-lg">
                        <h2>Cart Total</h2>
                        <div>
                            <div className="flex justify-between text-gray-700">
                                <p>Subtotal</p>
                                <p>{getTotalCartAmount()} Tsh</p>
                            </div>
                            <hr className="my-2.5" />
                            <div className="flex justify-between text-gray-700"> 
                                <p>Delivery Fee</p>
                                <p>{getTotalCartAmount() === 0 ? 0 : 5000} Tsh</p>
                            </div>
                            <hr className="my-2.5" />
                            <div className="flex justify-between text-gray-700">
                                <b>Total</b>
                                <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5000} Tsh</b>
                            </div>
                        </div>
                        <button className="w-52 mt-7 bg-orange-600 py-3  border-none cursor-pointer rounded-md text-white">PROCEED TO PAYMENT</button>
                    </div>
                </div>
            </form>
        </>
    );
}
 
export default PlaceOrderPage;