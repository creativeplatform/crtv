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

import Shuffle from 'shufflejs';

export function initFilter(container, trigger, options) {
    const containerEl = document.querySelector(container);

    if (containerEl) {
        const shuffleInstance = new Shuffle(containerEl, {...options});
        const triggers = document.querySelectorAll(trigger);

        triggers.forEach(el => {
            el.addEventListener('click', function (e) {
                e.preventDefault();
                for (let i = 0; i < triggers.length; i++) {
                    triggers[i].classList.remove('current');
                }
                this.classList.add('current');
                const filter = this.dataset.target;
                shuffleInstance.filter(filter);
            })
        })

        window.addEventListener('resize', () => shuffleInstance.update)
    }
}

export function initShopFilter() {
    initFilter('.shop_items', '.shop_filters-filter', {
        itemSelector: '.shop_items-item'
    })
}