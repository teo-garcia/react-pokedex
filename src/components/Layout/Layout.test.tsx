import { Layout } from './Layout'
import { customRender } from '@lib/tools/customRender'

describe('<Layout /> tests', () => {
  test('It should render', () => {
    customRender(<Layout />)
    expect(1 + 1).toBe(2)
  })
})
