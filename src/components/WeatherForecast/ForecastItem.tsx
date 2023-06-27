import { FC } from 'react'
import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
} from 'react-accessible-accordion'
import { IWeatherAPI } from '../../Interfaces/IWeather'

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
						<div className='daily-item'>
							<img src={`icons/${weatherData.weather[0].icon}.png`} className='icon-small' alt='weather' />
							<label className='day'>{day}</label>
							<label className='description'>{weatherData.weather[0].description}</label>
							<label className='min-max'>
								{Math.round(weatherData.main.temp_max)}°C /{Math.round(weatherData.main.temp_min)}°C
							</label>
						</div>
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<div className='daily-details-grid'>
						<div className='daily-details-grid-item'>
							<label>Pressure:</label>
							<label>{weatherData.main.pressure}</label>
						</div>
						<div className='daily-details-grid-item'>
							<label>Humidity:</label>
							<label>{weatherData.main.humidity}</label>
						</div>
						<div className='daily-details-grid-item'>
							<label>Clouds:</label>
							<label>{weatherData.clouds.all}%</label>
						</div>
						<div className='daily-details-grid-item'>
							<label>Wind speed:</label>
							<label>{weatherData.wind.speed} m/s</label>
						</div>
						<div className='daily-details-grid-item'>
							<label>Sea level:</label>
							<label>{weatherData.main.sea_level}m</label>
						</div>
						<div className='daily-details-grid-item'>
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
