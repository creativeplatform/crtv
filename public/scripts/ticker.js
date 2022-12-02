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
import React from 'react';
import ReactDOM from 'react-dom';
import {TextTicker, MediaTicker} from "./components/Ticker";

document.addEventListener('DOMContentLoaded', () => {
    renderTextTicker();
    renderMediaTicker();
})

function renderMediaTicker() {
    // get all html containers
    const containerElems = document.querySelectorAll('.brands_list-row');
    // create a ticker for each of containers
    // reverse: !!((i + 1) % 2) — every even ticker will have reverse direction
    containerElems.forEach((el, i) => {
        ReactDOM.render(React.createElement(
            React.StrictMode,
            null,
            React.createElement(MediaTicker, {index: i, reverse: !!((i + 1) % 2)})
        ), containerElems[i]);
    })
}

function renderTextTicker() {
    // get all html containers
    const containerElems = document.querySelectorAll('.ticker');
    // create a ticker for each of containers
    containerElems.forEach((el, i) => {
        ReactDOM.render(React.createElement(
            React.StrictMode,
            null,
            React.createElement(TextTicker, {index: i})
        ), containerElems[i]);
    })
}

