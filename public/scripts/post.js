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
import initGallery from "./modules/gallery";

document.addEventListener('DOMContentLoaded', () => {
    initSwiperSlider('.post_content-article_gallery .gallery', '.gallery_nav', {
        slidesPerView: 1,
        autoplay: true,
        speed: 1300,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });
    initInsightSwiper();
    initGallery();
})