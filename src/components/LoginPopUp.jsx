import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const LoginPopUp = ({setShowLogin}) => {
    const [currentState, setCurrentState] = useState("Login");

    return (
        <>
            <div className="absolute z-10 bg-gray-800 grid w-full h-full">
                <form className="flex flex-col bg-white text-gray-500 px-8 py-6 max-w-md max-h-full gap-6 text-base rounded-lg m-auto">
                    <div className="text-black flex justify-between items-center">
                        <h2 className="text-xl font-semibold">{currentState}</h2>
                        <IoCloseSharp  onClick={() => setShowLogin(false)} className="cursor-pointer text-2xl" />
                    </div>
                    <div className="flex flex-col gap-5">
                        {currentState === "Login" ? <></> : <input type="text" name="name"  placeholder="Full Name" required className="p-2.5 rounded outline-none border border-gray-400"/>}
                        <input type="email" name="Email" placeholder="Your Email" required className="p-2.5 rounded outline-none border border-gray-400" />
                        <input type="password" name="Password" placeholder="Password" required className="p-2.5 rounded outline-none border border-gray-400" />
                    </div>
                    <button className="cursor-pointer rounded p-2.5 border-none text-base text-white bg-orange-600">{currentState === 'Sign Up' ? 'Create Account' : 'Login'}</button>
                    <div className="flex items-start gap-2 -mt-4">
                        <input type="checkbox" required className="mt-1" />
                        <p>By continuing, I agree to the terms of use & privacy policy </p>
                    </div>
                    {currentState === 'Login' ? 
                        <p>Create  new account? <span onClick={() => setCurrentState('Sign Up')} className="text-orange-600 cursor-pointer font-medium">Click here.</span></p> : 
                        <p>Already have an account? <span onClick={() => setCurrentState('Login')} className="text-orange-600 cursor-pointer font-medium">Login here.</span></p>
                    }
                </form>
            </div>
        </>
    );
}
 
export default LoginPopUp;