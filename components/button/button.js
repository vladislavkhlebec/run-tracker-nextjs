import React from 'react'

import './button.less'

export const Button = ({ onClick, className, children }) => {
	return (
		<button className={`button ${className}`} onClick={onClick}>
			{children}
		</button>
	)
}
