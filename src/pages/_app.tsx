import {
    LivepeerConfig,
    ThemeConfig,
    createReactClient,
    studioProvider,
} from '@livepeer/react';
import * as React from 'react';
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import Layout from "../components/layout/Layout";
import Web3Provider from '../components/header/Web3Provider';
import '../styles/preload.css';
import '../styles/icomoon.css';
import '../styles/libs.css';
import '../styles/streamers.css';
import Head from 'next/head';

const livepeerClient = createReactClient({
    provider: studioProvider({
        apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY,
    }),
});

const theme: ThemeConfig = {
    colors: {
        accent: '#EC407A',
        containerBorderColor: '#EC407A',
    },
    fonts: {
        display: 'Inter',
    },
};

function App({ Component, pageProps }) {
    // console.log(Component.style);
    return (
        <ThemeProvider attribute="class">
            <Web3Provider>
                <LivepeerConfig client={livepeerClient} theme={theme}>
                    <Head>
                        <title>{Component.title}</title>
                    </Head>
                    <Layout>
                        {/* <Style /> */}
                        <Component {...pageProps} />
                    </Layout>
                </LivepeerConfig>
            </Web3Provider>
        </ThemeProvider>
    );
}

export default App;