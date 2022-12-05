import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { useEffect } from "react";
import LazyLoad from "react-lazy-load";
import AOS from 'aos';
// import customSelect from "custom-select/src";
import { drawNav, scrollToTop } from "../../../public/scripts/modules/nav";
import setYTFrame from "../../../public/scripts/modules/video";
import { initSwiperSlider } from "../../../public/scripts/modules/slider";
import { validate } from "../../../public/scripts/modules/forms";
import {
    setCurrentYear,
    preventDefault,
    addSelectIcon,
    toggleFavIcon,
    hideCover,
    changeQty,
    toggleCartPopup,
    toggleHotspotTooltip,
    toggleProductVideoState,
    iOS,
    appHeight
} from "../../../public/scripts/modules/helpers";
import {
    drawCustomCursor,
    createCircularText,
    animateEmoji,
    initParallax,
    // makeElementSticky,
    initCounterAnimation,
    setRatingStars
} from "../../../public/scripts/modules/effects";


import lottie from "lottie-web/build/player/lottie";
import Marquee from "react-easy-marquee";

export default function Scripts() {
    function drawCursorLottie() {
        const cursor = document.querySelector('.cursor_lottie');
        lottie.loadAnimation({
            container: cursor,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '../../../public/scripts/modules/lottie/blink.json'
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

    function renderMediaTicker() {
        // get all html containers
        const containerElems = document.querySelectorAll('.brands_list-row');
        // create a ticker for each of containers
        // reverse: !!((i + 1) % 2) — every even ticker will have reverse direction
        containerElems.forEach((el, i) => {
            ReactDOM.render(React.createElement(
                React.StrictMode,
                null,
                React.createElement(MediaTicker, { index: i, reverse: !!((i + 1) % 2) })
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
                React.createElement(TextTicker, { index: i })
            ), containerElems[i]);
        })
    }

    // function runTickerElem() {
    //     let textStorage = {};
    //     // get all the HTML ticker elements
    //     const tickerElems = document.querySelectorAll('.ticker');
    //     // push every text string to an object
    //     tickerElems.forEach((ticker, i) => {
    //         let children = ticker.querySelectorAll('.ticker-item');
    //         textStorage[i] = [];
    //         children.forEach(el => {
    //             textStorage[i].push(el.textContent)
    //         })
    //     })
    // }

    function MediaTicker({ index, reverse }) {
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
        // render
        return React.createElement(
            // wrapper tag name
            "div",
            // wrapper props
            { className: "ticker-wrapper" },
            // render Marquee component
            React.createElement(
                Marquee,
                // props
                { duration: 25000, reverse: reverse, className: "ticker-component" },
                // create Marquee component child elements
                imgStorage[index].map(img => React.createElement("img", { src: img, alt: "media" }, null))
            )
        );
    }

    function TextTicker({ index }) {
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
        // render
        return React.createElement(
            // wrapper tag name
            "div",
            // wrapper props
            { className: "ticker-wrapper" },
            // render Marquee component
            React.createElement(
                Marquee,
                // props
                { duration: 15000, className: "ticker-component", reverse: true },
                // create Marquee component child elements
                textStorage[index].map(text => React.createElement("div", { className: "ticker-text" }, text))
            )
        );
    }

    // function runBrandList() {
    //     // create an empty object to store all tickers img src
    //     let imgStorage = {};
    //     // get all the HTML ticker elements
    //     const brandRows = document.querySelectorAll('.brands_list-row');
    //     // push img src string to an object
    //     brandRows.forEach((row, i) => {
    //         let children = row.querySelectorAll('img');
    //         imgStorage[i] = [];
    //         children.forEach(el => {
    //             imgStorage[i].push(el.getAttribute("src"))
    //         })
    //     })
    // }

    const runScripts = () => {
        iOS();
        appHeight();
        drawCustomCursor();
        const lazyload = new LazyLoad();
        AOS.init({
            offset: 50, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 550, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: true, // animation repeat
        });
        animateEmoji();
        createCircularText();
        initParallax();
        initCounterAnimation();
        // customSelect('select:not(.star-rating)');
        addSelectIcon();
        drawNav();
        preventDefault();
        scrollToTop();
        setCurrentYear();
        setYTFrame();
        initSwiperSlider('.feed', false, {
            slidesPerView: 2,
            autoplay: true,
            speed: 1200,
            breakpoints: {
                567.98: {
                    slidesPerView: 3,
                },
                767.98: {
                    slidesPerView: 4,
                },
                1169.98: {
                    slidesPerView: 6,
                },
                1365.98: {
                    slidesPerView: 8,
                }
            }
        })
        // makeElementSticky();
        toggleFavIcon();
        changeQty();
        hideCover();
        toggleCartPopup();
        toggleHotspotTooltip();
        toggleProductVideoState();
        setRatingStars();
        validate();

        drawCursorLottie();
        drawMenuLottie();
        drawGetUpLottie();

        // runTickerElem();
        // runBrandList();
        renderTextTicker();
        renderMediaTicker();

        window.addEventListener('resize', () => {
            appHeight();
            iOS();
        });
    }

    return {
        runScripts
    }
};

// export default Scripts;