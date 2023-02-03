import React from 'react'
import MenuItem from './MenuItem'

const MenuList = props => {
	if (!props.items.length) {
		return <h1 className='error'>Ничего не найдено!</h1>
	}

	return (
		<div className='item-list'>
			{props.items.map(item => (
				<MenuItem item={item} key={item.id} />
			))}
		</div>
	)
}

export default MenuList
