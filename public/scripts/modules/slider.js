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

import Swiper, {Navigation, Autoplay, Pagination, EffectFade, Thumbs} from 'swiper';

Swiper.use([Navigation, Autoplay, Pagination, EffectFade, Thumbs]);

// basic swiper initialization
export function initSwiperSlider(container, parentClass, options) {
    const containerEL = document.querySelector(container);
    if (containerEL) {
        const swiper = new Swiper(container, {
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            loop: true,
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
            pagination: {
                el: `${parentClass}.swiper-pagination`,
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: `${parentClass} .swiper-button-next`,
                prevEl: `${parentClass} .swiper-button-prev`,
            },
            ...options,
        });

        // get rid of duplicated images caused by swiper
        const galleryLinks = document.querySelectorAll('[data-role="gallery"]');

        if (galleryLinks.length !== 0) {
            galleryLinks.forEach(el => {
                if (el.parentElement.classList.contains('swiper-slide-duplicate') && el.parentElement.classList.contains('swiper-slide-prev') || el.parentElement.classList.contains('swiper-slide-duplicate-active')) {
                    el.classList.add('ignored');
                }
            })
        }
    }
}

// insights swiper
export function initInsightSwiper() {
    initSwiperSlider('.insights_slider', '.insights_nav', {
        autoplay: true,
        speed: 1200,
        spaceBetween: 30,
        breakpoints: {
            767.98: {
                slidesPerView: 2,
            },
            1169.98: {
                slidesPerView: 3,
            },
        }
    })
}

// suggested swiper
export function initSuggestedSwiper() {
    initSwiperSlider('.suggested_slider', '.suggested_nav', {
        spaceBetween: 30,
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
        },
        speed: 1500,
        breakpoints: {
            567.98: {
                slidesPerView: 2,
            },
            1023.98: {
                slidesPerView: 3,
            },
            1365.98: {
                slidesPerView: 4,
            }
        }
    })
}

export function initProductSlider() {
    let thumbsSlider;
    initSwiperSlider('.media_slider--thumbs', '.media_slider-nav',{
        freeMode: true,
        loop: true,
        watchSlidesProgress: true,
        spaceBetween: 15,
        slidesPerView: 3,
        speed: 1500,
        breakpoints: {
            567.98: {
                spaceBetween: 30,
            },
            767.98: {
                spaceBetween: 30,
                slidesPerView: 4,
            },
            1169.98: {
                spaceBetween: 30,
                slidesPerView: 3,
            },
            1365.98: {
                spaceBetween: 30,
                slidesPerView: 4,
            }
        }
    })

    thumbsSlider = document.querySelector('.media_slider--thumbs').swiper;

    initSwiperSlider('.media_slider--single', '.media_slider-nav', {
        thumbs: {
            swiper: thumbsSlider,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
        },
        speed: 1500,
    })

    window.addEventListener('load', () => updateDirection(thumbsSlider));
    window.addEventListener('resize', () => updateDirection(thumbsSlider));


    function updateDirection(slider) {
        let width = window.innerWidth;
        if ((width > 767.98 && width < 1169.98) || width > 1365.98) {
            slider.changeDirection('vertical', true)
        } else if (width < 767.97 || (width > 1169.98 && width < 1365.98) ) {
            slider.changeDirection('horizontal', true)
        }
    }
}

export function initProductSlider2() {
    let thumbsSlider;
    initSwiperSlider('.media_slider--thumbs', '.media_slider-nav',{
        freeMode: true,
        loop: true,
        watchSlidesProgress: true,
        spaceBetween: 15,
        slidesPerView: 3,
        speed: 1300,
        breakpoints: {
            567.98: {
                spaceBetween: 30,
            },
        }
    })

    thumbsSlider = document.querySelector('.media_slider--thumbs').swiper;

    initSwiperSlider('.media_slider--single', '.media_slider-nav', {
        thumbs: {
            swiper: thumbsSlider,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
        },
        speed: 1300,
    })
}

export function initListItemSlider() {
    let thumbsSlider;
    const singleSliders = document.querySelectorAll('.media_slider--single');

    for (let i = 0; i < singleSliders.length; i++) {
        initSwiperSlider(`.media_slider--thumbs--${i+1}`, `.media_slider-nav--${i+1}`,{
            freeMode: true,
            loop: true,
            watchSlidesProgress: true,
            spaceBetween: 15,
            slidesPerView: 3,
            speed: 1300,
            breakpoints: {
                567.98: {
                    spaceBetween: 30,
                },
            }
        })

        thumbsSlider = document.querySelector(`.media_slider--thumbs--${i+1}`).swiper;

        initSwiperSlider(`.media_slider--single--${i+1}`, `.media_slider-nav--${i+1}`, {
            thumbs: {
                swiper: thumbsSlider,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
            },
            speed: 1300,
        })
    }

    const thumbSliders = document.querySelectorAll('.media_slider--thumbs');
    thumbSliders.forEach(el => {
        let slider = el.swiper;
        window.addEventListener('load', () => updateDirection(slider));
        window.addEventListener('resize', () => updateDirection(slider));
    })

    function updateDirection(slider) {
        let width = window.innerWidth;
        if (width > 567.98) {
            slider.changeDirection('vertical', true)
        } else {
            slider.changeDirection('horizontal', true)
        }
    }
}