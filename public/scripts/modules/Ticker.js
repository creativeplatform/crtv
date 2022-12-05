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
import Marquee from "react-easy-marquee";

// create an empty object to store all tickers text
let textStorage = {};
// get all the HTML ticker elements
const tickerElems = document.querySelectorAll('.ticker');
// push every text string to an object
tickerElems.forEach((ticker, i) => {
    let children = ticker.querySelectorAll('.ticker-item');
    textStorage[i] = [];
    children.forEach(el => {
        textStorage[i].push(el.textContent)
    })
})

export function TextTicker({index}) {
    // render
    return React.createElement(
        // wrapper tag name
        "div",
        // wrapper props
        {className: "ticker-wrapper"},
        // render Marquee component
        React.createElement(
            Marquee,
            // props
            { duration: 15000, className: "ticker-component", reverse: true},
            // create Marquee component child elements
            textStorage[index].map(text => React.createElement("div", {className: "ticker-text"}, text))
        )
    );
}



// create an empty object to store all tickers img src
let imgStorage = {};
// get all the HTML ticker elements
const brandRows = document.querySelectorAll('.brands_list-row');
// push img src string to an object
brandRows.forEach((row, i) => {
    let children = row.querySelectorAll('img');
    imgStorage[i] = [];
    children.forEach(el => {
        imgStorage[i].push(el.getAttribute("src"))
    })
})

export function MediaTicker({index, reverse}) {
    // render
    return React.createElement(
        // wrapper tag name
        "div",
        // wrapper props
        {className: "ticker-wrapper"},
        // render Marquee component
        React.createElement(
            Marquee,
            // props
            { duration: 25000, reverse: reverse, className: "ticker-component"},
            // create Marquee component child elements
            imgStorage[index].map(img => React.createElement("img", {src: img, alt:"media"}, null))
        )
    );
}
