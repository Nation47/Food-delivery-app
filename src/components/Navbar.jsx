import {BiSearch } from 'react-icons/bi';
import { SlBasket } from "react-icons/sl";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("home");

    return (
        <>
           <nav className="nav">
                <div className="py-2 sm:py-4 sm:px-6 lg:px-8 m-auto max-w-7xl">
                    <div className="flex justify-between items-center">
                        <Link to='/'>
                            <h2 className='text-base md:text-lg font-medium sm:font-semibold text-orange-600'>agizaMsosi.com</h2>
                        </Link>
                        {/* another way */}
                        <ul className="md:flex hidden md:space-x-2 capitalize text-orange-900">
                            <Link to='/' onClick={() => setMenu('home')} className={menu === "home" ? "active":"py-0.5 px-1 md:px-3 md:py-1 cursor-pointer"}>home</Link>
                            <a href='#menu' onClick={() => setMenu('menu')} className={menu === "menu" ? "active":"py-0.5 px-1 md:px-3 md:py-1 cursor-pointer"}>menu</a>
                            <a href='#app-download' onClick={() => setMenu('mobile-app')} className={menu === "mobile-app" ? "active":"py-0.5 px-1 md:px-3 md:py-1 cursor-pointer"}>mobile-app</a>
                            <a href='#footer' onClick={() => setMenu('contact-us')} className={menu === "contact-us" ? "active":"py-0.5 px-1 md:px-3 md:py-1 cursor-pointer"}>contact-us</a>
                        </ul>

                        <div className="flex space-x-2 md:space-x-4 items-center">
                            <BiSearch className=" text-2xl cursor-pointer" />
                            <div className="relative">
                                <Link to='/cart'> 
                                    <SlBasket className=" text-2xl cursor-pointer" />
                                </Link>
                                <div className="dot animate-bounce"></div>
                            </div>
                            <button onClick={() => setShowLogin(true)} className="bg-transparent border-2 border-orange-700 py-1 px-4 md:px-6 cursor-pointer rounded-full md:text-base text-sm hover:bg-orange-200 capitalize">sign in</button>
                        </div>
                    </div>
                </div>
           </nav>
        </>
    );
}
 
export default Navbar;