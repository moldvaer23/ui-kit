import React, { FC, ReactNode, memo } from 'react'

type TDropDownMenuProps = {
	children: ReactNode
}

export const DropDownMenu: FC<TDropDownMenuProps> = memo(({ children }) => {
	return <div>{children}</div>
})

DropDownMenu.displayName = 'DropDownMenu'
