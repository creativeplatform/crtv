/**
 * Upcreators
 * Upcreators is the template for Agency, Streamers, Shop, Blog, Portfolio, Events, etc
 * Exclusively on https://1.envato.market/upcreators-html
 *
 * @encoding        UTF-8
 * @version         1.0.0
 * @copyright       (C) 2018 - 2022 Merkulove ( https://merkulov.design/ ). All rights reserved.
 * @license         Envato License https://1.envato.market/KYbje
 * @contributors    Lilith Lamber (winter.rituel@gmail.com)
 * @support         help@merkulov.design
 **/
"use strict";

import {Collapse, Tab} from "react-bootstrap";
import LazyLoad from "react-lazy-load";
import AOS from 'aos';
// import customSelect from "custom-select/src";
import { drawNav, scrollToTop} from "./modules/nav";
import setYTFrame from "./modules/video";
import {initSwiperSlider} from "./modules/slider";
import {validate} from "./modules/forms";
import {
    setCurrentYear,
    preventDefault,
    addSelectIcon,
    toggleFavIcon,
    hideCover,
    changeQty,
    toggleCartPopup,
    toggleHotspotTooltip,
    toggleProductVideoState,
    iOS,
    appHeight
} from "./modules/helpers";
import {
    drawCustomCursor,
    createCircularText,
    animateEmoji,
    initParallax,
    // makeElementSticky,
    initCounterAnimation,
    setRatingStars
} from "./modules/effects";

document.addEventListener("DOMContentLoaded", () => {
    iOS();
    appHeight();
    drawCustomCursor();
    const lazyload = new LazyLoad();
    AOS.init({
        offset: 50, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 550, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // animation repeat
    });
    animateEmoji();
    createCircularText();
    initParallax();
    initCounterAnimation();
    // customSelect('select:not(.star-rating)');
    addSelectIcon();
    drawNav();
    preventDefault();
    scrollToTop();
    setCurrentYear();
    setYTFrame();
    initSwiperSlider('.feed', false,{
        slidesPerView: 2,
        autoplay: true,
        speed: 1200,
        breakpoints: {
            567.98: {
                slidesPerView: 3,
            },
            767.98: {
                slidesPerView: 4,
            },
            1169.98: {
                slidesPerView: 6,
            },
            1365.98: {
                slidesPerView: 8,
            }
        }
    })
    // makeElementSticky();
    toggleFavIcon();
    changeQty();
    hideCover();
    toggleCartPopup();
    toggleHotspotTooltip();
    toggleProductVideoState();
    setRatingStars();
    validate();

    window.addEventListener('resize', () => {
        appHeight();
        iOS();
    });
})