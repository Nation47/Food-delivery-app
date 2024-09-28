import { FaFacebookSquare, FaTwitterSquare, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <div className="mt-24 pb-5 flex flex-col gap-5 items-center text-slate-100 bg-gray-950 px-20 pt-20" id='footer'>
                <div className='w-full flex flex-col gap-9  md:grid md:grid-cols-3 md:gap-20'>
                    <div className='flex flex-col gap-5 items-start'>
                        <h1 className="text-lg font-semibold text-orange-600 ">agizaMsosi.com</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ex laboriosam iusto totam velit architecto assumenda incidunt error eum eius.</p>
                        <div className='flex '>
                            <FaFacebookSquare className='text-2xl mr-4' />
                            <FaTwitterSquare className='text-2xl mr-4' />
                            <FaLinkedin className='text-2xl mr-4' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 items-start'>
                        <h2 className='text-white'>COMPANY</h2>
                        <ul className='cursor-pointer'>
                            <li className='mb-2.5 text-sm'>Home</li>
                            <li className='mb-2.5 text-sm'>About us</li>
                            <li className='mb-2.5 text-sm'>Delivery</li>
                            <li className='mb-2.5 text-sm'>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-5 items-start'>
                        <h2 className='text-white'>GET IN TOUCH</h2>
                        <ul className='cursor-pointer'>
                            <li>+255 628 997 494</li>
                            <li>contact@dev.com</li>
                        </ul>
                    </div>
                </div>
                <hr className='w-full my-5 mx-0 h-0.5 border-0 bg-gray-600'/>
                <p className='text-center'>
                    Copyright 2024 &copy; agizaMsosi.com - All Right Reserved.
                </p>
            </div>
        </>
    );
}
 
export default Footer;