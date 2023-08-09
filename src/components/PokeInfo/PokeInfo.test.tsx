import { PokeInfo } from './PokeInfo'
import { render, screen } from '@testing-library/react'
import { pokemonMock } from '../../mocks/pokemonMock'

describe('<PokeInfo /> tests', () => {
  test('It should render heading', () => {
    render(<PokeInfo pokemon={pokemonMock} />)
    expect(screen.getByText(/basic info/i)).toBeInTheDocument()
  })

  test('It should render pokemon type', () => {
    render(<PokeInfo pokemon={pokemonMock} />)
    expect(screen.getByText(/type:/i)).toBeInTheDocument()
    expect(screen.getByText(pokemonMock.type)).toBeInTheDocument()
  })

  test('It should render pokemon stats', () => {
    render(<PokeInfo pokemon={pokemonMock} />)
    expect(screen.getByText(/stats:/i)).toBeInTheDocument()
    pokemonMock.stats.forEach((stat) => {
      expect(screen.getByTestId(stat.name)).toBeInTheDocument()
      expect(screen.getByText(stat.value)).toBeInTheDocument()
    })
  })

  test('It should render abilities', () => {
    render(<PokeInfo pokemon={pokemonMock} />)
    expect(screen.getByText(/abilities:/i)).toBeInTheDocument()
    pokemonMock.abilities.forEach((ability) => {
      expect(screen.getByText(ability)).toBeInTheDocument()
    })
  })

  test('It should render moves', () => {
    render(<PokeInfo pokemon={pokemonMock} />)
    expect(screen.getByText(/moves:/i)).toBeInTheDocument()
    pokemonMock.moves.forEach((move) => {
      expect(screen.getByText(move)).toBeInTheDocument()
    })
  })
})
