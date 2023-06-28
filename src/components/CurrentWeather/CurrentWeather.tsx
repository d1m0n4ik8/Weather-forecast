import { FC, useEffect, useState } from 'react'
import { getCurrentWeather } from '../../API/api'
import { cityDataType } from '../../App'
import { IWeatherAPI } from '../../Interfaces/IWeather'
import style from './CurrentWeather.module.scss'

type CurrentWeatherProp = {
	cityData: cityDataType
}

const CurrentWeather: FC<CurrentWeatherProp> = ({ cityData }) => {
	const [weatherData, setWeatherData] = useState<IWeatherAPI | null>(null)

	useEffect(() => {
		if (cityData) {
			const { lat, lon } = cityData.coordinates
			getCurrentWeather(lat, lon).then(data => setWeatherData(data))
		}
	}, [cityData])

	return (
		<>
			{weatherData ? (
				<div className={style.weather}>
					<div className={style.top}>
						<div>
							<p className={style.city}>{cityData?.city}</p>
							<p className={style.weatherDescription}>{weatherData.weather[0].description}</p>
						</div>
						<img alt='weather' className={style.weatherIcon} src={`icons/${weatherData.weather[0].icon}.png`} />
					</div>
					<div className={style.bottom}>
						<p className={style.temperature}>{Math.round(weatherData.main.temp)}°C</p>
						<div className={style.details}>
							<div className={style.parameterRow}>
								<span className={style.parameterLabel}>Details</span>
							</div>
							<div className={style.parameterRow}>
								<span className={style.parameterLabel}>Feels like</span>
								<span className={style.parameterValue}>{Math.round(weatherData.main.feels_like)}°C</span>
							</div>
							<div className={style.parameterRow}>
								<span className={style.parameterLabel}>Wind</span>
								<span className={style.parameterValue}>{weatherData.wind.speed} m/s</span>
							</div>
							<div className={style.parameterRow}>
								<span className={style.parameterLabel}>Humidity</span>
								<span className={style.parameterValue}>{weatherData.main.humidity}%</span>
							</div>
							<div className={style.parameterRow}>
								<span className={style.parameterLabel}>Pressure</span>
								<span className={style.parameterValue}>{weatherData.main.pressure} hPa</span>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className={style.empty} />
			)}
		</>
	)
}

export default CurrentWeather
