import React from 'react';
import logo from '../../images/logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {

    let url = "";
    const sidebar = document.querySelector('.sidebar');

    const showSearch = () => {

        const searchPopup = document.querySelector('.search-popup');
        searchPopup.classList.toggle('search-display');
    };

    const closeSidebar = () =>{
        sidebar.style.right = '-100%';
    };
    
    const openSidebar = () => {
        sidebar.style.right = '0%';
    };
    

    return (
        
        <header>

            <div className="topbar-wrapper">
                <div className="container">
                    <div className="topbar">
                        <div className="support">
                            <FontAwesomeIcon icon={['fas', 'phone-volume']} />
                            <span>24/7 support: +011 322 44 56</span>
                        </div>

                        <div className="social-icons">
                            <a href={url}><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                            <a href={url}><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                            <a href={url}><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                            <a href={url}><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navigation-wrapper">
                <div className="container">
                    <div className="row">

                        <a href={url} className="nav-brand"> <img src={logo} alt='logo' /> </a>

                        <nav>
                            <ul className="navigation">
                                <li className="nav-items active"><a href = {url} className="nav-links">Home</a></li>
                                <li className="nav-items"><a href = {url} className="nav-links">About</a></li>
                                <li className="nav-items"><a href = {url} className="nav-links">Free Courses</a></li>
                                <li className="nav-items"><a href = {url} className="nav-links">Premium Courses</a></li>
                                <li className="nav-items"><a href = {url} className="nav-links">Instructors</a></li>
                                <li className="nav-items"><a href = {url} className="nav-links">Blog</a></li>
                                <li className="nav-items"><a href = {url} className="nav-links">Contact</a></li>
                            </ul>
                        </nav>

                        <div className="nav-header">
                            <div className="nav-utility">
                                <a href={url} className="nav-cart">
                                    <FontAwesomeIcon icon={['fas', 'shopping-bag']} />
                                </a>
                                <a href="#" className="nav-search" onClick={showSearch}>
                                    <FontAwesomeIcon icon = {['fas', 'search']} />
                                </a>
                                <div className="search-popup">
                                    <input type="text" className="searchbar" placeholder="Search..." />
                                    <a href={url} className="search-icon">
                                        <FontAwesomeIcon icon = {['fas' , 'search']} /> 
                                    </a>
                                </div>
                            </div>

                            <div className="hamburger-menu" onClick={openSidebar}>
                                <div className="line"></div>
                            </div>
                        </div>

                        <div className="sidebar">
                            <ul className="side-nav">
                                <li className="side-items"><a href={url} className="side-links">Home</a></li>
                                <li className="side-items"><a href={url} className="side-links">About</a></li>
                                <li className="side-items"><a href={url} className="side-links">Free Courses</a></li>
                                <li className="side-items"><a href={url} className="side-links">Premium Courses</a></li>
                                <li className="side-items"><a href={url} className="side-links">Instructors</a></li>
                                <li className="side-items"><a href={url} className="side-links">Blog</a></li>
                                <li className="side-items"><a href={url} className="side-links">Contact</a></li>
                            </ul>
                            <div className="close" onClick={closeSidebar}>close 
                                <FontAwesomeIcon icon={('fas' , 'times')}></FontAwesomeIcon> 
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        
        </header>
    );
};

export default Header;