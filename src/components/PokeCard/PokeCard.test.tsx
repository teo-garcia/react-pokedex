import { render, screen } from '@testing-library/react'
import { PokeCard } from './PokeCard'
import { type PokeCardProps } from './PokeCard'

describe('<PokeCard /> tests', () => {
  const mockPokemon: PokeCardProps = {
    name: 'Pikachu',
    figure:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/2.png',
    type: 'Electric',
    stats: [
      { name: 'hp', value: 50 },
      { name: 'attack', value: 65 },
      { name: 'defense', value: 40 },
      { name: 'speed', value: 90 },
    ],
    id: 1,
    moves: [],
    abilities: [],
  }

  test('It should render the Pokemon figure', async () => {
    render(<PokeCard {...mockPokemon} />)
    const nameElement = screen.getByAltText(mockPokemon.name)
    await expect(nameElement).toHaveAttribute('src', mockPokemon.figure)
  })

  test('It should render the Pokemon name', () => {
    render(<PokeCard {...mockPokemon} />)
    const nameElement = screen.getByText(mockPokemon.name)
    expect(nameElement).toBeInTheDocument()
  })

  test('It should render the Pokemon type', () => {
    render(<PokeCard {...mockPokemon} />)
    const typeElement = screen.getByText(mockPokemon.type)
    expect(typeElement).toBeInTheDocument()
  })

  test('It should render the Pokemon stats with appropriate icons', () => {
    render(<PokeCard {...mockPokemon} />)

    mockPokemon.stats.forEach((stat) => {
      expect(screen.getByTestId(stat.name)).toBeInTheDocument()
      expect(screen.getByText(stat.value)).toBeInTheDocument()
    })
  })
})
