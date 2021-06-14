import React from 'react';

import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Features = () => {

    const options = {
        items: 5,
        loop: false,
        margin: 20,
        hover: false,
        dots: false,
        nav: false,

        responsive: {

            0: {
                items: 1
            },

            320: {
                items: 2
            },

            768: {
                items: 4
            },

            992: {
                items: 5
            }
        }
    };
  
    return(

        <section id="features">
            <div className="container">

                <OwlCarousel options={options} id = "oc-features">
                    <div className="oc-items">
                        <FontAwesomeIcon icon = {['fas', 'comments']} />
                        <span>Online Support <br /> 24/7</span>
                    </div>
                    <div className="oc-items">
                        <FontAwesomeIcon icon = {['fas', 'user']} />
                        <span>Experienced <br /> Instructor</span>
                    </div>
                    <div className="oc-items">
                        <FontAwesomeIcon icon = {['fas', 'play-circle']} />
                        <span>Easy to use <br /> Interface</span>
                    </div>
                    <div className="oc-items">
                        <FontAwesomeIcon icon = {['fas', 'certificate']} />
                        <span>Valid Digital <br /> Certificate</span>
                    </div>
                    <div className="oc-items">
                        <FontAwesomeIcon icon = {['fas', 'book-open']} />
                        <span>Free Online <br /> Library</span> 
                    </div>
                </OwlCarousel>

            </div>
        </section>

    );
};

export default Features;


