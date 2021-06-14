import React from 'react';
import footerLogo from '../../images/logo-footer-cor.webp'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {

    let url = '';

    const scrollToTop = function () {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (

        <footer>
            <div className="container">
                
                <div className="support">
                    <h4>Please donate! Your contribution is important for us.</h4>
                    <h2>Help our educational project to grow & stay 100% free!</h2>
                    <a href={url} className="btn-support">Support Seven Courses</a>
                </div>

                <div className="row">
                    
                    <div className="ftr-row-items ftr-logo">
                        <a href="index.html" className="logo-ftr">
                            <img src={footerLogo} alt="logo" />
                        </a>
                        <span>Get tomorrow’s skills today​!</span>
                        <span>Quickly, easily & 100% free.</span>

                        <div className="ftr-social-icons">
                            <a href={url}><FontAwesomeIcon icon = {['fab' , 'facebook-f']}></FontAwesomeIcon></a>
                            <a href={url}><FontAwesomeIcon icon = {['fab' , 'twitter']}></FontAwesomeIcon></a>
                            <a href={url}><FontAwesomeIcon icon = {['fab' , 'instagram']}></FontAwesomeIcon></a>
                            <a href={url}><FontAwesomeIcon icon = {['fab' , 'youtube']}></FontAwesomeIcon></a>
                        </div>
                    </div>

                    <div className="ftr-row-items ftr-menu">
                        <a href={url} className="ftr-items">- About</a>
                        <a href={url} className="ftr-items">- Donate</a>
                        <a href={url} className="ftr-items">- Become an Instructor</a>
                        <a href={url} className="ftr-items">- Contact</a>
                        <a href={url} className="ftr-items">- Blog</a>
                        <a href={url} className="ftr-items">- User Support</a>
                    </div>

                    <div className="ftr-row-items ftr-companyinfo">

                        <div className="companyinfo">
                            <FontAwesomeIcon icon = {['fas' , 'life-ring']}></FontAwesomeIcon>
                            <div className="info-details">
                                <p>+001 987 65 43 </p>
                                <span>24/7 Users Support</span>
                            </div>
                        </div>

                        <div className="companyinfo">
                            <FontAwesomeIcon icon = {['fas' , 'handshake']}></FontAwesomeIcon>
                            <div className="info-details">
                                <p>+001 234 56 78 </p>
                                <span>Business & Partnership</span>
                            </div>
                        </div>

                        <div className="companyinfo">
                            <FontAwesomeIcon icon = {['fas' , 'envelope']}></FontAwesomeIcon>
                            <div className="info-details">
                                <p>hello@dream-theme.com </p>
                                <span>Questions? Drop us a line!</span>
                            </div>
                        </div>

                        <div className="companyinfo">
                            <FontAwesomeIcon icon = {['fas' , 'map-marker']}></FontAwesomeIcon>
                            <div className="info-details">
                                <p>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000 </p>
                                <span>Our Location</span>
                            </div>
                        </div>

                    </div>

                    <div className="ftr-row-items ftr-blog">
                        <div className="blog-details">
                            <p>How to imperdiet dignissim convallis vitae nisl </p>
                            <span>2nd April 2020 </span>
                        </div>
                        <div className="blog-details">
                            <p>Why lorem amet ipsum glavrida </p>
                            <span>2nd April 2020 </span>
                        </div>
                        <div className="blog-details">
                            <p>Ullamcorper sed a metus non pulvinar justo </p>
                            <span>31st March 2020 </span>
                        </div>
                        <div className="blog-details">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae?</p>
                            <span>3rd January 2020 </span>
                        </div>
                    </div>
                </div>

                <div className="row ftr-bar">
                    <p>All rights reserved 2020 <a href="index.html">Seven Ecourses</a></p>
                    <div className="company-info">
                        <span>hello@dream-theme.com</span>
                        <span>tel: +001 234 56 78</span>
                    </div>
                </div>
            
            </div>

            <a href="#" className="back-to-top" onClick={scrollToTop}>
                <FontAwesomeIcon icon={['fas', 'caret-up']}></FontAwesomeIcon>
            </a>

        </footer>

    );
};

export default Footer;