const Heading = () => {
    return (
        <>
            <div className="relative m-auto max-w-7xl bg-pink-500 rounded-2xl h-96">
                <div className="absolute sm:px-6 lg:px-28 flex flex-col items-start gap-4 bottom-20 left-2 max-w-6xl">
                    <h2 className='text-white font-semibold text-5xl'>Agiza Nasi Chakula Chako Pendwa, wakati wowote.</h2>
                    <p className='text-white text-base'>Chagua chakula toka kwenye menu yetu, yenye vyakula mbalimbali ushuhudie Level nyingine ya utam wa chakula.</p>
                    <button className='font-medium text-pink-400 bg-white text-sm rounded-full px-4 py-3'>Tazama Menu</button>
                </div>
            </div>
        </>
    );
}
 
export default Heading;