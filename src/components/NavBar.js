
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Image } from 'react-bootstrap';

const NavBar = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>

            <nav className="navbar--only">
                <div className="navbar-container">
                    <ul>
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <Image className='logo-image' src='images/TGE.svg' alt='total glass effects logo'></Image>
                        </Link>
                    </ul>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-window-close' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>  
                        </li>
                        <li className='nav-item'>
                            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                                Gallery
                            </Link>
                        </li>
                    </ul>
              
                </div>
            </nav>
            
              
        </>
    )
}

export default NavBar;