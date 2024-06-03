import React, { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react'
import clsx from 'clsx'
import { TVariantButton } from '../../types/global'
import './_styles.scss'

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant: TVariantButton
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
		className,
		...args
	}) => {
		return (
			<button
				className={clsx('button', `button__${variant}`, {
					[className as string]: className !== undefined,
				})}
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
