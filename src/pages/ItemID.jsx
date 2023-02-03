import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetching from '../hooks/useFetching'
import ShopService from '../API/ShopService'
import MyButton from '../components/UI/button/MyButton'
import MyLoader from '../components/UI/loader/MyLoader'
import CommentItem from '../components/CommentItem'

const ItemId = () => {
	const params = useParams()
	const [item, setItem] = useState({})
	const [comments, setComments] = useState([])
	const [fetchItemById, isLoading, error] = useFetching(async () => {
		const response = await ShopService.getByIdItem(params.id)
		setItem(response.data)
	})
	const [fetchComments, isComLoading, errorCom] = useFetching(async () => {
		const response = await ShopService.getByIdItemReviews(params.id)
		setComments(response.data)
	})

	useEffect(() => {
		fetchItemById()
		fetchComments()
	}, [])

	return (
		<div>
			<div className='container'>
				<div className='item__card current-item'>
					<div className='current-item__image'>
						{isLoading ? <MyLoader /> : <img src={item.url} alt='image' />}
					</div>
					{isLoading ? (
						<MyLoader />
					) : (
						<div className='current-item__info info-item'>
							<div className='info-item__title'>
								{[
									String(item.title)[0].toUpperCase(),
									String(item.title).slice(1, -1)
								].join('')}
							</div>
							<div className='info-item__price'>1234 руб.</div>
							<MyButton>Купить</MyButton>
						</div>
					)}
				</div>
				<div className='comments'>
					<h2 className='comments__title'>Комментарии о товаре:</h2>
					{isComLoading ? (
						<MyLoader />
					) : (
						comments.map(comm => <CommentItem comm={comm} key={comm.id} />)
					)}
					{!comments.length && <h1 className='error'>Комментариев нет!</h1>}
				</div>
			</div>
		</div>
	)
}

export default ItemId
