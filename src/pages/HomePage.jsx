import { useState } from "react";
import ExploreMenu from "../components/ExploreMenu";
import Heading from "../components/Heading";
import FoodDisplay from "../components/FoodDisplay";
import Footer from "../components/Footer";
import AppDownload from "../components/AppDownload";

const HomePage = () => {
    const [category,setCategory] = useState("All")
    return (
        <>
            <div className="m-auto max-w-6xl">
                <Heading />
                <ExploreMenu category={category} setCategory={setCategory}/>
                <FoodDisplay category={category} />
                <AppDownload />
            </div>
            <Footer />
        </>
    );
}
 
export default HomePage;