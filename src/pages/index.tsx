import { FC } from 'react'
import Navbar from '../components/common/Navbar'
import ThemeSwitcher from '../components/ThemeSwitcher'
import { Card } from '../components/common/Card'
import Menu from '../components/common/Menu'



const Home: FC = () => {
	return (
		<>
			<Navbar />
			<div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
				<ThemeSwitcher className="absolute bottom-6 right-6" />
				<div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
					<div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
						<div className="grid grid-cols-1 md:grid-cols-1">
							<Card />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
