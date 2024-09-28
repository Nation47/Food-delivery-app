import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayouts = ({setShowLogin}) => {
    return (
        <>
            <Navbar setShowLogin = {setShowLogin} />
            <Outlet />
        </>
    );
}
 
export default MainLayouts;