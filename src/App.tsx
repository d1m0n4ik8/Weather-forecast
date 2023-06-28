import { FC, useState } from 'react'
import './App.scss'
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
		<div className='cloud-intro'>
			<div className='main container'>
				<div className='glass'>
					<Search onSearchChange={handleOnSearchChange} />
					<CurrentWeather cityData={cityData} />
					<WeatherForecast cityData={cityData} />
				</div>
			</div>
		</div>
	)
}

export default App
