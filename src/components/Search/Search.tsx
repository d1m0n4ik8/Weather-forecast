import { FC, useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { loadOptions } from '../../API/api'
import styles from './Search.module.scss'
type SearchDataType = {
	value: string
	label: string
}

type PropsType = {
	onSearchChange: (searchData: SearchDataType | null) => void
}
const Search: FC<PropsType> = ({ onSearchChange }) => {
	const [search, setSearch] = useState<SearchDataType | null>({ value: '', label: 'Search for city (en)' })

	const handleOnChange = (searchData: SearchDataType | null) => {
		alert(searchData?.value)

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
