import { render } from '@testing-library/react'
import { Nav } from './Nav'

describe('<Nav /> tests', () => {
  test('It should render', () => {
    render(<Nav />)
    expect(1 + 1).toBe(2)
  })
})
