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

import lottie from "lottie-web/build/player/lottie";

document.addEventListener('DOMContentLoaded', () => {
    drawCursorLottie();
    drawMenuLottie();
    drawGetUpLottie();
})

function drawCursorLottie() {
    const cursor = document.querySelector('.cursor_lottie');
    lottie.loadAnimation({
        container: cursor,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'lottie/blink.json'
    })
}

function drawMenuLottie() {
    const menuBtn = document.querySelector('.header_trigger');
    if (menuBtn) {
        const cartTrigger = document.querySelector('.header').querySelector('.addToCart');
        const animation = lottie.loadAnimation({
            container: menuBtn,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: 'lottie/menu.json'
        })

        function play() {
            menuBtn.classList.contains('active') ? animation.setDirection(1) : animation.setDirection(-1);
            animation.play();
        }

        menuBtn.addEventListener('click', play);
        cartTrigger.addEventListener('click', play);
        window.addEventListener('resize', () => animation.stop());
    }
}

function drawGetUpLottie() {
    const container = document.querySelector('.getup');
    if (container) {
        const animation = lottie.loadAnimation({
            container: container,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            path: 'lottie/button.json'
        });

        container.addEventListener('mouseover', () => {
            animation.setDirection(1);
            animation.play();
        })

        container.addEventListener('mouseleave', () => {
            animation.setDirection(-1);
            animation.play();
        })
    }
}