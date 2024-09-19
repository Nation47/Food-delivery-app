const FoodItem = ({item}) => {
    return (
        <>
            <div className="m-auto rounded-xl shadow-lg">
                <div>
                    <img src={item.img} alt="" />
                </div>
                <div>
                    <div>
                        <p>{item.name}</p>
                        <p>rating</p>
                    </div>
                    <p>{item.description}</p>
                    <p>{item.price} Tsh</p>
                </div>
            </div>
        </>
    );
}
 
export default FoodItem;