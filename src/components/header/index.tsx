import React from "react";
import Image from "next/image";
import Link from "next/link";
import ConnectWallet from "./ConnectWallet";

const Header = () => {
    return (
        <header className="header" data-page="streamers" data-page-parent="home">
            <div className="header_bg">
                <picture>
                    <source data-srcset="img/gradients/10.webp" srcSet="img/gradients/10.webp" type="image/webp" />
                    <img className="lazy" data-src="img/gradients/10.webp" src="img/gradients/10.webp" alt="media" />
                </picture>
            </div>
            <div className="container d-flex">
                <a className="header_logo logo" href="#">
                    <span className="header_logo-wrapper">
                        <img src="/svg/logo--black.svg" alt="UpCreators" />
                    </span>
                    <span className="text">Creators</span>
                </a>
                <nav className="header_nav text--medium text--md collapse" id="headerMenu">
                    <ul className="header_nav-list">
                        <li className="header_nav-list_item dropdown">
                            <Link
                                className="nav-link nav-item dropdown-toggle"
                                href="/"
                                data-bs-toggle="collapse"
                                data-bs-target="#homeMenu"
                                data-trigger="dropdown"
                                data-main-link="true"
                                aria-expanded="false"
                                aria-controls="homeMenu"
                                data-page="home"
                                data-page-parent="home"
                            >
                                <span className="nav-item_text"> Home </span>
                                <span className="icon icon-caret-down-solid"></span>
                            </Link>
                            <div className="dropdown-menu collapse" id="homeMenu">
                                <ul className="dropdown-list">
                                    <li className="list-item">
                                        <Link
                                            className="dropdown-item nav-item"
                                            data-page="home"
                                            data-page-parent="home"
                                            href="/"
                                            data-main="true"
                                        >
                                            Home Agency
                                        </Link>
                                    </li>
                                    <li className="list-item">
                                        <Link
                                            className="dropdown-item nav-item"
                                            data-page="streamers"
                                            data-page-parent="home"
                                            href="/"
                                        >
                                            Home Streamers
                                        </Link>
                                    </li>
                                    <li className="list-item">
                                        <a
                                            className="dropdown-item nav-item"
                                            data-page="home-shop"
                                            data-page-parent="home"
                                            href="index-shop.html"
                                        >
                                            Home Shop
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="header_nav-list_item">
                            <Link className="nav-item nav-link" href="about" data-page="about" data-single="true">
                                <span className="nav-item_text">About</span>
                            </Link>
                        </li>
                        <li className="header_nav-list_item dropdown">
                            <a
                                className="nav-link nav-item dropdown-toggle"
                                href="#"
                                data-bs-toggle="collapse"
                                data-bs-target="#pagesMenu"
                                data-trigger="dropdown"
                                data-page-parent="pages"
                                data-main-link="true"
                                aria-expanded="false"
                                aria-controls="pagesMenu"
                            >
                                <span className="nav-item_text"> Pages </span>
                                <span className="icon icon-caret-down-solid"></span>
                            </a>
                            <div className="dropdown-menu collapse" id="pagesMenu">
                                <ul className="dropdown-list">
                                    <li className="list-item">
                                        <a className="dropdown-item nav-item" data-page="faq" data-page-parent="pages" href="faq.html"> FAQ </a>
                                    </li>
                                    <li className="list-item">
                                        <a
                                            className="dropdown-item nav-item"
                                            data-page="contacts"
                                            data-page-parent="pages"
                                            href="contacts.html"
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                    <li className="list-item">
                                        <a className="dropdown-item nav-item" data-page="error" data-page-parent="pages" href="404.html">
                                            Error Page
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="header_nav-list_item">
                            <a className="nav-item nav-link" href="events.html" data-page="events" data-single="true">
                                <span className="nav-item_text">Events</span>
                            </a>
                        </li>
                        <li className="header_nav-list_item dropdown">
                            <a
                                className="nav-link nav-item dropdown-toggle"
                                href="cases.html"
                                data-bs-toggle="collapse"
                                data-bs-target="#casesMenu"
                                data-trigger="dropdown"
                                data-page-parent="cases"
                                data-main-link="true"
                                aria-expanded="false"
                                aria-controls="casesMenu"
                            >
                                <span className="nav-item_text"> Our Works </span>
                                <span className="icon icon-caret-down-solid"></span>
                            </a>
                            <div className="dropdown-menu collapse" id="casesMenu">
                                <ul className="dropdown-list">
                                    <li className="list-item" data-main="true">
                                        <a className="dropdown-item nav-item" data-page="cases" data-page-parent="cases" href="cases.html">
                                            Our Works
                                        </a>
                                    </li>
                                    <li className="list-item">
                                        <a className="dropdown-item nav-item" data-page="case" data-page-parent="cases" href="case.html">
                                            Case Details
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="header_nav-list_item dropdown">
                            <a
                                className="nav-link nav-item dropdown-toggle"
                                href="blog-sidebar.html"
                                data-bs-toggle="collapse"
                                data-bs-target="#newsMenu"
                                data-trigger="dropdown"
                                data-page-parent="news"
                                data-main-link="true"
                                aria-expanded="false"
                                aria-controls="newsMenu"
                            >
                                <span className="nav-item_text"> News </span>
                                <span className="icon icon-caret-down-solid"></span>
                            </a>
                            <div className="dropdown-menu collapse" id="newsMenu">
                                <ul className="dropdown-list">
                                    <li className="list-item">
                                        <a
                                            className="dropdown-item nav-item"
                                            data-page="blog-sidebar"
                                            data-page-parent="news"
                                            href="blog-sidebar.html"
                                        >
                                            News Sidebar
                                        </a>
                                    </li>
                                    <li className="list-item">
                                        <a
                                            className="dropdown-item nav-item"
                                            data-page="blog-list"
                                            data-page-parent="news"
                                            href="blog-list.html"
                                        >
                                            News Horizontal Boxes
                                        </a>
                                    </li>
                                    <li className="list-item">
                                        <a
                                            className="dropdown-item nav-item"
                                            data-page="blog-grid"
                                            data-page-parent="news"
                                            href="blog-grid.html"
                                        >
                                            News Full Width
                                        </a>
                                    </li>
                                    <li className="list-item">
                                        <a
                                            className="dropdown-item nav-item"
                                            data-page="post-sidebar"
                                            data-page-parent="news"
                                            href="post-sidebar.html"
                                        >
                                            Single Post Sidebar
                                        </a>
                                    </li>
                                    <li className="list-item">
                                        <a className="dropdown-item nav-item" data-page="post" data-page-parent="news" href="post.html">
                                            Single Post Full Width
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="header_nav-list_item dropdown">
                            <a
                                className="nav-link nav-item dropdown-toggle"
                                href="shop.html"
                                data-bs-toggle="collapse"
                                data-bs-target="#shopMenu"
                                data-trigger="dropdown"
                                data-page-parent="shop"
                                data-main-link="true"
                                aria-expanded="false"
                                aria-controls="shopMenu"
                            >
                                <span className="nav-item_text"> Shop </span>
                                <span className="icon icon-caret-down-solid"></span>
                            </a>
                            <div className="dropdown-menu collapse" id="shopMenu">
                                <ul className="dropdown-list">
                                    <li className="list-item">
                                        <a className="dropdown-item nav-item" data-page="shop" data-page-parent="shop" href="shop.html">
                                            Shop
                                        </a>
                                    </li>
                                    <li className="list-item">
                                        <a
                                            className="dropdown-item nav-item"
                                            data-page="shop-list"
                                            data-page-parent="shop"
                                            href="shop-list.html"
                                        >
                                            Shop List
                                        </a>
                                    </li>
                                    <li className="list-item">
                                        <a className="dropdown-item nav-item" data-page="lookbook" data-page-parent="shop" href="lookbook.html">
                                            Shop Lookbook
                                        </a>
                                    </li>
                                    <li className="list-item">
                                        <a
                                            className="dropdown-item nav-item"
                                            data-page="collection"
                                            data-page-parent="shop"
                                            href="collection.html"
                                        >
                                            Shop Collection
                                        </a>
                                    </li>
                                    <li className="list-item">
                                        <a className="dropdown-item nav-item" data-page="product" data-page-parent="shop" href="product.html">
                                            Shop Product Page
                                        </a>
                                    </li>
                                    <li className="list-item">
                                        <a className="dropdown-item nav-item" data-page="product2" data-page-parent="shop" href="product2.html">
                                            Shop Product Big Images
                                        </a>
                                    </li>
                                    <li className="list-item">
                                        <a className="dropdown-item nav-item" data-page="product3" data-page-parent="shop" href="product3.html">
                                            Shop Product Big Slider
                                        </a>
                                    </li>
                                    <li className="list-item">
                                        <a className="dropdown-item nav-item" data-page="cart" data-page-parent="shop" href="cart.html">
                                            Shopping Bag
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="header_user">
                    <ConnectWallet />
                    <a className="header_user-account" href="#">
                        <i className="icon-user"></i>
                    </a>
                    <a className="header_user-cart addToCart" href="#">
                        <i className="icon-bag"></i>
                        <span className="header_user-cart_qty">0</span>
                    </a>
                    <span className="header_user-preference">
                        USD
                        <span className="header_user-preference_country">
                            <picture>
                                <source data-srcset="img/placeholder.jpg" srcSet="img/placeholder.jpg" type="image/webp" />
                                <img className="lazy" data-src="img/placeholder.jpg" src="img/placeholder.jpg" alt="USA" />
                            </picture>
                        </span>
                    </span>
                </div>
                <button
                    className="header_trigger"
                    id="headerTrigger"
                    data-bs-toggle="collapse"
                    data-bs-target="#headerMenu"
                    aria-controls="headerMenu"
                    aria-expanded="false"
                    type="button"
                ></button>
            </div>
        </header>
    );
};

export default Header;
