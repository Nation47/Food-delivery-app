import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayouts = ({setShowLogin}) => {
    return (
        <>
            <Navbar setShowLogin = {setShowLogin} />
            <Outlet />
            <Footer />
        </>
    );
}
 
export default MainLayouts;