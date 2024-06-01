import React, { ButtonHTMLAttributes, FC, ReactNode, memo } from 'react'
import clsx from 'clsx'

import './styles.scss'

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant: 'outlined'
	children: ReactNode
	isLoading?: boolean
	loadingData?: string | ReactNode
}

export const Button: FC<TButtonProps> = memo(
	({
		variant,
		children,
		isLoading,
		loadingData = 'Загрузка...',
		type = 'button',
		...args
	}) => {
		return (
			<button
				className={clsx('button', `button__${variant}`)}
				disabled={isLoading}
				type={type}
				{...args}
			>
				{isLoading ? loadingData : children}
			</button>
		)
	}
)

Button.displayName = 'Button'
