import { menuList } from "../assets/assets";

const ExploreMenu = ({category, setCategory}) => {
    return (
        <>
            <div className="flex flex-col gap-5 m-auto max-w-6xl my-6 ">
                <h2 className="font-bold text-pink-900 text-2xl">Tembelea Menu</h2>
                <p className="max-w-xl text-gray-800">Tembelea Menu Tofauti za Chakula Kila Siku, Ukitumia Mfumo Wetu wa Kuagiza Haraka na Kwa Uhakika</p>
                <div className="flex justify-between items-center my-5 mx-0  overflow-x-scroll  gap-6 text-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {menuList.map((item,index) => {
                        return(
                            <div className="" onClick={() => setCategory(prev => prev === item.name? "All": item.name)} key={index}>
                                <img src={item.img} alt="" className={category === item.name ?"cursor-pointer w-36 min-w-20 rounded-full border-4 border-pink-900":"cursor-pointer w-36 min-w-20 rounded-full"} />
                                <p className="mt-2.5 text-pink-950 cursor-pointer text-base">{item.name}</p>
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