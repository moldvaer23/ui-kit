import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { DropDownButton } from '../drop-down-button'
import { Button } from '../../button'

describe('[Component]: DropDownButton', () => {
	it('[test]: корректно отображает меню (закрыто)', () => {
		const { getByText } = render(
			<DropDownButton buttonText='ОТКРЫТЬ МЕНЮ' variant='contained'>
				<Button variant='text'>КНОПКА В МЕНЮ 1</Button>
				<Button variant='text'>КНОПКА В МЕНЮ 2</Button>
			</DropDownButton>
		)

		expect(getByText('ОТКРЫТЬ МЕНЮ')).toBeInTheDocument()
		expect(screen.queryByText('КНОПКА В МЕНЮ 1')).toBeNull()
		expect(screen.queryByText('КНОПКА В МЕНЮ 2')).toBeNull()
	})

	it('[test]: корректно отображает меню (открыто)', () => {
		const { getByText } = render(
			<DropDownButton buttonText='ОТКРЫТЬ МЕНЮ' variant='contained'>
				<Button variant='text'>КНОПКА В МЕНЮ 1</Button>
				<Button variant='text'>КНОПКА В МЕНЮ 2</Button>
			</DropDownButton>
		)

		fireEvent.click(getByText('ОТКРЫТЬ МЕНЮ'))
		expect(getByText('КНОПКА В МЕНЮ 1')).toBeInTheDocument()
		expect(getByText('КНОПКА В МЕНЮ 2')).toBeInTheDocument()
	})
})
