import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import Layout from "../components/layout/Layout";
import Web3Provider from '../components/header/Web3Provider';
// import '../styles/globals.css'
import '../styles/preload.css';
import '../styles/icomoon.css';
import '../styles/libs.css';
import '../styles/streamers.css';

function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <Web3Provider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Web3Provider>
        </ThemeProvider>
    );
}

export default App;