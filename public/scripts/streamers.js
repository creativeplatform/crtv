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

import {initSwiperSlider, initInsightSwiper} from "./modules/slider";

document.addEventListener('DOMContentLoaded', () => {
    initVideoSwipers();
    initInsightSwiper();
})

function initVideoSwipers() {
    const sliders = document.querySelectorAll('.channels_content .swiper');
    sliders.forEach((el, i) => {
        initSwiperSlider(`.swiper_${i + 1}`, `.swiper_${i + 1}-nav`, {
            spaceBetween: 30,
            autoplay: {
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
            },
            speed: 2000,
            breakpoints: {
                767.98: {
                    slidesPerView: 2,
                },
                1169.98: {
                    slidesPerView: 3,
                },
                1599.98: {
                    slidesPerView: 4,
                }
            }
        })
    })
}