import React from 'react'
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { privateRoutes } from '../Routes/Routes'
const AppRouter = () => {
	return (
		<Routes>
			{
				privateRoutes.map((el) =>
					<Route path={el.path} element={el.element} key={el.path} />
				)
			}
		</Routes>

	)
}

export default AppRouter