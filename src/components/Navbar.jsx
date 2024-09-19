import {BiSearch } from 'react-icons/bi';
import { SlBasket } from "react-icons/sl";
import { useState } from "react";

const Navbar = () => {

    const [menu, setMenu] = useState("home");

    return (
        <>
           <nav className="nav">
                <div className="py-4 sm:px-6 lg:px-8 m-auto max-w-7xl">
                    <div className="flex justify-between items-center">
                        <h2>Agiza Msosi.</h2>
                        {/* another way */}
                        <ul className="flex space-x-2 text-pink-900">
                            <li onClick={() => setMenu('home')} className={menu === "home" ? "active":"px-3 py-1 cursor-pointer"}>home</li>
                            <li onClick={() => setMenu('menu')} className={menu === "menu" ? "active":"px-3 py-1 cursor-pointer"}>menu</li>
                            <li onClick={() => setMenu('mobile-app')} className={menu === "mobile-app" ? "active":"px-3 py-1 cursor-pointer"}>mobile-app</li>
                            <li onClick={() => setMenu('contact-us')} className={menu === "contact-us" ? "active":"px-3 py-1 cursor-pointer"}>contact-us</li>
                        </ul>

                        <div className="flex space-x-4 items-center">
                            <BiSearch className="h-7 w-8 cursor-pointer" />
                            <div className="relative">
                                <SlBasket className="h-7 w-8 ml-0 cursor-pointer" />
                                <div className="dot animate-bounce"></div>
                            </div>
                            <button className="bg-transparent border-2 border-pink-900 py-1 px-6 cursor-pointer rounded-full text-base hover:bg-pink-100">sign in</button>
                        </div>
                    </div>
                </div>
           </nav>
        </>
    );
}
 
export default Navbar;