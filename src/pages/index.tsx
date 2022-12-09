import type { NextPage } from "next";
import { useEffect } from "react";
import dynamic from "next/dynamic";

import { useDispatch } from "react-redux";
import { specialOfferProductsActions } from "../store/specialOfferProducts-slice";
import { newestProductsActions } from "../store/newestProduct-slice";

import { client } from "../lib/client";
import { initSwiperSlider, initInsightSwiper } from "../../public/scripts/modules/slider";


// import Benefits from "../components/Benefits";
// import Carousel from "../components/carousel";
// const Offers = dynamic(() => import("../components/Offers/Offers"));
// const Category = dynamic(() => import("../components/category/Category"));
// const Newest = dynamic(() => import("../components/newest/Newest"));
// const Brands = dynamic(() => import("../components/brands"));
// const Banners = dynamic(() => import("../components/banners"), { ssr: false });

import HomeComponent from "../components/home";
// import DynamicStyle from "../components/partial/Style";

// import { IProduct } from "../lib/types/products";
// import { newestProductsFn } from "../utilities/sortByTimeStamp";

const Home: NextPage<{}> = () => {
    // const dispatch = useDispatch();
    // console.log("HomeComponent", HomeComponent.style);

    function initVideoSwipers() {
        const sliders = document.querySelectorAll('.channels_content .swiper');
        sliders.forEach((el, i) => {
            initSwiperSlider(`.swiper_${i + 1}`, `.swiper_${i + 1}-nav`, {
                spaceBetween: 30,
                autoplay: {
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                },
                speed: 2000,
                breakpoints: {
                    767.98: {
                        slidesPerView: 2,
                    },
                    1169.98: {
                        slidesPerView: 3,
                    },
                    1599.98: {
                        slidesPerView: 4,
                    }
                }
            })
        })
    }

    useEffect(() => {
        //add products to offers list
        // const offersProducts = products.filter((item) => item.discount);
        // dispatch(specialOfferProductsActions.addProducts(offersProducts));

        // //add products to newest list
        // const sortedProductsByTimeStamp = newestProductsFn(products);
        // dispatch(newestProductsActions.addProducts(sortedProductsByTimeStamp));
        initInsightSwiper();
        initVideoSwipers();
    });

    return (
        <>
            <HomeComponent />
        </>
    );
};

export default Home;

export const getStaticProps = async () => {
    const productQuery = `*[_type=='product']`;
    const products = await client.fetch(productQuery);
    return {
        props: {
            products,
        },
    };
};
