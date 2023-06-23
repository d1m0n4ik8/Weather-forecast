export interface IGeoDataItem {
	id: number
	wikiDataId: string
	name: string
	country: string
	countryCode: string
	region: string
	regionCode: string
	latitude: number
	longitude: number
	population: number
}

export interface IGeoLink {
	rel: string
	href: string
}

export interface IGeoMetaData {
	currentOffset: number
	totalCount: number
}

export interface IGeoData {
	data: IGeoDataItem[]
	links: IGeoLink[]
	metadata: IGeoMetaData
}
