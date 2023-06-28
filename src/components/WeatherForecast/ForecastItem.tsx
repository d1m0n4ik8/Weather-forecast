import { FC } from 'react'
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
} from 'react-accessible-accordion'
import { IWeatherAPI } from '../../Interfaces/IWeather'
import style from './WeatherForecast.module.css'

type WeatherAccordionType = {
	weatherData: IWeatherAPI
	day: string
}

const WeatherAccordion: FC<WeatherAccordionType> = ({ weatherData, day }) => {
	return (
		<Accordion allowMultipleExpanded allowZeroExpanded>
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>
						<div className={style.dailyItem}>
							<img src={`icons/${weatherData.weather[0].icon}.png`} className={style.iconSmall} alt='weather' />
							<label className={style.day}>{day}</label>
							<label className={style.description}>{weatherData.weather[0].description}</label>
							<label className={style.minMax}>
								{Math.round(weatherData.main.temp_max)}°C /{Math.round(weatherData.main.temp_min)}°C
							</label>
						</div>
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<div className={style.dailyDetailsGrid}>
						<div className={style.dailyDetailsGridItem}>
							<label>Pressure:</label>
							<label>{weatherData.main.pressure}</label>
						</div>
						<div className={style.dailyDetailsGridItem}>
							<label>Humidity:</label>
							<label>{weatherData.main.humidity}</label>
						</div>
						<div className={style.dailyDetailsGridItem}>
							<label>Clouds:</label>
							<label>{weatherData.clouds.all}%</label>
						</div>
						<div className={style.dailyDetailsGridItem}>
							<label>Wind speed:</label>
							<label>{weatherData.wind.speed} m/s</label>
						</div>
						<div className={style.dailyDetailsGridItem}>
							<label>Sea level:</label>
							<label>{weatherData.main.sea_level}m</label>
						</div>
						<div className={style.dailyDetailsGridItem}>
							<label>Feels like:</label>
							<label>{weatherData.main.feels_like}°C</label>
						</div>
					</div>
				</AccordionItemPanel>
			</AccordionItem>
		</Accordion>
	)
}

export default WeatherAccordion
