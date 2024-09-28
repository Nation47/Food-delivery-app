import { menuList } from "../assets/assets";

const ExploreMenu = ({category, setCategory}) => {
    return (
        <>
            <div className="flex flex-col gap-5 my-6 " id="menu">
                <h2 className="font-bold text-orange-700 text-2xl">Tembelea Menu</h2>
                <p className="max-w-xl text-gray-800">Tembelea Menu Tofauti za Chakula Kila Siku, Ukitumia Mfumo Wetu wa Kuagiza Haraka na Kwa Uhakika</p>
                <div className="flex justify-between items-center my-5 mx-0  overflow-x-scroll  gap-6 text-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {menuList.map((item,index) => {
                        return(
                            <div className="" onClick={() => setCategory(prev => prev === item.category? "All": item.category)} key={index}>
                                <img src={item.img} alt="" className={category === item.category ?"cursor-pointer w-full h-full rounded-full border-4 border-orange-600":"cursor-pointer w-full h-full rounded-full"} />
                                <p className="mt-2.5 text-orange-700 cursor-pointer text-base">{item.category}</p>
                            </div>
                        )
                    })}
                </div>
                <hr className="my-2.5 h-0.5 mx-0 bg-slate-400" />
            </div>
        </>
    );
}
 
export default ExploreMenu;