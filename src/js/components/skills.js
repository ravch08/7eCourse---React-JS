import React from 'react';

import icon1 from '../../images/icon-briefcase.svg';
import icon2 from '../../images/icon-cloud.svg';
import icon3 from '../../images/icon-certificate.svg';

const Skills = () => {

    return (

        <section id="skill">

            <div className="container">
                <div className="row">

                    <div className="skill-cont">
                        <div className="skill-info">
                            <figure><img src={icon1} alt="icons" /></figure>
                            <div className="text">
                                <h3>Get all necessary skills for new career</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit sapiente saepe
                                    expedita placeat quod!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="skill-cont">
                        <div className="skill-info">
                            <figure><img src={icon2} alt="icons" /></figure>
                            <div className="text">
                                <h3>Learn the latest skills</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore quasi
                                    veritatis?
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="skill-cont">
                        <div className="skill-info">
                            <figure><img src={icon3} alt="icons" /></figure>
                            <div className="text">
                                <h3>Receive international certificate or degree</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet fuga aspernatur
                                    consequuntur veniam!
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
        
    );
};

export default Skills;



