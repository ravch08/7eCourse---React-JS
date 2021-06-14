import React from 'react';

import videoImg from '../../images/banner-3.jpg';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

const Video = () => {

    return (

        <section id="video-guide">
            <div className="container">
                <div className="row">

                    <div className="video-content">
                        <div className="headings">
                            <h4>Start learing today!</h4>
                            <h2>Watch our video guide - learn how to start your online education
                                today.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
                                quae!</p>
                            <a href="#" className="btn btn-line">
                                <FontAwesomeIcon icon = {['fas' , 'question-circle']}></FontAwesomeIcon>
                                Feel free to contact our team
                            </a>
                        </div>
                    </div>

                    <div className="video">
                        <a href="#" target="_blank">
                            <img src={videoImg} className="img-fluid" alt="image" />
                        </a>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default Video;