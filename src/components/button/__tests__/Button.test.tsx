import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Button } from '../button'
import '@testing-library/jest-dom'

describe('[Component]: Button', () => {
	it('[test]: корректно отображает дочерние элементы', () => {
		const { getByText } = render(
			<Button variant='outlined' type='button'>
				ТЕСТ
			</Button>
		)
		expect(getByText('ТЕСТ')).toBeInTheDocument()
	})

	it('[test]: вызывает обработчик onClick при нажатии', () => {
		const handleClick = jest.fn()
		const { getByText } = render(
			<Button variant='outlined' type='button' onClick={handleClick}>
				ТЕСТ
			</Button>
		)
		fireEvent.click(getByText('ТЕСТ'))
		expect(handleClick).toHaveBeenCalledTimes(1)
	})

	it('[test]: имеет правильный атрибут HTML type', () => {
		const { container } = render(
			<Button variant='outlined' type='button'>
				ТЕСТ
			</Button>
		)
		expect(container.querySelector('button')).toHaveAttribute('type', 'button')
	})

	it('[test]: имеет правильный атрибут disabled', () => {
		const { container } = render(
			<Button variant='outlined' disabled={true}>
				ТЕСТ
			</Button>
		)
		expect(container.querySelector('button')).toHaveAttribute('disabled')
	})

	it('[test]: имеет правильный атрибут disabled и текст при загрузке если не передали "loadingData"', () => {
		const { container, getByText } = render(
			<Button variant='outlined' isLoading={true}>
				ТЕСТ
			</Button>
		)
		expect(container.querySelector('button')).toHaveAttribute('disabled')
		expect(getByText('Загрузка...')).toBeInTheDocument()
	})

	it('[test]: имеет правильный атрибут disabled и текст при загрузке', () => {
		const { container, getByText } = render(
			<Button variant='outlined' isLoading={true} loadingData='ЗАГРУЗКА'>
				ТЕСТ
			</Button>
		)
		expect(container.querySelector('button')).toHaveAttribute('disabled')
		expect(getByText('ЗАГРУЗКА')).toBeInTheDocument()
	})

	it('[test]: имеет правильный атрибут disabled и картинку при загрузке', () => {
		const loader = <img src='' alt='ТЕСТ' />

		const { container, getByAltText } = render(
			<Button variant='outlined' isLoading={true} loadingData={loader}>
				ТЕСТ
			</Button>
		)
		expect(container.querySelector('button')).toHaveAttribute('disabled')
		expect(getByAltText('ТЕСТ')).toBeInTheDocument()
	})

	it('[test]: имеет правильный атрибут className', () => {
		const { container } = render(
			<Button variant='outlined' className='TEST'>
				ТЕСТ
			</Button>
		)
		expect(container.querySelector('button')).toHaveAttribute(
			'class',
			'button button__outlined TEST'
		)
	})
})
