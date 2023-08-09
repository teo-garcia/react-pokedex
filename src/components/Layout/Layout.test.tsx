import { Layout } from './Layout'
import { customRender } from '@lib/tools/customRender'
import { screen } from '@testing-library/react'

describe('<Layout /> tests', () => {
  test('It should always render Nav', () => {
    customRender(<Layout />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
