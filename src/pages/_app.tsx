import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import Layout from "../components/layout/Layout";
// import '../styles/globals.css'
import '../styles/preload.css';
import '../styles/icomoon.css';
import '../styles/libs.css';
import '../styles/streamers.css';

function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;