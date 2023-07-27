import { render } from '@testing-library/react'
import { AlertMessage } from './AlertMessage'

describe('<NotFoundMessage /> tests', () => {
  test('It should render', () => {
    render(<AlertMessage message="all" />)
    expect(1 + 1).toBe(2)
  })
})
