import { render } from '@testing-library/react'
import { Spinner } from './Spinner'

describe('<Spinner /> tests', () => {
  test('It should render', () => {
    render(<Spinner />)
    expect(1 + 1).toBe(2)
  })
})
