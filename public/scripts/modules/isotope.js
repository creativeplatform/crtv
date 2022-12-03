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

import Isotope from 'isotope-layout';

export default function initIsotope(selector, filterSelector, options) {
    const container = document.querySelector(selector);
    if (container) {
        const isotopeInstance = new Isotope(selector, {
            ...options
        })

        const filterItems = document.querySelectorAll(filterSelector);
        filterItems.forEach(item => {
            item.addEventListener('click', function () {
                for (let i = 0; i < filterItems.length; i++) {
                    filterItems[i].classList.remove('current');
                }
                this.classList.add('current');
                let filterBy = item.dataset.filter;
                isotopeInstance.arrange({filter: filterBy});
            })
        })

        if (selector === '.questions') {
            isotopeInstance.on('layoutComplete', () => {
                let filteredElems = isotopeInstance.getFilteredItemElements();
                for (let i = 0; i < filteredElems.length; i++) {
                    i === filteredElems.length - 1 ? filteredElems[i].style.borderColor = 'transparent' : filteredElems[i].style.borderColor = '#d8d8d8'
                }
            })
        }

        window.addEventListener('resize', () => isotopeInstance.layout())
    }
}