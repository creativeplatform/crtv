import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import Web3Provider from '@/components/Web3Provider'
import {
	LivepeerConfig,
	ThemeConfig,
	createReactClient,
	studioProvider,
  } from '@livepeer/react';
import fontFace from '../styles/fontFace'
import { Global } from '@emotion/react'

  const client = createReactClient({
	provider: studioProvider({ apiKey: process.env.LIVEPEER_API_KEY }),
  });
   
  const livepeerTheme: ThemeConfig = {
	colors: {
	  accent: 'rgb(236, 64, 122, 93)',
	  containerBorderColor: 'rgba(22, 29, 47, 18)',
	},
	fonts: {
	  display: 'Inter',
	},
	radii: {
		slider: '4px',
	},
  };

const App = ({ Component, pageProps }) => {
	return (
		<ThemeProvider attribute="class">
			<Global styles={fontFace} />
			<Web3Provider>
				<LivepeerConfig client={client} theme={livepeerTheme}>
					<Component {...pageProps} />
				</LivepeerConfig>
			</Web3Provider>
		</ThemeProvider>
	)
}

export default App
