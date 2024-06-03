import React, {
	ButtonHTMLAttributes,
	FC,
	memo,
	ReactElement,
	useState,
} from 'react'
import { Button } from '../button'
import { DropDownMenu } from './drop-down-menu'
import { TVariantButton } from '../../types/global'

type TDropDownButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant: TVariantButton
	buttonText: string
	children: ReactElement[]
}

export const DropDownButton: FC<TDropDownButtonProps> = memo(
	({ buttonText, variant, children, ...args }) => {
		const [isOpen, setIsOpen] = useState<boolean>(false)
		const handleClick = () => setIsOpen((prev) => !prev)

		return (
			<div>
				<Button variant={variant} onClick={handleClick} {...args}>
					{buttonText}
				</Button>

				{isOpen && <DropDownMenu>{children}</DropDownMenu>}
			</div>
		)
	}
)

DropDownButton.displayName = 'DropDownButton'
