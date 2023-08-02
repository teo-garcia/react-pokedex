import { customRender } from '@lib/tools/customRender'
import { Nav } from './Nav'

describe('<Nav /> tests', () => {
  test('It should render', () => {
    customRender(<Nav />)
    expect(1 + 1).toBe(2)
  })
})
