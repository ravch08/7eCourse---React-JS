import React from 'react';

import qualityImg1 from '../../images/quality-1.jpg';
import qualityImg2 from '../../images/quality-3.jpg';
import qualityImg3 from '../../images/quality-3.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Learning = () => {

    return (

        <section id="quality-learning">
            <div className="container">
                <div className="row">

                    <div className="headings">
                        <h4>Get access to high quality learning!</h4>
                        <h2>Join Seven online courses today! - master new modern skills quickly &
                            easily.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repellat
                            delectus porro a
                            consequatur at quam blanditiis cupiditate illum deserunt mollitia veniam
                            nemo, harum aliquam
                            ipsa voluptates reprehenderit inventore explicabo?
                        </p>

                        <a href="#" className="btn btn-line">
                            <FontAwesomeIcon icon={['fas' , 'info-circle']}></FontAwesomeIcon>
                            Learn more about our Project
                        </a>
                    </div>

                    <div className="quality-images">
                        <img src={qualityImg2} alt="quality image" />
                        <img src={qualityImg1} alt="quality image" />
                        <img src={qualityImg3} alt="quality image" />
                    </div>

                </div>
            </div>
        </section>
    );
};


export default Learning;