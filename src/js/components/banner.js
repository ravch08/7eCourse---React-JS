import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BannerImg2 from '../../images/banner-2.jpg';
import BannerImg3 from '../../images/banner-3.jpg';

const Banner = () => {

    let url = "";

    return (

        <div className="carousel">

        <div className="carousel-item">
            <div className="carousel-content ">
                <h4><span>100% Free</span> Online Courses</h4>
                <h1>Get Tomorrow's <br /> Skill today!</h1>

                <div className="banner-btns">
                    <a href= {url} className="btn btn-carousel"><FontAwesomeIcon icon={['fas', 'graduation-cap']} /> Browse Courses</a>
                    <a href= {url} className="btn btn-carousel"><FontAwesomeIcon icon={['fas', 'info-circle']} /> About our Project</a>
                </div>
            </div>
            <img src={BannerImg2} alt="banner-image" />
        </div>

        <div className="carousel-item">
            <div className="carousel-content">
                <h4><span>100% Free</span> Online Courses</h4>
                <h1>Get Tomorrow's <br /> Skill today!</h1>

                <div className="banner-btns">
                    <a href= {url} className="btn btn-carousel"><FontAwesomeIcon icon={['fas', 'graduation-cap']} /> Browse Courses</a>
                    <a href= {url} className="btn btn-carousel"><FontAwesomeIcon icon={['fas', 'info-circle']} /> About our Project</a>
                </div>
            </div>
            <img src={BannerImg2} alt="banner-image" />
        </div>

        <div className="carousel-item">
            <div className="carousel-content">
                <h4><span>100% Free</span> Online Courses</h4>
                <h1>Get Tomorrow's <br /> Skill today!</h1>

                <div className="banner-btns">
                    <a href= {url} className="btn btn-carousel"><FontAwesomeIcon icon={['fas', 'graduation-cap']} /> Browse Courses</a>
                    <a href= {url} className="btn btn-carousel"><FontAwesomeIcon icon={['fas', 'info-circle']} /> About our Project</a>
                </div>
            </div>
            <img src={BannerImg3} alt="banner-image" />
        </div>

        <div className="carousel-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
        </div>

    </div>
    );
};

export default Banner;
