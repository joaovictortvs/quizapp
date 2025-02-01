import '../../output.css'

import { FaGithub, FaInstagram } from "react-icons/fa";

function Footer(){

    return(
        <footer className='flex flex-col items-center bg-gray-700 flex-auto border-t border-gray-50'>
            <div className='mt-4 mb-2 flex space-x-3'>
                <a href='https://github.com/joaovictortvs' target='_blank'>
                    <FaGithub className='fill-gray-300 text-3xl'/>
                </a>
                <a href='https://instagram.com/joaoovv1' target='_blank'>
                    <FaInstagram className='fill-gray-300 text-3xl'/>
                </a>    
            </div>    
            <p className='text-gray-300 text-md'>© 2025</p>
        </footer>
    )

}

export default Footer