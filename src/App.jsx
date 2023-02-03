import React, { useState } from 'react'
import './styles/App.scss'
import { BrowserRouter } from 'react-router-dom'
import MyNavBar from './components/UI/navbar/MyNavBar'
import AppRouter from './components/AppRouter'
import { AuthContext } from './context'

function App() {
	const [search, setSearch] = useState('')

	return (
		<AuthContext.Provider
			value={{
				search,
				setSearch
			}}
		>
			<BrowserRouter>
				<MyNavBar />
				<AppRouter />
			</BrowserRouter>
		</AuthContext.Provider>
	)
}

export default App
