import { render, screen } from '@testing-library/react'
import { PokeCard } from './PokeCard'
import { pokemonMock } from '../../mocks/pokemonMock'

describe('<PokeCard /> tests', () => {
  test('It should render the Pokemon figure', async () => {
    render(<PokeCard {...pokemonMock} />)
    const nameElement = screen.getByAltText(pokemonMock.name)
    await expect(nameElement).toHaveAttribute('src', pokemonMock.figure)
  })

  test('It should render the Pokemon name', () => {
    render(<PokeCard {...pokemonMock} />)
    const nameElement = screen.getByText(pokemonMock.name)
    expect(nameElement).toBeInTheDocument()
  })

  test('It should render the Pokemon type', () => {
    render(<PokeCard {...pokemonMock} />)
    const typeElement = screen.getByText(pokemonMock.type)
    expect(typeElement).toBeInTheDocument()
  })

  test('It should render the Pokemon stats with appropriate icons', () => {
    render(<PokeCard {...pokemonMock} />)

    pokemonMock.stats.forEach((stat) => {
      expect(screen.getByTestId(stat.name)).toBeInTheDocument()
      expect(screen.getByText(stat.value)).toBeInTheDocument()
    })
  })
})
