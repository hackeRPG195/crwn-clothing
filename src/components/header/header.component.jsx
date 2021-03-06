import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.styles.css';

const Header = ()=>(
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/contact'>
                CONTACT &#160;
            </Link>
            
            <Link className='option' to='/shop'>
                SHOP &#160;
            </Link>

            <Link className='option' to='/signin'>
                SIGN IN
            </Link>
        </div>
    </div>
)

export default Header;