import { render, screen } from '@testing-library/react'
import { PokePreview } from './PokePreview'
import { pokemonMock } from '../../mocks/pokemonMock'

describe('<PokePreview /> tests', () => {
  test('It should render pokemon name and figure', () => {
    render(<PokePreview pokemon={pokemonMock} />)
    expect(screen.getByText(pokemonMock.name)).toBeInTheDocument()
    expect(screen.getByAltText(pokemonMock.name)).toBeInTheDocument()
  })
})
