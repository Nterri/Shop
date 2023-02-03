import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import classes from './MyNavBar.module.scss'
import MyInput from '../input/MyInput'
import { AuthContext } from '../../../context'

const MyNavBar = () => {
	const { push, location } = useHistory()
	const { search, setSearch } = useContext(AuthContext)
	const [burger, setBurger] = useState(false)

	const reset = () => {
		setBurger(false)
		setSearch('')
	}

	document.addEventListener('click', () => {
		if (burger) setBurger(false)
	})

	return (
		<div className={classes.navbar}>
			<div className={classes.logo}>
				<Link onClick={reset} to='/Shop/build/'>
					Shop
				</Link>
			</div>
			<MyInput
				className={classes.search}
				value={search}
				onChange={e => {
					setSearch(e.target.value)
					if (location.pathname != '/Shop/build/') push('/Shop/build/')
				}}
				placeholder='Поиск товара...'
			/>
			<div
				onClick={e => {
					e.stopPropagation()
				}}
				className={
					burger ? [classes.menu, classes.active].join(' ') : [classes.menu]
				}
			>
				<div
					onClick={() => {
						setBurger(!burger)
					}}
					className={classes.menu__burger}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className={classes.menu__content}>
					<div className={classes.navbar__links}>
						<Link
							onClick={reset}
							to='/Shop/build/about'
							className={classes.navbar__items}
						>
							О нас
						</Link>
						<Link
							onClick={reset}
							to='/Shop/build/'
							className={classes.navbar__items}
						>
							Магазин
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyNavBar
