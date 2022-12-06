import styles from "./about.module.css";
export default function About() {
    return (
        <>
            <main>
                <section className="hero">
                    <div className="container">
                        <div className="hero_main">
                            <div className="hero_main-icon rotate shape">
                                <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M42.993 69L34.5 51.2698L26.007 69L16.1104 64.9008L22.6419 46.3582L4.09932 52.8899L0 42.993L17.7302 34.5L0 26.007L4.09932 16.1103L22.6419 22.6418L16.1104 4.09921L26.007 0L34.5 17.7302L42.993 0L52.8899 4.09921L46.3582 22.6418L64.9008 16.1103L69 26.007L51.2698 34.5L69 42.993L64.9008 52.8899L46.3582 46.3582L52.8899 64.9008L42.993 69Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <h1 className="hero_main-title outlined outlined--black" data-aos="fade-left">we do</h1>
                            <h2 className="hero_main-subtitle" data-aos="fade-left" data-aos-delay="50">Carefully selected and engaging content</h2>
                            <p className="hero_main-text text--md" data-aos="fade-left" data-aos-delay="100">
                                Praesent eu erat vitae enim tempor interdum quis eget magna. Interdum et malesuada fames ac ante ipsum primis in
                                faucibus. Nam massa ante, placerat sit amet augue id, ultrices faucibus
                            </p>
                        </div>
                        <div className="hero_media">
                            <picture>
                                <source data-srcSet="img/placeholder.jpg" srcSet="img/placeholder.jpg" type="image/webp" />
                                <img
                                    className="lazy"
                                    data-src="img/placeholder.jpg"
                                    src="img/placeholder.jpg"
                                    alt="Carefully selected and engaging content"
                                />
                            </picture>

                            <a className="circular eyeTrigger videoTrigger" href="#" data-video="SfMT4Agg8Xw">
                                <i className="icon-play"></i>
                                <span className="circular_text rotate slower" data-text="Watch Showreel . Watch Showreel"></span>
                            </a>
                        </div>
                    </div>
                </section>
                <div className="services section">
                    <div className="container">
                        <ul className="services_list">
                            <li className="services_list-item">
                                <div className="cover">
                                    <div className="cover_shape">
                                        <img src="svg/shapes/28.svg" alt="media" />
                                    </div>
                                    <h4 className="cover_title">Influencer Marketing <span className="linebreak">SMM</span></h4>
                                </div>
                                <div className="content">
                                    <div className="content_bg">
                                        <picture>
                                            <source
                                                data-srcSet="img/placeholder.jpg"
                                                srcSet="img/placeholder.jpg"
                                                type="image/webp"
                                            />
                                            <img
                                                className="lazy"
                                                data-src="img/placeholder.jpg"
                                                src="img/placeholder.jpg"
                                                alt="Influencer Marketing SMM"
                                            />
                                        </picture>
                                        <span className="content_bg-overlay"></span>
                                    </div>
                                    <div className="content_main">
                                        <h4 className="content_main-title">Influencer Marketing <span className="linebreak">SMM</span></h4>
                                        <p className="content_main-text">
                                            Curabitur non erat purus. Cras eu lorem et magna facilisis faucibus vel tempor purus. Donec eu lorem
                                            rutrum, condimentum sem feugiat, egestas
                                        </p>
                                        <a className="content_main-btn btn btn--accent btn--arrow" href="#"
                                        >Read More <i className="icon-arrow-right icon"></i
                                        ></a>
                                    </div>
                                </div>
                            </li>
                            <li className="services_list-item">
                                <div className="cover">
                                    <div className="cover_shape">
                                        <img src="svg/shapes/24.svg" alt="media" />
                                    </div>
                                    <h4 className="cover_title">Visual Identity Photo and Video</h4>
                                </div>
                                <div className="content">
                                    <div className="content_bg">
                                        <picture>
                                            <source
                                                data-srcSet="img/placeholder.jpg"
                                                srcSet="img/placeholder.jpg"
                                                type="image/webp"
                                            />
                                            <img
                                                className="lazy"
                                                data-src="img/placeholder.jpg"
                                                src="img/placeholder.jpg"
                                                alt="Visual Identity Photo and Video"
                                            />
                                        </picture>
                                        <span className="content_bg-overlay"></span>
                                    </div>
                                    <div className="content_main">
                                        <h4 className="content_main-title">Visual Identity Photo and Video</h4>
                                        <p className="content_main-text">
                                            Curabitur non erat purus. Cras eu lorem et magna facilisis faucibus vel tempor purus. Donec eu lorem
                                            rutrum, condimentum sem feugiat, egestas
                                        </p>
                                        <a className="content_main-btn btn btn--accent btn--arrow" href="#"
                                        >Read More <i className="icon-arrow-right icon"></i
                                        ></a>
                                    </div>
                                </div>
                            </li>
                            <li className="services_list-item">
                                <div className="cover">
                                    <div className="cover_shape">
                                        <img src="svg/shapes/13.svg" alt="media" />
                                    </div>
                                    <h4 className="cover_title">Engaging Product Shots and Campaigns</h4>
                                </div>
                                <div className="content">
                                    <div className="content_bg">
                                        <picture>
                                            <source
                                                data-srcSet="img/placeholder.jpg"
                                                srcSet="img/placeholder.jpg"
                                                type="image/webp"
                                            />
                                            <img
                                                className="lazy"
                                                data-src="img/placeholder.jpg"
                                                src="img/placeholder.jpg"
                                                alt="Engaging Product Shots and Campaigns"
                                            />
                                        </picture>
                                        <span className="content_bg-overlay"></span>
                                    </div>
                                    <div className="content_main">
                                        <h4 className="content_main-title">Engaging Product Shots and Campaigns</h4>
                                        <p className="content_main-text">
                                            Curabitur non erat purus. Cras eu lorem et magna facilisis faucibus vel tempor purus. Donec eu lorem
                                            rutrum, condimentum sem feugiat, egestas
                                        </p>
                                        <a className="content_main-btn btn btn--accent btn--arrow" href="#"
                                        >Read More <i className="icon-arrow-right icon"></i
                                        ></a>
                                    </div>
                                </div>
                            </li>
                            <li className="services_list-item">
                                <div className="cover">
                                    <div className="cover_shape">
                                        <img src="svg/shapes/03.svg" alt="media" />
                                    </div>
                                    <h4 className="cover_title">Copywriting and optimization</h4>
                                </div>
                                <div className="content">
                                    <div className="content_bg">
                                        <picture>
                                            <source
                                                data-srcSet="img/placeholder.jpg"
                                                srcSet="img/placeholder.jpg"
                                                type="image/webp"
                                            />
                                            <img
                                                className="lazy"
                                                data-src="img/placeholder.jpg"
                                                src="img/placeholder.jpg"
                                                alt="Copywriting and optimization"
                                            />
                                        </picture>
                                        <span className="content_bg-overlay"></span>
                                    </div>
                                    <div className="content_main">
                                        <h4 className="content_main-title">Copywriting and optimization</h4>
                                        <p className="content_main-text">
                                            Curabitur non erat purus. Cras eu lorem et magna facilisis faucibus vel tempor purus. Donec eu lorem
                                            rutrum, condimentum sem feugiat, egestas
                                        </p>
                                        <a className="content_main-btn btn btn--accent btn--arrow" href="#"
                                        >Read More <i className="icon-arrow-right icon"></i
                                        ></a>
                                    </div>
                                </div>
                            </li>
                            <li className="services_list-item">
                                <div className="cover">
                                    <div className="cover_shape">
                                        <img src="svg/shapes/04.svg" alt="media" />
                                    </div>
                                    <h4 className="cover_title">Viral Campaigns and Live Events</h4>
                                </div>
                                <div className="content">
                                    <div className="content_bg">
                                        <picture>
                                            <source
                                                data-srcSet="img/placeholder.jpg"
                                                srcSet="img/placeholder.jpg"
                                                type="image/webp"
                                            />
                                            <img
                                                className="lazy"
                                                data-src="img/placeholder.jpg"
                                                src="img/placeholder.jpg"
                                                alt="Viral Campaigns and Live Events"
                                            />
                                        </picture>
                                        <span className="content_bg-overlay"></span>
                                    </div>
                                    <div className="content_main">
                                        <h4 className="content_main-title">Viral Campaigns and Live Events</h4>
                                        <p className="content_main-text">
                                            Curabitur non erat purus. Cras eu lorem et magna facilisis faucibus vel tempor purus. Donec eu lorem
                                            rutrum, condimentum sem feugiat, egestas
                                        </p>
                                        <a className="content_main-btn btn btn--accent btn--arrow" href="#"
                                        >Read More <i className="icon-arrow-right icon"></i
                                        ></a>
                                    </div>
                                </div>
                            </li>
                            <li className="services_list-item">
                                <div className="cover">
                                    <div className="cover_shape">
                                        <img src="svg/shapes/07.svg" alt="media" />
                                    </div>
                                    <h4 className="cover_title">Content Strategy and scheduling</h4>
                                </div>
                                <div className="content">
                                    <div className="content_bg">
                                        <picture>
                                            <source
                                                data-srcSet="img/placeholder.jpg"
                                                srcSet="img/placeholder.jpg"
                                                type="image/webp"
                                            />
                                            <img
                                                className="lazy"
                                                data-src="img/placeholder.jpg"
                                                src="img/placeholder.jpg"
                                                alt="Content Strategy and scheduling"
                                            />
                                        </picture>
                                        <span className="content_bg-overlay"></span>
                                    </div>
                                    <div className="content_main">
                                        <h4 className="content_main-title">Content Strategy and scheduling</h4>
                                        <p className="content_main-text">
                                            Curabitur non erat purus. Cras eu lorem et magna facilisis faucibus vel tempor purus. Donec eu lorem
                                            rutrum, condimentum sem feugiat, egestas
                                        </p>
                                        <a className="content_main-btn btn btn--accent btn--arrow" href="#"
                                        >Read More <i className="icon-arrow-right icon"></i
                                        ></a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <section className="cases section @@class">
                    <div className="container">
                        <div className="section_nav">
                            <h3 className="section_nav-title">
                                <i className="icon-bold-cross"></i>
                                Featured cases
                            </h3>
                            <div className="section_nav-controls">
                                <span className="divider"></span>
                                <div className="section_nav-controls_btns">
                                    <button className="link splide__arrow--prev" type="button" aria-label="Previous slide">
                                        <i className="icon-angle-left"></i>
                                    </button>
                                    <button className="link splide__arrow--next" type="button" aria-label="Next slide">
                                        <i className="icon-angle-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="cases_slider splide">
                            <div className="splide__track">
                                <div className="splide__list">
                                    <div className="cases_slider-slide splide__slide">
                                        <div className="overlay">
                                            <div className="hotspot" tab-index="0">
                                                <span className="hotspot_trigger"></span>
                                                <div className="hotspot_content">
                                                    <a className="link" href="product.html">
                                                        <span className="preview">
                                                            <picture>
                                                                <source
                                                                    data-srcSet="img/placeholder.jpg"
                                                                    srcSet="img/placeholder.jpg"
                                                                    type="image/webp"
                                                                />
                                                                <img
                                                                    className="lazy"
                                                                    data-src="img/placeholder.jpg"
                                                                    src="img/placeholder.jpg"
                                                                    alt="Case #1 Bikini"
                                                                />
                                                            </picture>
                                                        </span>
                                                        <span className="info">
                                                            <span className="info_title">D&G Bikini</span>
                                                            <span className="info_price">$599</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <picture>
                                                <source data-srcSet="img/placeholder.jpg" srcSet="img/placeholder.jpg" type="image/webp" />
                                                <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="Case #1" />
                                            </picture>
                                        </div>
                                        <div className="main">
                                            <a className="main_title h6" href="case.html">[ Collaboration with Nikki Sports ]</a>
                                            <a className="link link--underline" href="#">@looksyinstagirl</a>
                                        </div>
                                    </div>
                                    <div className="cases_slider-slide splide__slide">
                                        <div className="overlay">
                                            <div className="hotspot" tab-index="0">
                                                <span className="hotspot_trigger"></span>
                                                <div className="hotspot_content">
                                                    <a className="link" href="product.html">
                                                        <span className="preview">
                                                            <picture>
                                                                <source
                                                                    data-srcSet="img/placeholder.jpg"
                                                                    srcSet="img/placeholder.jpg"
                                                                    type="image/webp"
                                                                />
                                                                <img
                                                                    className="lazy"
                                                                    data-src="img/placeholder.jpg"
                                                                    src="img/placeholder.jpg"
                                                                    alt="Case #2 T-Shirt"
                                                                />
                                                            </picture>
                                                        </span>
                                                        <span className="info">
                                                            <span className="info_title">T-shirt</span>
                                                            <span className="info_price">$19</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="hotspot" tab-index="0">
                                                <span className="hotspot_trigger"></span>
                                                <div className="hotspot_content">
                                                    <a className="link" href="product.html">
                                                        <span className="preview">
                                                            <picture>
                                                                <source
                                                                    data-srcSet="img/placeholder.jpg"
                                                                    srcSet="img/placeholder.jpg"
                                                                    type="image/webp"
                                                                />
                                                                <img
                                                                    className="lazy"
                                                                    data-src="img/placeholder.jpg"
                                                                    src="img/placeholder.jpg"
                                                                    alt="Case #2 Tracks"
                                                                />
                                                            </picture>
                                                        </span>
                                                        <span className="info">
                                                            <span className="info_title">Tracks</span>
                                                            <span className="info_price">$159</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="hotspot" tab-index="0">
                                                <span className="hotspot_trigger"></span>
                                                <div className="hotspot_content">
                                                    <a className="link" href="product.html">
                                                        <span className="preview">
                                                            <picture>
                                                                <source
                                                                    data-srcSet="img/placeholder.jpg"
                                                                    srcSet="img/placeholder.jpg"
                                                                    type="image/webp"
                                                                />
                                                                <img
                                                                    className="lazy"
                                                                    data-src="img/placeholder.jpg"
                                                                    src="img/placeholder.jpg"
                                                                    alt="Case #2 Sweater"
                                                                />
                                                            </picture>
                                                        </span>
                                                        <span className="info">
                                                            <span className="info_title">Yellow sweater</span>
                                                            <span className="info_price">$230</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <a className="link" href="product.html">
                                                <picture>
                                                    <source
                                                        data-srcSet="img/placeholder.jpg"
                                                        srcSet="img/placeholder.jpg"
                                                        type="image/webp"
                                                    />
                                                    <img
                                                        className="lazy"
                                                        data-src="img/placeholder.jpg"
                                                        src="img/placeholder.jpg"
                                                        alt="Case #2"
                                                    />
                                                </picture>
                                            </a>
                                        </div>
                                        <div className="main">
                                            <h6 className="main_title">New Collection with YG-34</h6>
                                            <a className="link link--underline" href="#">#shopnow</a>
                                        </div>
                                    </div>
                                    <div className="cases_slider-slide splide__slide">
                                        <div className="media">
                                            <a className="link" href="product.html">
                                                <picture>
                                                    <source
                                                        data-srcSet="img/placeholder.jpg"
                                                        srcSet="img/placeholder.jpg"
                                                        type="image/webp"
                                                    />
                                                    <img
                                                        className="lazy"
                                                        data-src="img/placeholder.jpg"
                                                        src="img/placeholder.jpg"
                                                        alt="Case #3"
                                                    />
                                                </picture>
                                            </a>
                                        </div>
                                        <div className="main">
                                            <h6 className="main_title">Presentation from Off Black Limited</h6>
                                            <a className="link link--underline" href="#">#newcollection</a>
                                        </div>
                                    </div>
                                    <div className="cases_slider-slide splide__slide">
                                        <div className="overlay">
                                            <div className="hotspot" tab-index="0">
                                                <span className="hotspot_trigger"></span>
                                                <div className="hotspot_content">
                                                    <a className="link" href="product.html">
                                                        <span className="preview">
                                                            <picture>
                                                                <source
                                                                    data-srcSet="img/placeholder.jpg"
                                                                    srcSet="img/placeholder.jpg"
                                                                    type="image/webp"
                                                                />
                                                                <img
                                                                    className="lazy"
                                                                    data-src="img/placeholder.jpg"
                                                                    src="img/placeholder.jpg"
                                                                    alt="Case #4 Bottle"
                                                                />
                                                            </picture>
                                                        </span>
                                                        <span className="info">
                                                            <span className="info_title">Bottle</span>
                                                            <span className="info_price">$12</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <a className="link" href="product.html">
                                                <picture>
                                                    <source
                                                        data-srcSet="img/placeholder.jpg"
                                                        srcSet="img/placeholder.jpg"
                                                        type="image/webp"
                                                    />
                                                    <img
                                                        className="lazy"
                                                        data-src="img/placeholder.jpg"
                                                        src="img/placeholder.jpg"
                                                        alt="Case #4"
                                                    />
                                                </picture>
                                            </a>
                                        </div>
                                        <div className="main">
                                            <h6 className="main_title">New Branding Campaign</h6>
                                            <a className="link link--underline" href="#">@looksyinstagirl</a>
                                        </div>
                                    </div>
                                    <div className="cases_slider-slide splide__slide">
                                        <div className="media">
                                            <a className="link" href="product.html">
                                                <picture>
                                                    <source
                                                        data-srcSet="img/placeholder.jpg"
                                                        srcSet="img/placeholder.jpg"
                                                        type="image/webp"
                                                    />
                                                    <img
                                                        className="lazy"
                                                        data-src="img/placeholder.jpg"
                                                        src="img/placeholder.jpg"
                                                        alt="Case #5"
                                                    />
                                                </picture>
                                            </a>
                                        </div>
                                        <div className="main">
                                            <h6 className="main_title">Creating a street style icon with Upcreators Fashion Brand</h6>
                                        </div>
                                    </div>
                                    <div className="cases_slider-slide splide__slide">
                                        <div className="overlay">
                                            <div className="hotspot" tab-index="0">
                                                <span className="hotspot_trigger"></span>
                                                <div className="hotspot_content">
                                                    <a className="link" href="product.html">
                                                        <span className="preview">
                                                            <picture>
                                                                <source
                                                                    data-srcSet="img/placeholder.jpg"
                                                                    srcSet="img/placeholder.jpg"
                                                                    type="image/webp"
                                                                />
                                                                <img
                                                                    className="lazy"
                                                                    data-src="img/placeholder.jpg"
                                                                    src="img/placeholder.jpg"
                                                                    alt="Case #6 Puffer"
                                                                />
                                                            </picture>
                                                        </span>
                                                        <span className="info">
                                                            <span className="info_title">Puffer</span>
                                                            <span className="info_price">$999</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <a className="link" href="product.html">
                                                <picture>
                                                    <source
                                                        data-srcSet="img/placeholder.jpg"
                                                        srcSet="img/placeholder.jpg"
                                                        type="image/webp"
                                                    />
                                                    <img
                                                        className="lazy"
                                                        data-src="img/placeholder.jpg"
                                                        src="img/placeholder.jpg"
                                                        alt="Case #6"
                                                    />
                                                </picture>
                                            </a>
                                        </div>
                                        <div className="main">
                                            <h6 className="main_title">Viral Challenge</h6>
                                            <a className="link link--underline" href="#">#getorangeback</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="banner section">
                    <div className="container">
                        <div className="banner_main">
                            <div className="banner_main-icon rotate shape">
                                <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M42.993 69L34.5 51.2698L26.007 69L16.1104 64.9008L22.6419 46.3582L4.09932 52.8899L0 42.993L17.7302 34.5L0 26.007L4.09932 16.1103L22.6419 22.6418L16.1104 4.09921L26.007 0L34.5 17.7302L42.993 0L52.8899 4.09921L46.3582 22.6418L64.9008 16.1103L69 26.007L51.2698 34.5L69 42.993L64.9008 52.8899L46.3582 46.3582L52.8899 64.9008L42.993 69Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <h2 className="banner_main-title h1">Let’s Get <span className="linebreak">Started ?</span></h2>
                            <form className="banner_main-form contact-form" action="form.php" method="post" data-type="contacts">
                                <input
                                    className="field required"
                                    type="text"
                                    id="contactsName"
                                    name="contactsName"
                                    placeholder="Your Name or Brand"
                                />
                                <input
                                    className="field required"
                                    type="text"
                                    data-type="email"
                                    id="contactsEmail"
                                    name="contactsEmail"
                                    placeholder="Your Contact E-mail"
                                />
                                <textarea
                                    className="field required"
                                    id="contactsMessage"
                                    name="contactsMessage"
                                    placeholder="Your Question"
                                ></textarea>
                                <button className="btn btn--accent btn--hover-black" type="submit">Send a Question</button>
                            </form>
                        </div>
                        <div className="banner_media">
                            <picture>
                                <source data-srcSet="img/placeholder.jpg" srcSet="img/placeholder.jpg" type="image/webp" />
                                <img
                                    className="lazy"
                                    data-src="img/placeholder.jpg"
                                    src="img/placeholder.jpg"
                                    alt="Let`s get started"
                                />
                            </picture>
                            <div className="banner_media-lottie">
                                <a className="getup" href="events.html"></a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="brands section">
                    <div className="brands_list">
                        <div className="brands_list-row">
                            <img className="brands_list-row_item" src="svg/brands/01.svg" alt="media" />
                            <img className="brands_list-row_item" src="svg/brands/02.svg" alt="media" />
                            <img className="brands_list-row_item" src="svg/brands/03.svg" alt="media" />
                            <img className="brands_list-row_item" src="svg/brands/04.svg" alt="media" />
                            <img className="brands_list-row_item" src="svg/brands/05.svg" alt="media" />
                            <img className="brands_list-row_item" src="svg/brands/06.svg" alt="media" />
                            <img className="brands_list-row_item" src="svg/brands/12.svg" alt="media" />
                            <img className="brands_list-row_item" src="svg/brands/04.svg" alt="media" />
                        </div>
                        <div className="brands_list-row">
                            <img className="brands_list-row_item" src="svg/brands/08.svg" alt="media" />
                            <img className="brands_list-row_item" src="svg/brands/07.svg" alt="media" />
                            <img className="brands_list-row_item" src="svg/brands/09.svg" alt="media" />
                            <img className="brands_list-row_item" src="svg/brands/10.svg" alt="media" />
                            <img className="brands_list-row_item" src="svg/brands/11.svg" alt="media" />
                            <img className="brands_list-row_item" src="svg/brands/12.svg" alt="media" />
                            <img className="brands_list-row_item" src="svg/brands/01.svg" alt="media" />
                            <img className="brands_list-row_item" src="svg/brands/09.svg" alt="media" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}