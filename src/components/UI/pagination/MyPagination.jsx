import React from 'react'
import classes from './MyPagination.module.css'
import usePagination from '../../../hooks/usePagination'
import getPageCount from '../../../utils/getPageCount'

const MyPagination = ({ countPosts, limit, page, changePage }) => {
	let pagesArray = usePagination(getPageCount(countPosts, limit), countPosts)
	let paginationArray = [1]
	for (let i = 4; i >= -8; i = i - 1) {
		if (
			page - i > 1 &&
			paginationArray.length <= 8 &&
			page - i < pagesArray.length
		)
			paginationArray.push(page - i)
	}
	if (pagesArray.length) paginationArray.push(pagesArray.length)

	let indexMass = []
	for (let i = 0; i < paginationArray.length - 1; i++) {
		if (paginationArray[i + 1] - paginationArray[i] != 1) {
			indexMass.push(i)
		}
	}

	let newPaginationArray = []
	paginationArray.forEach((i, index) => {
		if (indexMass.indexOf(index) != -1) {
			newPaginationArray.push(i)
			newPaginationArray.push('...')
		} else newPaginationArray.push(i)
	})

	if (paginationArray.length === 1) {
		return
	}

	return (
		<div className={classes.page__wrapper}>
			{newPaginationArray.map((p, index) => (
				<span
					key={index}
					onClick={() => (p != '...' ? changePage(p) : 0)}
					className={
						page === p
							? [classes.page, classes.page__current].join(' ')
							: [classes.page]
					}
				>
					{p}
				</span>
			))}
		</div>
	)
}

export default MyPagination
