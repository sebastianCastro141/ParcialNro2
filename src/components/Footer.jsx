import React from 'react';
import '../footer.css';
import {FiFacebook} from "react-icons/fi";
import {BsInstagram} from "react-icons/bs";
import {AiOutlineTwitter} from "react-icons/ai";


const Footer = ({titulo}) => {
    return ( 
        <>
        <div className='footer'>
            <p>{titulo} Redes:</p>
            <ul className='links'>
                <li><a href=""><FiFacebook className='link'></FiFacebook></a>facebook</li>
                <li><a href=""><BsInstagram className='link'></BsInstagram></a>Instagram</li>
                <li><a href=""><AiOutlineTwitter className='link'></AiOutlineTwitter></a>Twitter</li> 
            </ul>
        </div>
        </>
     );
}
 
export default Footer;