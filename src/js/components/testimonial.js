import React from 'react';

import client1 from '../../images/port004-150x150.jpg';
import client2 from '../../images/port003-150x150.jpg';
import client3 from '../../images/port001-150x150.jpg';


const Testimonial = () => {

    return (

        <section id="testimonial">
            <div className="container">
                <div className="row">

                    <div className="testimonial-cont">
                        <blockquote>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                            eos ea ipsam atque laborum! Vitae ipsum veniam esse maiores!"
                        </blockquote>
                        <div className="cont-author">
                            <figure><img src={client1} alt="person" /></figure>
                            <div className="author-name">
                                <h5>Richard Swift</h5>
                                <span>Business Owner</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-cont">
                        <blockquote>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                            eos ea ipsam atque laborum! Vitae ipsum veniam esse maiores!"
                        </blockquote>
                        <div className="cont-author">
                            <figure><img src={client2} alt="person" /></figure>
                            <div className="author-name">
                                <h5>Miriom Richmond</h5>
                                <span>Online Enterpreneur</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-cont">
                        <blockquote>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                            eos ea ipsam atque laborum! Vitae ipsum veniam esse maiores!"
                        </blockquote>
                        <div className="cont-author">
                            <figure><img src={client3} alt="person" /></figure>
                            <div className="author-name">
                                <h5>Donna Blackwood</h5>
                                <span>Restaurant Manager</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default Testimonial;