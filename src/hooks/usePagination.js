import { useMemo } from 'react'

export default function usePagination(totalPage, countPosts) {
	const array = useMemo(() => {
		let pagesArray = []

		for (let i = 0; i < totalPage; i++) {
			pagesArray.push(i + 1)
		}

		return pagesArray
	}, [totalPage, countPosts])

	return array
}
