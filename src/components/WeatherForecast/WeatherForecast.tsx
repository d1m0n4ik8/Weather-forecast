import { FC, useEffect, useState } from 'react'
import { getWeatherForecast } from '../../API/api'
import { cityDataType } from '../../App'
import { IWeatherForecast } from '../../Interfaces/IWeather'
import ForecastItem from './ForecastItem'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

type WeatherForecastProps = {
	cityData: cityDataType
}

const WeatherForecast: FC<WeatherForecastProps> = ({ cityData }) => {
	const [weatherData, setWeatherData] = useState<IWeatherForecast | null>(null)

	useEffect(() => {
		if (cityData) {
			const { lat, lon } = cityData.coordinates
			getWeatherForecast(lat, lon).then(data => setWeatherData(data))
		}
	}, [cityData])

	console.log(weatherData)
	if (!weatherData) return <></>
	return (
		<div>
			{WEEK_DAYS.map((day, index) => (
				<ForecastItem key={index} weatherData={weatherData.list[index]} day={day} />
			))}
		</div>
	)
}

export default WeatherForecast
