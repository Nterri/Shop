import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import MyButton from './UI/button/MyButton'
import { AuthContext } from '../context'

const MenuItem = props => {
	const { search, setSearch } = useContext(AuthContext)
	const router = useHistory()

	return (
		<div className='item'>
			<div className='item__image'>
				{props.item.url ? (
					<img src={props.item.url} alt='image' />
				) : (
					<img src='/src/images/no-image.jpeg' alt='image' />
				)}
			</div>
			<div className='item__title'>
				{[
					props.item.title[0].toUpperCase(),
					props.item.title.slice(1, -1)
				].join('')}
			</div>
			<div className='item-block'>
				<div className='item-block__price'>1234 руб.</div>
				<MyButton
					onClick={() => {
						router.push(`/Shop/build/menu/${props.item.id}`)
						setSearch('')
					}}
					className='item-block__btn'
				>
					Подробнее
				</MyButton>
			</div>
		</div>
	)
}

export default MenuItem
