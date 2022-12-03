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

import YouTubePlayer from 'youtube-player';

export default function setYTFrame() {
    const triggerElems = document.querySelectorAll('.videoTrigger');
    if (triggerElems) {
        triggerElems.forEach(el => {

            // create player markup
            const popup = document.createElement('div');
            popup.classList.add('videoPopup');
            const container = document.createElement('div');
            container.classList.add('container');
            popup.appendChild(container);
            const frame = document.createElement('div');
            frame.classList.add('videoPopup_frame');
            container.appendChild(frame);
            const icon = document.createElement('i');
            icon.classList.add('icon-close', 'videoPopup_frame-close');
            frame.appendChild(icon);
            const videoContainer = document.createElement('div');
            videoContainer.classList.add('videoPopup_frame-video');
            frame.appendChild(videoContainer);
            document.body.appendChild(popup);

            // init player
            let videoId = el.dataset.video;
            let player;
            player = YouTubePlayer(videoContainer);
            player.loadVideoById(videoId);
            player.stopVideo();

            document.body.addEventListener('click', (e) => {
                if (e.target !== null) {
                    if (popup.classList.contains('visible')) {
                        if (e.target !== videoContainer) {
                            popup.classList.remove('visible', 'fadeIn');
                            popup.classList.add('fadeOut');
                            player.stopVideo();
                        }
                    } else if (e.target === el || (e.target.closest('a') !== null && e.target.closest('a').classList.contains('videoTrigger'))) {
                        e.preventDefault();
                        popup.classList.remove('fadeOut');
                        popup.classList.add('visible', 'fadeIn');
                    }
                }
            })
        })
    }
}