import React from 'react'
import { render } from '@testing-library/react'
import { Card } from '../card'
import { Button } from '../../button'
import '@testing-library/jest-dom'

describe('[Component]: Card', () => {
	it('[test]: корректно отображаются без элементов', () => {
		const { getByText } = render(<Card title='ТЕСТ' />)
		expect(getByText('ТЕСТ')).toBeInTheDocument()
	})

	it('[test]: корректно отображает с элементами', () => {
		const { getByText, container } = render(
			<Card
				altCdn='АЛТ'
				cdn='ССЫЛКА'
				description='ОПИСАНИЕ'
				price={100}
				title='ЗАГОЛОВОК'
				buttons={
					<>
						<Button variant='contained'>КУПИТЬ</Button>
						<Button variant='contained'>В КОРЗИНУ</Button>
					</>
				}
			/>
		)

		expect(container.querySelector('img')).toHaveAttribute('alt', 'АЛТ')
		expect(container.querySelector('img')).toHaveAttribute('src', 'ССЫЛКА')
		expect(getByText('100')).toBeInTheDocument()
		expect(getByText('В КОРЗИНУ')).toBeInTheDocument()
		expect(getByText('ЗАГОЛОВОК')).toBeInTheDocument()
		expect(getByText('КУПИТЬ')).toBeInTheDocument()
		expect(getByText('ОПИСАНИЕ')).toBeInTheDocument()
	})

	it('[test]: корректно отображается с дочерними элементами', () => {
		const { getByText } = render(
			<Card>
				<div>ТЕСТ</div>
			</Card>
		)

		expect(getByText('ТЕСТ')).toBeInTheDocument()
	})

	it('[test]: корректно задается атрибут alt у картинки если его не передали', () => {
		const { getByAltText } = render(<Card cdn='ССЫЛКА' />)
		expect(getByAltText('Изображение карточки')).toBeInTheDocument()
	})
})
