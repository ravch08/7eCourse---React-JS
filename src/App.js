import React from 'react';
import './css/main.min.css';

import Header from './js/components/header';
import Banner from './js/components/banner';
import Features from './js/components/features';
import Learning from './js/components/learning';
import Skills from './js/components/skills';
import Courses from './js/components/courses';
import Instructors from './js/components/instructors';
import Video from './js/components/video';
import Testimonial from './js/components/testimonial';
import Partners from './js/components/partners';
import Footer from './js/components/footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faPhoneVolume, faShoppingBag , faSearch, faTimes, faGraduationCap, faInfoCircle, 
  faComments, faUser, faPlayCircle, faCertificate, faBookOpen, faUserPlus, 
  faQuestionCircle, faHandshake, faLifeRing, faEnvelope, faMapMarker, faCaretUp, faAngleLeft, faAngleRight
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faPhoneVolume, faShoppingBag , faSearch, faTimes, faGraduationCap, faInfoCircle, 
  faComments, faUser, faPlayCircle, faCertificate, faBookOpen, faUserPlus, 
  faQuestionCircle, faHandshake, faLifeRing, faEnvelope, faMapMarker, faCaretUp, faAngleLeft, faAngleRight);



function App() {

  return (
    <div id="content">
        <Header></Header>
        <Banner></Banner>
        <Features></Features>
        <Learning></Learning>
        <Skills></Skills>
        <Courses></Courses>
        <Instructors></Instructors>
        <Video></Video>
        <Testimonial></Testimonial>
        <Partners></Partners>
        <Footer></Footer>
    </div>
  );
}

export default App;