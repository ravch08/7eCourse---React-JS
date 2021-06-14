import React from 'react';

import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.carousel';

import courseImg1 from '../../images/cor004-768x512.jpg';
import courseImg2 from '../../images/cor0-f-768x512.jpg';
import courseImg3 from '../../images/cor034-768x512.jpg';
import courseImg4 from '../../images/cor056-768x512.jpg';
import courseImg5 from '../../images/cor059-768x512.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Courses = () => {

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

            564: {
                items: 1
            },

            768: {
                items: 2
            },

            992: {
                items: 3
            },

            1200: {
                items: 4
            }
        }
    };
  
    return (

        <section id="trending-courses">
            <div className="container">
                <div className="heading-content">
                    <div className="headings">
                        <h4>Hot topics. Awesome instructors.!</h4>
                        <h2>Check out our trending online courses</h2>
                    </div>
                    <a href="#" className="btn btn-line">
                        <i className="fas fa-graduation-cap"></i> 
                        Browse all online courses
                    </a>
                </div>
            </div>

            <OwlCarousel options = {options} id="course-carousel">

                <div className="oc-items">
                    <img src={courseImg1} alt="courseImage" />
                    <div className="oc-cont">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <span>Ecommerce</span>
                    </div>
                </div>
                <div className="oc-items">
                    <img src={courseImg2} alt="courseImage" />
                    <div className="oc-cont">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <span>Marketing</span>
                    </div>
                </div>
                <div className="oc-items">
                    <img src={courseImg3} alt="courseImage" />
                    <div className="oc-cont">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <span>Ecommerce</span>
                    </div>
                </div>
                <div className="oc-items">
                    <img src={courseImg4} alt="courseImage" />
                    <div className="oc-cont">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <span>Marketing</span>
                    </div>
                </div>
                <div className="oc-items">
                    <img src={courseImg5} alt="courseImage" />
                    <div className="oc-cont">
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <span>Ecommerce</span>
                    </div>
                </div>
            </OwlCarousel>
        </section>  

    );
};


export default Courses;