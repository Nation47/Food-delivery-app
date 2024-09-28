const Heading = () => {
    return (
        <>
            <div className="relative bg-orange-600 rounded-2xl h-96">
                <div className="absolute md:px-6 lg:px-28 flex flex-col items-center justify-center md:items-start gap-4 md:bottom-20  bottom-32 md:left-2 max-w-6xl">
                    <h2 className='text-white text-center md:text-start font-semibold text-3xl px-4 md:px-0 md:text-5xl'>Pata Chakula Chako Bora na Haraka, Popote Ulipo na Kwa Bei Nafuu!!</h2>
                    <p className='hidden md:block md:text-white mdtext-base'>Agiza Chakula, Okoa Muda na Gharama, Kisha Ufurahie Utamu na Ubora wa Kila Sahani Inayofika Kwako!.Furahia Menu Tofauti za Chakula Kila Siku, Ukitumia Mfumo Wetu wa Kuagiza Haraka na Kwa Uhakika. Agiza Chakula Sasa na Pokea Huduma Bora ya Uwasilishaji Inayohakikisha Unapata Chakula Kikiwa Safi na Kitamu!</p>
                    <button className='font-semibold text-orange-700 bg-white text-base rounded-full px-2 py-2 md:px-4 md:py-3 shadow'>Tazama Menu</button>
                </div>
            </div>
        </>
    );
}
 
export default Heading;