const Heading = () => {
    return (
        <>
            <div className="relative m-auto max-w-7xl bg-pink-900 rounded-2xl h-96">
                <div className="absolute sm:px-6 lg:px-28 flex flex-col items-start gap-4 bottom-20 left-2 max-w-6xl">
                    <h2 className='text-white font-semibold text-5xl'>Pata Chakula Chako Bora na Haraka, Popote Ulipo na Kwa Bei Nafuu!!</h2>
                    <p className='text-white text-base'>Agiza Chakula, Okoa Muda na Gharama, Kisha Ufurahie Utamu na Ubora wa Kila Sahani Inayofika Kwako!.Furahia Menu Tofauti za Chakula Kila Siku, Ukitumia Mfumo Wetu wa Kuagiza Haraka na Kwa Uhakika. Agiza Chakula Sasa na Pokea Huduma Bora ya Uwasilishaji Inayohakikisha Unapata Chakula Kikiwa Safi na Kitamu!</p>
                    <button className='font-semibold text-pink-900 bg-white text-base rounded-full px-4 py-3 shadow'>Tazama Menu</button>
                </div>
            </div>
        </>
    );
}
 
export default Heading;