import React from 'react';

import partnerImg1 from '../../images/partner-1.jpg';
import partnerImg2 from '../../images/partner-2.jpg';
import partnerImg3 from '../../images/partner-3.jpg';
import partnerImg4 from '../../images/partner-4.jpg';
import partnerImg5 from '../../images/partner-5.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Partners = () => {

    return (

        <section id="partners">
            <div className="container">

                <div className="heading-content">
                    <div className="headings">
                        <h4>Our Partners</h4>
                        <h2>Amattis nulla glavrida ege ulla ambco mattis nulla lorem ege dolor ulla
                            ambco amet.</h2>
                    </div>
                    <a href="#" className="btn btn-line">
                        <FontAwesomeIcon icon = {['fas' , 'handshake']}></FontAwesomeIcon>
                        Become our partners 
                    </a>
                </div>

                <div className="partners-row">
                    
                    <figure className="partner-item">
                        <img src={partnerImg1} className="img-fluid" alt="partners1" />
                        <div className="hover-cont">
                            <h6>Lorem ipsum.</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </figure>

                    <figure className="partner-item">
                        <img src={partnerImg2} className="img-fluid" alt="partners2" />
                        <div className="hover-cont">
                            <h6>Lorem ipsum.</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </figure>

                    <figure className="partner-item">
                        <img src={partnerImg3} className="img-fluid" alt="partners3" />
                        <div className="hover-cont">
                            <h6>Lorem ipsum.</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </figure>

                    <figure className="partner-item">
                        <img src={partnerImg4} className="img-fluid" alt="partners4" />
                        <div className="hover-cont">
                            <h6>Lorem ipsum.</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </figure>

                    <figure className="partner-item">
                        <img src={partnerImg5} className="img-fluid" alt="partners5" />
                        <div className="hover-cont">
                            <h6>Lorem ipsum.</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </figure>

                </div>

            </div>
        </section>

    );
};

export default Partners;