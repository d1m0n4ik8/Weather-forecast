import { FC, useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { loadOptions } from '../../API/api'
import styles from './Search.module.scss'
export type SearchDataType = {
	value: string
	label: string
} | null

type PropsType = {
	onSearchChange: (searchData: SearchDataType) => void
}

const Search: FC<PropsType> = ({ onSearchChange }) => {
	const [search, setSearch] = useState<SearchDataType>({ value: '', label: 'Search for city (en)' })

	const handleOnChange = (searchData: SearchDataType) => {
		setSearch(searchData)
		onSearchChange(searchData)
	}

	return (
		<AsyncPaginate
			className={styles.search}
			debounceTimeout={600}
			value={search}
			onChange={handleOnChange}
			loadOptions={loadOptions}
		/>
	)
}

export default Search
