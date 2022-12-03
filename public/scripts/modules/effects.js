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

import lax from 'lax.js'
// import hcSticky from "hc-sticky";
import {CountUp} from 'countup.js';
import StarRating from 'star-rating.js';
import {getDeviceType} from "./helpers";

export function drawCustomCursor() {
    const htmlContainer = document.createElement('div');
    htmlContainer.classList.add('cursor', 'cursor--normal');
    document.body.append(htmlContainer);
    const lottieContainer = document.createElement('div');
    lottieContainer.classList.add('cursor_lottie');
    htmlContainer.append(lottieContainer);

    const eyeTriggers = document.querySelectorAll('.eyeTrigger');

    window.addEventListener('mousemove', e => {
        htmlContainer.style.top = `${e.clientY}px`;
        htmlContainer.style.left = `${e.clientX}px`;

        if (e.target.tagName === "IFRAME") {
            htmlContainer.style.display = 'none';
        } else {
            htmlContainer.style.display = '';
        }

        if (e.target.tagName === "A" || e.target.closest('a') !== null || e.target.tagName === "BUTTON") {
            htmlContainer.classList.add('cursor--link');
            if (eyeTriggers) {
                if (e.target.classList.contains('eyeTrigger') || (e.target.closest('a') !== null && e.target.closest('a').classList.contains('eyeTrigger'))) {
                    htmlContainer.classList.add('cursor--eye');
                }
            }
        } else {
            htmlContainer.classList.remove('cursor--link', 'cursor--eye');
        }
    })

    function toggleCursor() {
        let device = getDeviceType();
        if (device === "desktop") {
            htmlContainer.classList.add('visible');
        } else {
            htmlContainer.classList.remove('visible');
        }
    }

    toggleCursor();
    window.addEventListener('resize', toggleCursor);
}

export function initCounterAnimation(numSelector = '.countNum', animationDuration = 3, startVal = 0) {
    const numArr = document.querySelectorAll(numSelector);
    for (let i = 0; i < numArr.length; i++) {
        let num = numArr[i];
        let value = +num.dataset.value;
        let options = {
            prefix: num.dataset.prefix ? num.dataset.prefix : '',
            suffix: num.dataset.suffix ? num.dataset.suffix : '',
            separator: num.dataset.separator ? num.dataset.separator : '',
            duration: animationDuration,
            startVal: startVal,
            decimalPlaces: num.dataset.decimal ? num.dataset.decimal : ''
        };
        let animatedNum = new CountUp(num, value, options);

        const observer = new IntersectionObserver(handleIntersection);
        observer.observe(num);

        function handleIntersection(entries, observer) {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    animatedNum.start();
                    observer.unobserve(entry.target);
                }
            });
        }
    }
}

export function animateEmoji() {
    const emojis = document.querySelectorAll('.emoji_item');
    const observer = new IntersectionObserver(handleIntersection);
    emojis.forEach(el => observer.observe(el))

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.style.transform = 'scale(1)';
            } else {
                entry.target.style.transform = 'scale(0)';
            }
        });
    }
}

export function createCircularText() {
    const textEl = document.querySelector('.circular_text');
    if (textEl) {
        const textArr = [...(textEl.dataset.text + ". ")];
        const totalChars = textArr.length;
        const anglePerCharacter = 360 / totalChars;
        textArr.forEach((c, i) => {
            const character = document.createElement("span");
            character.className = "character";
            character.textContent = c;

            textEl.appendChild(character);
            const r = i * anglePerCharacter;
            const y = totalChars * 2.2;
            character.style.transform = `
        translate(-50%, -50%) rotate(${180 + r}deg) 
        translateY(${y}px) rotate(${180}deg)`;
        })
    }
}

export function initParallax() {
    window.onload = () => {
        window.lax = {presets: lax.presets}
        lax.init()
        lax.addDriver('scrollY', function () {
            return window.scrollY
        })
        lax.addElements('.laxY', {
            scrollY: {
                translateY: [
                    ['elInY', 'elOutY'],
                    {
                        1169: [0, 0],
                        1170: [0, 100],
                        inertia: 10
                    }]
            }
        })
        lax.addElements('.laxYinvert', {
            scrollY: {
                translateY: [
                    ['elInY', 'elOutY'],
                    {
                        1169: [0, 0],
                        1170: [0, -100],
                        inertia: 10
                    }]
            }
        })
    }
}

export function makeElementSticky(selector = '[data-sticky="true"]', parent = '.sticky-parent') {
    const stickyEl = document.querySelector(selector);
    if (stickyEl) {
        let stopAt = +stickyEl.dataset.stop;
        let top = +stickyEl.dataset.top;
        let Sticky = new hcSticky(selector, {
            stickTo: parent,
            followScroll: false,
            responsive: {
                queries: {
                    1170: {
                        disable: true,
                        bottomEnd: 0
                    }
                }
            },
            top: top ? top : 0,
            bottomEnd: stopAt ? stopAt : 0
        });
        window.addEventListener('resize', () => {
            Sticky.refresh();
        })
    }
}

export function setRatingStars() {
    const starsElems = document.querySelectorAll('.star-rating');
    if (starsElems.length !== 0) {
        const stars = new StarRating('.star-rating', {
            tooltip: false
        });
    }
}