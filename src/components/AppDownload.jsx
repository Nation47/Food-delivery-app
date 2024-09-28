import {FaAppStore} from 'react-icons/fa';
import { IoLogoGooglePlaystore } from "react-icons/io5";

const AppDownload = () => {
    return (
        <>
            <div className=' mt-24 font-semibold text-3xl text-center' id='app-download'>
                <p>For Better Experience Download <br /> AgizaMsosi App </p>
                <div className='flex items-center gap-2.5 justify-center mt-10'>
                    <FaAppStore className='animate-bounce cursor-pointer' />
                    <IoLogoGooglePlaystore className='animate-bounce cursor-pointer' />
                </div>
            </div>
        </>
    );
}
 
export default AppDownload;