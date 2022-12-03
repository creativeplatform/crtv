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

import Splide from '@splidejs/splide';

export default function initCasesSlider() {
    const slider = new Splide( '.cases_slider', {
        arrows: false,
        type: 'loop',
        mediaQuery: 'min',
        perPage: 1,
        gap: 30,
        speed: 1000,
        waitForTransition: false,
        cloneStatus : false,
        keyboard: true,
        autoplay: true,
        breakpoints: {
            567.98: {
                perPage: 2,
            },
            767.98: {
                gap: 30,
            },
            1023.98: {
                gap: 50,
            },
            1169.98: {
                perPage: 3,
                focus: 'center',
            },
            1365.98: {
                gap: 100
            },
            1769.98: {
                gap: 140
            }
        }
    } );

    slider.mount();

    const hotspotsContent = document.querySelectorAll('.hotspot_content');
    // hide opened hotspot tooltip on touchmove
    slider.on( 'move', function () {
        hotspotsContent.forEach(el => {
            el.classList.remove('visible');
        })
    });

    const prevBtn = document.querySelector('.splide__arrow--prev');
    const nextBtn = document.querySelector('.splide__arrow--next');

    prevBtn.addEventListener('click', e => {
        e.stopPropagation();
        slider.go('-1');
    })

    nextBtn.addEventListener('click', e => {
        e.stopPropagation();
        slider.go('+1');
    })
}