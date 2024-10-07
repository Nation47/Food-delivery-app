import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const CartPage = () => {
    const {cartItems, foodList, removeFromCart} = useContext(StoreContext);

    return (
        <>
            <div className="m-auto max-w-6xl">
                <div>
                    <div className="capitalize">
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
                                    <img src={item.img} alt="" />
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    <p>{cartItems[item.id]}</p>
                                    <p>{item.price*cartItems[item.id]}</p>
                                    <p>X</p>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </>
    );
}
 
export default CartPage;