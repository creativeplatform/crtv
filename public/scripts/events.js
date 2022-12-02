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

import {initSwiperSlider} from "./modules/slider";
import {auto} from "@popperjs/core";

document.addEventListener('DOMContentLoaded', () => {
    initFilterableSwiper();
})

function initFilterableSwiper() {
    const filterElems = document.querySelectorAll('.upcoming_filters-filter');
    
    initSwiperSlider('.upcoming_slider', '.upcoming_nav', {
        spaceBetween: 30,
        observer: true,
        updateOnImagesReady: true,
        loop: false,
        breakpoints: {
            567.98: {
                slidesPerView: 2,
            },
            767.98: {
                slidesPerView: auto,
            }
        }
    });
    
    const swiper = document.querySelector('.upcoming_slider').swiper;
    const swiperSlides = document.querySelectorAll('.upcoming_slider-slide');
    
    filterElems.forEach((el, index) => {
        el.addEventListener('click', () => {
            let target = el.dataset.target;
            swiperSlides.forEach(slide => {
                slide.classList.contains(target) ? slide.style.display = '' : slide.style.display = 'none';
                if (target === 'all') {
                    slide.style.display = '';
                }
            })

            for (let i = 0; i < filterElems.length; i++) {
                if (i === index) continue
                filterElems[i].classList.remove('current');
            }

            el.classList.add('current');

            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();
            swiper.slideTo(0);

            return false;
        })
    })
}