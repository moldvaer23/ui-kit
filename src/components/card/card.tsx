import React, { FC, HTMLAttributes, ReactElement, memo } from 'react'

type TCardProps = HTMLAttributes<HTMLElement> & {
	buttons?: ReactElement[] | ReactElement
	cdn?: string
	altCdn?: string
	children?: ReactElement | ReactElement[]
	description?: string
	price?: number
	title?: string
}

export const Card: FC<TCardProps> = memo(
	({ altCdn, buttons, cdn, children, description, price, title, ...args }) => (
		<article {...args}>
			{children ? (
				children
			) : (
				<>
					<h3>{title}</h3>
					{cdn && (
						<div>
							<img src={cdn} alt={altCdn ? altCdn : 'Изображение карточки'} />
						</div>
					)}
					{description && <p>{description}</p>}
					{price && <p>{price}</p>}
					{buttons && <div>{buttons}</div>}
				</>
			)}
		</article>
	)
)

Card.displayName = 'Card'
