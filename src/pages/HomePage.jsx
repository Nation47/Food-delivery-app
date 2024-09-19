import { useState } from "react";
import ExploreMenu from "../components/ExploreMenu";
import Heading from "../components/Heading";
import FoodDisplay from "../components/FoodDisplay";

const HomePage = () => {
    const [category,setCategory] = useState("All")
    return (
        <>
            <Heading />
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category} />
        </>
    );
}
 
export default HomePage;