import { App } from './App'
import { customRender } from '@lib/tools/customRender'

describe('<App /> tests', () => {
  it('Should render without crashing', () => {
    customRender(<App />)
    expect(true).toBe(true)
  })
})
