import { customRender } from '@lib/tools/customRender'
import { PokeFilter } from './PokeFilter'

describe('<PokeFilter /> tests', () => {
  test('It should render', () => {
    customRender(
      <PokeFilter handleFilterChange={jest.fn()} activeFilter="all" />
    )
    expect(1 + 1).toBe(2)
  })
})
