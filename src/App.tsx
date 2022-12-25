import React from 'react'
import {Button} from "./components/Button/Button";
import Shape from '../public/assets/shape.svg'

export const App = () => {

	return (
		<>
			Basic Webpack Config for React App
			<Button btnText={"React button"}/>
			<Shape/>
		</>
	)
}
