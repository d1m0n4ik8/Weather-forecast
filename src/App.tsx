import { FC, useState } from 'react'
import { Coord } from './Interfaces/IWeather'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import Search, { SearchDataType } from './components/Search/Search'
import WeatherForecast from './components/WeatherForecast/WeatherForecast'

export type cityDataType = {
	city: string
	coordinates: Coord
} | null

const App: FC = () => {
	const [cityData, setCityData] = useState<cityDataType>(null)

	const handleOnSearchChange = (searchData: SearchDataType) => {
		if (!searchData) return
		const [lat, lon] = searchData.value.split(' ').map(value => Number(value))
		const city = searchData.label
		setCityData({ city, coordinates: { lon, lat } })
	}

	return (
		<div>
			<Search onSearchChange={handleOnSearchChange} />
			<CurrentWeather cityData={cityData} />
			<WeatherForecast cityData={cityData} />
		</div>
	)
}

export default App
