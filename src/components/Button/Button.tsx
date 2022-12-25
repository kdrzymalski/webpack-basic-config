import React from 'react'
import styles from './button.module.css'

export const Button = ({btnText}) => {
	return (
		<div>
			<button className={`${styles.btn}`}>{btnText}</button>
		</div>
	)
}
