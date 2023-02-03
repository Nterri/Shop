import { useMemo } from 'react'

export default function useMenu(items, query) {
	const searchedItems = useMemo(() => {
		return items.filter(item =>
			item.title.toLowerCase().includes(query.toLowerCase())
		)
	}, [query, items])

	return searchedItems
}
