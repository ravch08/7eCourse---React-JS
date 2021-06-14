import React from 'react';

import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.carousel';

import instructorImg1 from '../../images/in000-600x800.jpg';
import instructorImg2 from '../../images/in004-600x800.jpg';
import instructorImg3 from '../../images/in006-600x800.jpg';
import instructorImg4 from '../../images/in007-600x800.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 


const Instructors = () => {

    const options = {

        autoplay: true,
        loop: true,
        margin: 20,
        hover: false,
        dots: false,
        nav: true,
        navText: [
            <FontAwesomeIcon icon = {['fas', 'angle-left']} />,
            <FontAwesomeIcon icon = {['fas', 'angle-right']} />
        ],

        responsive: {

            0: {
                items: 1
            },

            580: {
                items: 1
            },

            600: {
                items: 2
            },

            992: {
                items: 3
            }
        }
    };

    return (

        <section id="instructors">
            <div className="container">
                <div className="row">

                    <OwlCarousel options={options} id="instructor-carousel">
                        <div className="oc-items">
                            <img src={instructorImg1} alt="images" />
                            <div className="oc-cont">
                                <h3><a href="#">Tiffany Rose</a></h3>
                                <span>Business Advisor</span>
                            </div>
                        </div>

                        <div className="oc-items">
                            <img src={instructorImg2} alt="images" />
                            <div className="oc-cont">
                                <h3><a href="#">James Jeffersondiv</a></h3>
                                <span>Public Relations Advisor</span>
                            </div>
                        </div>
                        
                        <div className="oc-items">
                            <img src={instructorImg3} alt="images" />
                            <div className="oc-cont">
                                <h3><a href="#">Anna Dobrovadiv</a></h3>
                                <span>HR Expert</span>
                            </div>
                        </div>
                        
                        <div className="oc-items">
                            <img src={instructorImg4} alt="images" />
                            <div className="oc-cont">
                                <h3><a href="#">Jessica Andersondiv</a></h3>
                                <span>Marketing Expert</span>
                            </div>
                        </div>
                    </OwlCarousel>

                    <div className="instructor-cont">
                        <div className="headings">
                            <h4>Meet our Instructors</h4>
                            <h2>Educators from best world's universities, top business coaches &
                                advisors.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
                                quae!</p>
                            <a href="#" className="btn btn-line">
                                <FontAwesomeIcon icon = {['fas' , 'user-plus']} ></FontAwesomeIcon>
                                Join our team
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};


export default Instructors;