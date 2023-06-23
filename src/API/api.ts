import axios from 'axios'
import { IGeoDataItem } from '../Interfaces/IGeo'

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'

export const geoApiOptions = {
	headers: {
		'X-RapidAPI-Key': 'baec267a1amsh2bf000e500f52b8p1ba39cjsnb9d109d6b2cb',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
	},
}

export const loadOptions = (inputValue: string) => {
	return axios
		.get(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
		.then(response => {
			return {
				options: response.data.map((city: IGeoDataItem) => {
					return {
						value: `${city.latitude} ${city.longitude}`,
						label: `${city.name}, ${city.countryCode}`,
					}
				}),
			}
		})
}
