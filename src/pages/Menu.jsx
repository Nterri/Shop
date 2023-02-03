import React, { useContext, useEffect, useMemo, useState } from 'react'
import MenuList from '../components/MenuList'
import useFetching from '../hooks/useFetching'
import ShopService from '../API/ShopService'
import getPageCount from '../utils/getPageCount'
import MyPagination from '../components/UI/pagination/MyPagination'
import MyLoader from '../components/UI/loader/MyLoader'
import { AuthContext } from '../context'
import useMenu from '../hooks/useMenu'

const Menu = () => {
	const { search, setSearch } = useContext(AuthContext)
	const [items, setItems] = useState([])
	const [limit, setLimit] = useState(12)
	const [page, setPage] = useState(
		localStorage.getItem('page') ? Number(localStorage.getItem('page')) : 1
	)
	const [totalPage, setTotalPage] = useState(0)
	const [countPosts, setCountPosts] = useState(0)

	const [fetchShop, isShopLoading, shopError] = useFetching(async () => {
		const response = await ShopService.getAll(limit, page)
		setItems(response.data)
		const totalCount = response.headers['x-total-count']
		setCountPosts(Number(totalCount))
		setTotalPage(getPageCount(totalCount, limit))
	})

	const searchedItems = useMenu(items, search)

	const changePage = page => {
		setPage(page)
		localStorage.setItem('page', page)
	}

	useEffect(() => {
		fetchShop()
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
	}, [page, limit])

	return (
		<div className='menu'>
			<div className='container'>
				{isShopLoading ? (
					<MyLoader />
				) : (
					<MenuList items={searchedItems}></MenuList>
				)}
				<MyPagination
					page={page}
					changePage={changePage}
					limit={limit}
					countPosts={countPosts}
				></MyPagination>
			</div>
		</div>
	)
}

export default Menu
