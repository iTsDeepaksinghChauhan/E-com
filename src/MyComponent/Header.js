import React from 'react';
import logoCart from './cart-logo.svg';
import {Navbar} from '../MyStyleComponent.js/navbar';
import  './Header.css'
const Header = (props)=>{
    return(
        <Navbar>
        
            <h1 className='ecom'>E-com</h1>
            <ul className='centerItems'>
                <li>
                    clothing
                </li>
                <li>
                    Books
                </li>
                <li>
                    Electronics
                </li>
            </ul>
            <div className='cart'>
                <img src={logoCart} alt='na'></img>
                {props.count}
            </div>
            <div className='profile'>
                <span>Profile</span>
            </div>
        
        </Navbar>
    )
}

export default Header