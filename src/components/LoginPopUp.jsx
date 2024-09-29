import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const LoginPopUp = ({setShowLogin}) => {
    const [currentState, setCurrentState] = useState("Sign Up");

    return (
        <>
            <div>
                <form>
                    <div>
                        <h2>{currentState}</h2>
                        <IoCloseSharp  onClick={() => setShowLogin(false)} className="cursor-pointer text-3xl" />
                    </div>
                    <div>
                        <label htmlFor="full name">full name</label>
                        <input type="text" name="name" placeholder="Full name" />
                        <input type="text" name="name" placeholder="Full name" />
                    </div>
                </form>
            </div>
        </>
    );
}
 
export default LoginPopUp;