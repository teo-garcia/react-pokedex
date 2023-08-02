import { PokeDetail } from './PokeDetail'
import { customRender } from '@lib/tools/customRender'

describe('<PokeDetail /> tests', () => {
  test('It should render', () => {
    customRender(<PokeDetail name="pikachu" />)
    expect(1 + 1).toBe(2)
  })
})
