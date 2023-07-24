import { render } from '@testing-library/react'
import { NotFoundMessage } from './NotFoundMessage'

describe('<NotFoundMessage /> tests', () => {
  test('It should render', () => {
    render(<NotFoundMessage activeFilter="all" />)
    expect(1 + 1).toBe(2)
  })
})
