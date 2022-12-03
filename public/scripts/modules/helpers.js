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

import {headroom} from './nav'

export function preventDefault() {
    document.addEventListener('click', function (e) {
        if ((e.target.tagName === 'A' && e.target.getAttribute('href') === '#') || (e.target.closest('a') !== null && e.target.closest('a').getAttribute('href') === '#')) {
            e.preventDefault();
        }
    });

    document.addEventListener('submit', e => {
        if (e.target.tagName === 'FORM') {
            e.preventDefault();
        }
    })

    document.querySelectorAll('video').forEach(el => {
        el.disablePictureInPicture = true;
    })
}

export function hideCover() {
    const coverElems = document.querySelectorAll('.cover');
    if (coverElems) {
        coverElems.forEach((el, i) => {
            el.addEventListener('click', () => {
                el.classList.add('hidden')
            })
        })
    }
}

export function setCurrentYear() {
    const container = document.getElementById('currentYear');

    if (container) {
        container.textContent = String(new Date().getFullYear());
    }
}

export function addSelectIcon() {
    const selectOpeners = document.querySelectorAll('.custom-select-opener');
    if (selectOpeners) {
        selectOpeners.forEach(el => {
            let icon = document.createElement('i');
            icon.classList.add('icon', 'icon-caret-down-solid');
            el.append(icon)
        })
    }
}

export function iOS() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    isIOS ? document.body.classList.add('iOS') : document.body.classList.remove('iOS')
}

export function appHeight () {
    const doc = document.documentElement;
    doc.style.setProperty('—app-height', `${window.innerHeight}px`)
}

export function getDeviceType() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return "mobile"
    } else {
        return "desktop"
    }
}

export function toggleFavIcon() {
    const btns = document.querySelectorAll('.addToFavorites');
    const cursor = document.querySelector('.cursor');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            let icon = btn.querySelector('i');
            btn.classList.toggle('active');
            if (btn.classList.contains('active')) {
                icon.classList.remove('icon-heart-o');
                icon.classList.add('icon-heart');
            } else {
                icon.classList.add('icon-heart-o');
                icon.classList.remove('icon-heart');
            }
        })
        btn.addEventListener('mouseover', () => {
            cursor.classList.remove('cursor--eye');
        })
    })
}

export function changeQty() {
    const qtyMinusBtns = document.querySelectorAll('.qty_minus');
    const qtyPlusBtns = document.querySelectorAll('.qty_plus');
    const qtyAmountInputs = document.querySelectorAll('.qty_amount');
    const qtyAmountInputDisplays = document.querySelectorAll('.qty_amount-display');

    if (qtyAmountInputs) {
        qtyAmountInputs.forEach((input, i) => {

            let qtyValue = input.value;
            qtyAmountInputDisplays[i].textContent = qtyValue;

            qtyPlusBtns[i].addEventListener('click', () => {
                qtyValue <= 99 ? qtyValue++ : false;
                input.value = qtyValue;
                qtyAmountInputDisplays[i].textContent = qtyValue;
            })

            qtyMinusBtns[i].addEventListener('click', () => {
                qtyValue >= 2 ? qtyValue-- : false;
                input.value = qtyValue;
                qtyAmountInputDisplays[i].textContent = qtyValue;
            })
        })
    }
}

export function toggleCartPopup() {
    const triggers = document.querySelectorAll('.addToCart');
    const popup = document.querySelector('.cart_popup');
    const popupBackdrop = document.querySelector('.cart_popup-backdrop');
    const header = document.querySelector('.header');

    function closePopup() {
        popup.classList.remove('visible');
    }

    triggers.forEach(el => {
        el.addEventListener('click', e => {
            headroom.pin();
            e.stopPropagation();
            e.preventDefault();
            popup.classList.toggle('visible');
        })
    })

    popupBackdrop.addEventListener('click', e => {
        closePopup()
    })

    window.addEventListener('resize', closePopup);
    window.addEventListener('scroll', () => {
        header.classList.contains('header--unpinned') ? closePopup() : false
    })
}

export function toggleHotspotTooltip() {
    const hotspotsTriggers = document.querySelectorAll('.hotspot_trigger');
    const hotspotsContent = document.querySelectorAll('.hotspot_content');
    hotspotsTriggers.forEach((el, i) => {
        el.addEventListener('click', () => {
            hotspotsContent[i].classList.toggle('visible');
            document.body.addEventListener('click', e => {
                if (e.target !== el) {
                    hotspotsContent[i].classList.remove('visible');
                }
            })
        })
    })
}

export function toggleProductVideoState() {
    const containers = document.querySelectorAll('[data-video="true"]');
    if (containers) {
        containers.forEach(el => {
            let video = el.querySelector('video');
            video.pause();
            el.addEventListener('mouseenter', e => {
                e.stopPropagation();
                video.play();
            })
            el.addEventListener('mouseleave', e => {
                e.stopPropagation();
                video.pause();
            })
        })
    }
}