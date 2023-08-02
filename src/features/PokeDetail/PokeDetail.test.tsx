import { render } from '@testing-library/react'
import { PokeDetail } from './PokeDetail'

describe('<PokeDetail /> tests', () => {
  test('It should render', () => {
    render(<PokeDetail />)
    expect(1 + 1).toBe(2)
  })
})
