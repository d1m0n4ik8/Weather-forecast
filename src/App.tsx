import { FC } from 'react'
import Search from './components/Search/Search'
import WeatherAccordion from './components/WeatherAccordion'
type SearchDataType = {
	value: string
	label: string
}

const App: FC = () => {
	const handleOnSearchChange = (searchData: SearchDataType | null) => {
		if (!searchData) return
		const [lat, lon] = searchData.value.split(' ')
		console.log(lat)
		console.log(lon)
	}
	return (
		<div>
			<Search onSearchChange={handleOnSearchChange} />
			<WeatherAccordion />
		</div>
	)
}

export default App
