import Menu from '../pages/Menu'
import About from '../pages/About'
import ItemId from '../pages/ItemID'

const privateRoute = [
	{ path: '/Shop/build/', component: Menu, exact: true },
	{ path: '/Shop/build/about', component: About, exact: true },
	{ path: '/Shop/build/menu/:id', component: ItemId, exact: true }
]

export default privateRoute
