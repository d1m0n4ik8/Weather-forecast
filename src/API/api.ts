import axios from 'axios'
import { IGeoData } from '../Interfaces/IGeo'

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'
export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'

export const geoApiOptions = {
	params: {
		minPopulation: '1000000',
	},
	headers: {
		'X-RapidAPI-Key': 'baec267a1amsh2bf000e500f52b8p1ba39cjsnb9d109d6b2cb',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
	},
}

export const weatherApiOptions = {
	params: {
		appid: '193a709fb7933966f68b98b03a35dc85',
	},
}

export const loadOptions = (inputValue: string) =>
	axios.get<IGeoData>(`${GEO_API_URL}/cities?namePrefix=${inputValue}`, geoApiOptions).then(response => {
		return {
			options: response.data.data.map(city => ({
				value: `${city.latitude} ${city.longitude}`,
				label: `${city.name}, ${city.countryCode}`,
			})),
		}
	})

//export const getCurrentWeather = () => {}
