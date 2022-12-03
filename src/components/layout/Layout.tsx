import React from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import Script from 'next/script'
// import { ThemeProvider } from "next-themes";
import Header from "../header";
import store from "../../store/index";
import Footer from "../footer";

// import "../../../public/scripts/common";
// import { ToastContainer } from "react-toastify";
// import { useLanguage } from "../../hooks/useLanguage";
// import NextNProgress from "nextjs-progressbar";

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    // const { locale } = useLanguage();
    return (
        <Provider store={store}>
            <Head>
                <title>Creative TV</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
                <button className="scrollTrigger" id="scrollTrigger"><i className="icon-to-top"></i></button>
                <Script id="www-widgetapi-script" src="https://s.ytimg.com/yts/jsbin/www-widgetapi-vflS50iB-/www-widgetapi.js"></Script>
                <Script src="https://www.youtube.com/player_api"></Script>
                <Script src="/scripts/common.js"></Script>
                <Script src="/scripts/lottie.js"></Script>
                <Script src="/scripts/ticker.js"></Script>
            </body>
        </Provider>
    );
};

export default Layout;
