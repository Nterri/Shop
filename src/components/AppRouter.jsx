import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import privateRoute from '../router/privateRoute'

const AppRouter = () => {
	return (
		<Switch>
			{privateRoute.map(route => (
				<Route
					key={route.path}
					component={route.component}
					path={route.path}
					exact={route.exact}
				/>
			))}
			<Redirect to='/Shop/build/about' />
		</Switch>
	)
}

export default AppRouter
