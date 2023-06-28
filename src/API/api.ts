import axios from 'axios'
import { IGeoData } from '../Interfaces/IGeo'
import { IWeatherAPI, IWeatherForecast } from '../Interfaces/IWeather'

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'
export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5'

export const geoApiOptions = {
	params: {
		minPopulation: '100000',
	},
	headers: {
		'X-RapidAPI-Key': 'baec267a1amsh2bf000e500f52b8p1ba39cjsnb9d109d6b2cb',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
	},
}

export const weatherApiOptions = {
	params: {
		appid: '193a709fb7933966f68b98b03a35dc85',
		units: 'metric',
	},
}

export const loadOptions = async (inputValue: string) => {
	const result = await axios.get<IGeoData>(`${GEO_API_URL}/cities?namePrefix=${inputValue}`, geoApiOptions)
	const { data } = await result
	const options = data.data.map(city => ({
		value: `${city.latitude} ${city.longitude}`,
		label: `${city.name}, ${city.countryCode}`,
	}))

	return {
		options,
	}
}

export const getCurrentWeather = async (lat: number, lon: number) => {
	const result = await axios.get<IWeatherAPI>(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}`, weatherApiOptions)
	const { data } = await result
	return data
}

export const getWeatherForecast = async (lat: number, lon: number) => {
	const result = await axios.get<IWeatherForecast>(
		`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}`,
		weatherApiOptions
	)
	const { data } = await result
	return data
}
