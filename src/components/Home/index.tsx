import React from 'react'
import { Player } from "@livepeer/react";
import Image from 'next/image'

// const PosterImage = () => {
//    return (
//         <Image
//             src={}
//             fill
//             style={}
//             priority
//             placeholder='blur'
//         />
//    )
// }

export default function Home() {
  return (
    <>
    <main>
        <section className="hero section">
            <div className="hero_bg">
                <picture>
                    {/* <source data-srcSet="img/placeholder.jpg" srcSet="img/placeholder.jpg" type="image/webp" /> */}
                    <img className="lazy" data-src="img/index/radiate_warrior.png" src="img/index/radiate_warrior.png" alt="media" />
                </picture>
            </div>
            <div className="container">
                <h1 className="hero_title extra glitch" data-text="what's on-air?">what&apos;s on-air?</h1>
                <div className="hero_media">
                    <picture>
                        {/* <source data-srcSet="img/placeholder.jpg" srcSet="img/placeholder.jpg" type="image/webp" /> */}
                        <img className="lazy" data-src="img/index/radiate_warrior.png" src="img/index/radiate_warrior.png" alt="media" />
                    </picture>
                </div>
            </div>
        </section>
        <div className="about section">
            <div className="container">
                <div className="about_main">
                    <div className="media video">
                    <Player
                            title="Agent 327: Operation Barbershop"
                            playbackId="6d7el73r1y12chxr"
                            showPipButton
                            aspectRatio="16to9"
                            // poster={<PosterImage />}
                        />
                    </div>
                    <div className="description">
                        <span className="avatar">
                            <picture>
                                <source
                                    data-srcset="img/placeholder.jpg"
                                    srcSet="img/placeholder.jpg"
                                    type="image/webp"
                                />
                                <img
                                    className="lazy"
                                    data-src="img/placeholder.jpg"
                                    src="img/placeholder.jpg"
                                    alt="avatar"
                                />
                            </picture>
                        </span>
                        <div className="main">
                            <a className="main_title h4" href="#">Ratings & Releases</a>
                            <ul className="main_meta meta">
                                <li className="meta_item">1 Aug 2021</li>
                                <li className="meta_item">Brands</li>
                                <li className="meta_item">Stream by John D</li>
                            </ul>
                            <p className="main_text text--md">
                                Fusce dapibus ante vitae
                                <span className="emoji">
                                    <span className="emoji_item">
                                        <picture>
                                            <source data-srcset="img/placeholder.jpg" srcSet="img/placeholder.jpg" type="image/webp" />
                                            <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="fire" />
                                        </picture>
                                    </span>
                                    <span className="emoji_item">
                                        <picture>
                                            <source data-srcset="img/placeholder.jpg" srcSet="img/placeholder.jpg" type="image/webp" />
                                            <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="fire" />
                                        </picture>
                                    </span>
                                    <span className="emoji_item">
                                        <picture>
                                            <source data-srcset="img/placeholder.jpg" srcSet="img/placeholder.jpg" type="image/webp" />
                                            <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="fire" />
                                        </picture>
                                    </span>
                                    <span className="emoji_item">
                                        <picture>
                                            <source data-srcset="img/placeholder.jpg" srcSet="img/placeholder.jpg" type="image/webp" />
                                            <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="fire" />
                                        </picture>
                                    </span>
                                    <span className="emoji_item">
                                        <picture>
                                            <source data-srcset="img/placeholder.jpg" srcSet="img/placeholder.jpg" type="image/webp" />
                                            <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="fire" />
                                        </picture>
                                    </span>
                                </span>
                                augue aliquet dignissim. Donec mattis scelerisque turpis, quis pharetra nulla. Vivamus mauris ante,
                                semper quis augue ultricies, lacinia eleifend leo
                            </p>
                        </div>
                    </div>
                </div>
                <div className="about_secondary">
                    <div className="about_secondary-row h1">
                        Strike. <span className="highlight" data-aos="fade-left">Watch.</span> Brand. Challenge.
                    </div>
                    <div className="about_secondary-row h1">
                        Brand.
                        <span className="highlight highlight--purple" data-aos="fade-left" data-aos-delay="50"> Stream.</span> Create.
                        Inspire. Dream.
                    </div>
                    <div className="about_secondary-row h1">
                        Stream. <span className="highlight" data-aos="fade-left" data-aos-delay="100">Create.</span> Stars. Watch. Reinvent.
                    </div>
                </div>
            </div>
        </div>
        <section className="channels section">
            <div className="channels_bg">
                <picture>
                    <source data-srcset="img/gradients/10.webp" srcSet="img/gradients/10.webp" type="image/webp" />
                    <img className="lazy" data-src="img/gradients/10.png" src="img/gradients/10.png" alt="media" />
                </picture>
            </div>
            <div className="container">
                <div className="section_nav">
                    <h3 className="section_nav-title">
                        <i className="icon-bold-cross"></i>

                        Live Channels
                    </h3>
                    <div className="section_nav-controls">
                        <span className="divider"></span>
                    </div>
                </div>
                <div className="channels_content">
                    <ul className="channels_content-nav nav nav-tabs tags" role="tablist">
                        <li className="nav-item h4" role="presentation">
                            <div
                                className="nav-link tags_item white active"
                                id="games-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#games"
                                role="tab"
                                aria-selected="true"
                            >
                                Games
                            </div>
                        </li>
                        <li className="nav-item h4" role="presentation">
                            <div
                                className="nav-link tags_item white"
                                id="matches-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#matches"
                                role="tab"
                                aria-selected="false"
                            >
                                Live Matches
                            </div>
                        </li>
                        <li className="nav-item h4" role="presentation">
                            <div
                                className="nav-link tags_item white"
                                id="chatting-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#chatting"
                                role="tab"
                                aria-selected="false"
                            >
                                Chatting
                            </div>
                        </li>
                        <li className="nav-item h4" role="presentation">
                            <div
                                className="nav-link tags_item white"
                                id="challenges-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#challenges"
                                role="tab"
                                aria-selected="false"
                            >
                                Challenges
                            </div>
                        </li>
                        <li className="nav-item h4" role="presentation">
                            <div
                                className="nav-link tags_item white"
                                id="rates-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#rates"
                                role="tab"
                                aria-selected="false"
                            >
                                Rates
                            </div>
                        </li>
                    </ul>
                    <div className="channels_content-display tab-content" id="videoTabs">
                        <div
                            className="tab-pane fade show active"
                            id="games"
                            role="tabpanel"
                            aria-labelledby="games-tab"
                            data-bs-parent="#videoTabs"
                        >
                            <div className="block">
                                <div className="swiper_1 swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <Player
                                                            title="Agent 327: Operation Barbershop"
                                                            playbackId="6d7el73r1y12chxr"
                                                            showPipButton
                                                            controls={{
                                                                autohide: 3000,
                                                            }}
                                                            theme={{
                                                                borderStyles: { containerBorderStyle: 'hidden' },
                                                                radii: { containerBorderRadius: '10px' },
                                                            }}
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Game Streamers</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Skateboard bmx</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">E-Sport Live Matches</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Mountain Bike Rider</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper_1-nav swiper-nav">
                                    <a className="link swiper-button-prev" href="#"><i className="icon-angle-left"></i></a>
                                    <a className="link swiper-button-next" href="#"><i className="icon-angle-right"></i></a>
                                </div>
                            </div>
                            <div className="block">
                                <div className="swiper_2 swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Travel Vlogs</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">ratings & Releases</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Music & Podcasts</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Game Chatters</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper_2-nav swiper-nav">
                                    <a className="link swiper-button-prev" href="#"><i className="icon-angle-left"></i></a>
                                    <a className="link swiper-button-next" href="#"><i className="icon-angle-right"></i></a>
                                </div>
                            </div>
                            <div className="block">
                                <div className="swiper_3 swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Comic-Con Set</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Podcasts</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Replays & Highlights</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Lifestyle Chatters</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper_3-nav swiper-nav">
                                    <a className="link swiper-button-prev" href="#"><i className="icon-angle-left"></i></a>
                                    <a className="link swiper-button-next" href="#"><i className="icon-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="matches"
                            role="tabpanel"
                            aria-labelledby="matches-tab"
                            data-bs-parent="#videoTabs"
                        >
                            <div className="block">
                                <div className="swiper_4 swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Game Streamers</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Skateboard bmx</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">E-Sport Live Matches</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Mountain Bike Rider</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper_4-nav swiper-nav">
                                    <a className="link swiper-button-prev" href="#"><i className="icon-angle-left"></i></a>
                                    <a className="link swiper-button-next" href="#"><i className="icon-angle-right"></i></a>
                                </div>
                            </div>
                            <div className="block">
                                <div className="swiper_5 swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Travel Vlogs</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">ratings & Releases</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Music & Podcasts</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Game Chatters</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper_5-nav swiper-nav">
                                    <a className="link swiper-button-prev" href="#"><i className="icon-angle-left"></i></a>
                                    <a className="link swiper-button-next" href="#"><i className="icon-angle-right"></i></a>
                                </div>
                            </div>
                            <div className="block">
                                <div className="swiper_6 swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Comic-Con Set</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Podcasts</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Replays & Highlights</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Lifestyle Chatters</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper_6-nav swiper-nav">
                                    <a className="link swiper-button-prev" href="#"><i className="icon-angle-left"></i></a>
                                    <a className="link swiper-button-next" href="#"><i className="icon-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="chatting"
                            role="tabpanel"
                            aria-labelledby="chatting-tab"
                            data-bs-parent="#videoTabs"
                        >
                            <div className="block">
                                <div className="swiper_7 swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Game Streamers</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Skateboard bmx</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">E-Sport Live Matches</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Mountain Bike Rider</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper_7-nav swiper-nav">
                                    <a className="link swiper-button-prev" href="#"><i className="icon-angle-left"></i></a>
                                    <a className="link swiper-button-next" href="#"><i className="icon-angle-right"></i></a>
                                </div>
                            </div>
                            <div className="block">
                                <div className="swiper_8 swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Travel Vlogs</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">ratings & Releases</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Music & Podcasts</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Game Chatters</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper_8-nav swiper-nav">
                                    <a className="link swiper-button-prev" href="#"><i className="icon-angle-left"></i></a>
                                    <a className="link swiper-button-next" href="#"><i className="icon-angle-right"></i></a>
                                </div>
                            </div>
                            <div className="block">
                                <div className="swiper_9 swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Comic-Con Set</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Podcasts</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Replays & Highlights</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Lifestyle Chatters</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper_9-nav swiper-nav">
                                    <a className="link swiper-button-prev" href="#"><i className="icon-angle-left"></i></a>
                                    <a className="link swiper-button-next" href="#"><i className="icon-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="challenges"
                            role="tabpanel"
                            aria-labelledby="challenges-tab"
                            data-bs-parent="#videoTabs"
                        >
                            <div className="block">
                                <div className="swiper_10 swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Game Streamers</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Skateboard bmx</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">E-Sport Live Matches</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Mountain Bike Rider</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper_10-nav swiper-nav">
                                    <a className="link swiper-button-prev" href="#"><i className="icon-angle-left"></i></a>
                                    <a className="link swiper-button-next" href="#"><i className="icon-angle-right"></i></a>
                                </div>
                            </div>
                            <div className="block">
                                <div className="swiper_11 swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Travel Vlogs</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">ratings & Releases</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Music & Podcasts</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Game Chatters</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper_11-nav swiper-nav">
                                    <a className="link swiper-button-prev" href="#"><i className="icon-angle-left"></i></a>
                                    <a className="link swiper-button-next" href="#"><i className="icon-angle-right"></i></a>
                                </div>
                            </div>
                            <div className="block">
                                <div className="swiper_12 swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Comic-Con Set</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Podcasts</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Replays & Highlights</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Lifestyle Chatters</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper_12-nav swiper-nav">
                                    <a className="link swiper-button-prev" href="#"><i className="icon-angle-left"></i></a>
                                    <a className="link swiper-button-next" href="#"><i className="icon-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="rates" role="tabpanel" aria-labelledby="rates-tab" data-bs-parent="#videoTabs">
                            <div className="block">
                                <div className="swiper_13 swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Game Streamers</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Skateboard bmx</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">E-Sport Live Matches</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Mountain Bike Rider</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper_13-nav swiper-nav">
                                    <a className="link swiper-button-prev" href="#"><i className="icon-angle-left"></i></a>
                                    <a className="link swiper-button-next" href="#"><i className="icon-angle-right"></i></a>
                                </div>
                            </div>
                            <div className="block">
                                <div className="swiper_14 swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Travel Vlogs</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">ratings & Releases</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Music & Podcasts</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Game Chatters</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper_14-nav swiper-nav">
                                    <a className="link swiper-button-prev" href="#"><i className="icon-angle-left"></i></a>
                                    <a className="link swiper-button-next" href="#"><i className="icon-angle-right"></i></a>
                                </div>
                            </div>
                            <div className="block">
                                <div className="swiper_15 swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Comic-Con Set</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Podcasts</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Replays & Highlights</a>
                                                    <p className="text">
                                                        Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="media">
                                                <a className="link eyeTrigger" href="#">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="cover"
                                                        />
                                                    </picture>
                                                </a>
                                            </div>
                                            <div className="main">
                                                <span className="main_avatar">
                                                    <picture>
                                                        <source
                                                            data-srcset="img/placeholder.jpg"
                                                            srcSet="img/placeholder.jpg"
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            className="lazy"
                                                            data-src="img/placeholder.jpg"
                                                            src="img/placeholder.jpg"
                                                            alt="avatar"
                                                        />
                                                    </picture>
                                                </span>
                                                <div className="main_info">
                                                    <a className="title h4" href="#">Lifestyle Chatters</a>
                                                    <p className="text">
                                                        Interdum malesuada fames ac ante ipsum primis in faucibus. Nam massa
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper_15-nav swiper-nav">
                                    <a className="link swiper-button-prev" href="#"><i className="icon-angle-left"></i></a>
                                    <a className="link swiper-button-next" href="#"><i className="icon-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="join section">
            <div className="container">
                <div className="join_media" data-aos="fade-right">
                    <video autoPlay={true} loop muted playsInline={true}>
                        <source src="video/vr.ogv" type='video/ogv; codecs="theora, vorbis"' />
                        <source src="video/vr.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                        <source src="video/vr.webm" type='video/webm; codecs="vp8, vorbis"' />
                    </video>
                </div>
                <div className="join_main">
                    <div className="join_main-header">
                        <h2 className="join_main-header_title h1" data-aos="fade-left">Join</h2>
                        <span className="join_main-header_emoji" data-aos="fade-left">
                            <span className="emoji emoji_item">
                                <picture>
                                    <source data-srcset="img/placeholder.jpg" srcSet="img/placeholder.jpg" type="image/webp" />
                                    <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="media" />
                                </picture>
                            </span>
                            <span className="emoji emoji_item">
                                <picture>
                                    <source data-srcset="img/placeholder.jpg" srcSet="img/placeholder.jpg" type="image/webp" />
                                    <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="media" />
                                </picture>
                            </span>
                            <span className="emoji emoji_item">
                                <picture>
                                    <source data-srcset="img/placeholder.jpg" srcSet="img/placeholder.jpg" type="image/webp" />
                                    <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="media" />
                                </picture>
                            </span>
                        </span>
                        <h2 className="join_main-header_subtitle" data-aos="fade-left" data-aos-delay="50">Our community</h2>
                    </div>
                    <p className="join_main-text text--md" data-aos="fade-left" data-aos-delay="100">
                        Maecenas blandit ante elit, eu convallis ligula condimentum ut. Orci varius natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Pellentesque ante tortor, vulputate sit amet arcu
                    </p>
                    <div className="wrapper" data-aos="fade-left" data-aos-delay="150">
                        <a className="btn btn--accent btn--hover-black" href="contacts.html">Want Become a Streamer</a>
                    </div>
                </div>
            </div>
        </section>
        <section className="insights section">
            <div className="container">
                <div className="section_nav">
                    <h3 className="section_nav-title">
                        <i className="icon-sharp-star"></i>

                        Insights & News
                    </h3>
                    <div className="section_nav-controls">
                        <span className="divider"></span>

                        <div className="insights_nav section_nav-controls_btns">
                            <a className="link swiper-button-prev" href="#"><i className="icon-angle-left"></i></a>
                            <a className="link swiper-button-next" href="#"><i className="icon-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="insights_slider swiper">
                    <div className="swiper-wrapper">
                        <div className="box_posts-item swiper-slide">
                            <div className="media">
                                <picture>
                                    <source data-srcset="img/placeholder.jpg" srcSet="img/placeholder.jpg" type="image/webp" />
                                    <img
                                        className="lazy"
                                        data-src="img/placeholder.jpg"
                                        src="img/placeholder.jpg"
                                        alt="Young All-Girl Punk Band The Linda Mindas Sign With Epitaph Records"
                                    />
                                </picture>
                            </div>
                            <div className="main">
                                <a className="main_title h4" href="post-sidebar.html"
                                >Young All-Girl Punk Band The Linda Mindas Sign With Epitaph Records</a
                                >
                                <ul className="main_meta meta">
                                    <li className="meta_item">28 Aug 2021</li>
                                    <li className="meta_item">Gaming</li>
                                    <li className="meta_item">Post by John Doe</li>
                                </ul>
                            </div>
                        </div>
                        <div className="box_posts-item swiper-slide">
                            <div className="media">
                                <picture>
                                    <source data-srcset="img/placeholder.jpg" srcSet="img/placeholder.jpg" type="image/webp" />
                                    <img
                                        className="lazy"
                                        data-src="img/placeholder.jpg"
                                        src="img/placeholder.jpg"
                                        alt="Michelin-Starred Chef Joins Shake Shack Pizza For a Limited-Edition"
                                    />
                                </picture>
                            </div>
                            <div className="main">
                                <a className="main_title h4" href="post-sidebar.html"
                                >Michelin-Starred Chef Joins Shake Shack Pizza For a Limited-Edition</a
                                >
                                <ul className="main_meta meta">
                                    <li className="meta_item">28 Aug 2021</li>
                                    <li className="meta_item">Gaming</li>
                                    <li className="meta_item">Post by John Doe</li>
                                </ul>
                            </div>
                        </div>
                        <div className="box_posts-item swiper-slide">
                            <div className="media">
                                <picture>
                                    <source data-srcset="img/placeholder.jpg" srcSet="img/placeholder.jpg" type="image/webp" />
                                    <img
                                        className="lazy"
                                        data-src="img/placeholder.jpg"
                                        src="img/placeholder.jpg"
                                        alt="New 'Paranormal Activity' Film and Documentary to Release on Studio"
                                    />
                                </picture>
                            </div>
                            <div className="main">
                                <a className="main_title h4" href="post-sidebar.html"
                                >New &apos;Paranormal Activity&apos;S Film and Documentary to Release on Studio</a
                                >
                                <ul className="main_meta meta">
                                    <li className="meta_item">28 Aug 2021</li>
                                    <li className="meta_item">Gaming</li>
                                    <li className="meta_item">Post by John Doe</li>
                                </ul>
                            </div>
                        </div>
                        <div className="box_posts-item swiper-slide">
                            <div className="media">
                                <picture>
                                    <source data-srcset="img/placeholder.jpg" srcSet="img/placeholder.jpg" type="image/webp" />
                                    <img
                                        className="lazy"
                                        data-src="img/placeholder.jpg"
                                        src="img/placeholder.jpg"
                                        alt="Preview Graphically-Charged Winter Fall 2023 Collection"
                                    />
                                </picture>
                            </div>
                            <div className="main">
                                <a className="main_title h4" href="post-sidebar.html"
                                >Preview Graphically-Charged Winter Fall 2023 Collection</a
                                >
                                <ul className="main_meta meta">
                                    <li className="meta_item">28 Aug 2021</li>
                                    <li className="meta_item">Gaming</li>
                                    <li className="meta_item">Post by John Doe</li>
                                </ul>
                            </div>
                        </div>
                        <div className="box_posts-item swiper-slide">
                            <div className="media">
                                <picture>
                                    <source data-srcset="img/placeholder.jpg" srcSet="img/placeholder.jpg" type="image/webp" />
                                    <img
                                        className="lazy"
                                        data-src="img/placeholder.jpg"
                                        src="img/placeholder.jpg"
                                        alt="First-Time ‘Funfoot’  Streamer Discovers Glitch for Speedrunners"
                                    />
                                </picture>
                            </div>
                            <div className="main">
                                <a className="main_title h4" href="post-sidebar.html"
                                >First-Time ‘Funfoot’ Streamer Discovers Glitch for Speedrunners</a
                                >
                                <ul className="main_meta meta">
                                    <li className="meta_item">28 Aug 2021</li>
                                    <li className="meta_item">Gaming</li>
                                    <li className="meta_item">Post by John Doe</li>
                                </ul>
                            </div>
                        </div>
                        <div className="box_posts-item swiper-slide">
                            <div className="media">
                                <picture>
                                    <source data-srcset="img/placeholder.jpg" srcSet="img/placeholder.jpg" type="image/webp" />
                                    <img
                                        className="lazy"
                                        data-src="img/placeholder.jpg"
                                        src="img/placeholder.jpg"
                                        alt="For his latest release, Harrington has revisited the folks"
                                    />
                                </picture>
                            </div>
                            <div className="main">
                                <a className="main_title h4" href="post-sidebar.html"
                                >For his latest release, Harrington has revisited the folks</a
                                >
                                <ul className="main_meta meta">
                                    <li className="meta_item">28 Aug 2021</li>
                                    <li className="meta_item">Gaming</li>
                                    <li className="meta_item">Post by John Doe</li>
                                </ul>
                            </div>
                        </div>
                        <div className="box_posts-item swiper-slide">
                            <div className="media">
                                <picture>
                                    <source data-srcset="img/placeholder.jpg" srcSet="img/placeholder.jpg" type="image/webp" />
                                    <img
                                        className="lazy"
                                        data-src="img/placeholder.jpg"
                                        src="img/placeholder.jpg"
                                        alt="'Attack on Titan' Sets Guiness World Record for Largest Comic Book"
                                    />
                                </picture>
                            </div>
                            <div className="main">
                                <a className="main_title h4" href="post-sidebar.html"
                                >&apos;Attack on Titan&apos; Sets Guiness World Record for Largest Comic Book</a
                                >
                                <ul className="main_meta meta">
                                    <li className="meta_item">28 Aug 2021</li>
                                    <li className="meta_item">Gaming</li>
                                    <li className="meta_item">Post by John Doe</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <div className="ticker yellow">
        <div className="d-none">
            <span className="ticker-item">new Ideas</span>
            <span className="ticker-item">Join us</span>
            <span className="ticker-item">UP Creators</span>
            <span className="ticker-item">Become trendy</span>
            <span className="ticker-item">Create a new Brand</span>
            <span className="ticker-item">new Ideas</span>
            <span className="ticker-item">Join us</span>
            <span className="ticker-item">UP Creators</span>
            <span className="ticker-item">Become trendy</span>
            <span className="ticker-item">Create a new Brand</span>
        </div>
    </div>
</>

  )
}



       