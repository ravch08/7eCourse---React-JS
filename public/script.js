"use strict";

import $ from 'jquery';

const searchPopup = document.querySelector('.search-popup');
const carouselItems = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".dot");
const scrollTop = document.querySelector('.back-to-top');
const sidebar = document.querySelector('.sidebar');

const closeSidebar = function () {
    sidebar.style.right = '-100%';
};

const openSidebar = function () {
    sidebar.style.right = '0%';
};


// IntersectionObserver for Navbar

const target = document.querySelector('.navigation-wrapper');
const bannerSection = document.querySelector('.carousel');

const navOptions = {
    rootMargin: '-82% 0px 0px 0px'
};

const scrollTopOptions = {
    rootMargin: '-80% 0px 0px 0px'
};

const bannerNavObserver = new IntersectionObserver(function (entries) {

    entries.forEach(entry => {

        if (!entry.isIntersecting) {
            target.classList.add('sticky');
        } else {
            target.classList.remove('sticky');
        }
    });
}, navOptions);

const bannerScrollObserver = new IntersectionObserver(function (entries) {

    entries.forEach(entry => {

        if (!entry.isIntersecting) {
            scrollTop.style.visibility = 'visible';
            console.log(entry.isIntersecting.target)
        } else {
            scrollTop.style.visibility = 'hidden';
        };
    });
}, scrollTopOptions);

bannerNavObserver.observe(bannerSection);
bannerScrollObserver.observe(bannerSection);





//Scroll to top

// const scrollToTop = function () {

//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// };




// Show Search

const showSearch = function () {

    // document.querySelector('body').click(function () {
    //     searchPopup.style.visibility === "hidden";
    // });

    if (searchPopup.style.visibility === "hidden") {
        searchPopup.style.visibility = "visible";
        console.log(`pop is visible.`);

    } else {
        searchPopup.style.visibility = "hidden";
    };
};



// Banner Carousel

let counter = 1;

const autoSlide = function () {
    counter += 1;
    carouselSlide(counter);
};

let timer = setInterval(autoSlide, 8000);

const carouselSlide = function (n) {

    let i;
    for (i = 0; i < carouselItems.length; i++) {
        carouselItems[i].style.display = 'none';
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active', '');
    }

    if (n > carouselItems.length) {
        counter = 1;
    } else if (n < 1) {
        counter = carouselItems.length;
    }

    carouselItems[counter - 1].style.display = "block";
    dots[counter - 1].className += " active";
};

carouselSlide(counter);

const currentSlide = function (n) {
    counter = n;
    carouselSlide(counter);
    resetTimer();
};

const resetTimer = function () {
    clearInterval(timer);
    timer = setInterval(autoSlide, 8000);
};