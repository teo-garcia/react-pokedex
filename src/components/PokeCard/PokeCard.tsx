import type {
  Pokemon,
  PokemonBasicInfo,
  PokemonRichInfo,
} from '@lib/types/client'
import { useQuery } from '@tanstack/react-query'

export type PokeCardProps = PokemonBasicInfo

const fetchPokemon = (url: string) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
}

const PokeCard = (props: PokeCardProps) => {
  const { name, url } = props
  const { data, isLoading, error } = useQuery<PokemonRichInfo>({
    queryKey: [name, url],
    queryFn: () => fetchPokemon(url),
  })

  if (isLoading || !data || error) return null

  const pokemon = getPokemonCardData(data)

  return (
    <li className="py-4 h-56 w-48 border border-slate-400 rounded-lg relative bg-gradient-to-b from-blue-500 to-blue-700 animate-fade">
      <img
        className="w-9/12 absolute left-2/4 top-2 -translate-x-1/2"
        alt=""
        src={pokemon.figure}
      />
      <div className="h-full flex flex-col justify-end gap-y-1">
        <p className="text-center capitalize text-xl font-bold text-white">
          {name}
        </p>
        <p className="text-center capitalize text-sm underline text-white">
          {pokemon.type}
        </p>
      </div>
    </li>
  )
}

const getPokemonCardData = (data: PokemonRichInfo): Pokemon => {
  const { id, name, sprites, types } = data
  return {
    id,
    name,
    figure: sprites.other['official-artwork']['front_shiny'],
    type: types[0].type.name,
  }
}

export { PokeCard }
