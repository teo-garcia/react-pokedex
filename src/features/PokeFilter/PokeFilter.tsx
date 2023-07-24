import type { PokemonResponse } from '@lib/types/client'
import clsx from 'clsx'
import { pokemonAPI } from '@lib/tools/pokemon'
import { useQuery } from '@tanstack/react-query'
import type { ChangeEvent } from 'react'

export type PokeFilterProps = {
  handleFilterChange: (evt: ChangeEvent<HTMLInputElement>) => void
  activeFilter: string
}

const PokeFilter = (props: PokeFilterProps) => {
  const { activeFilter, handleFilterChange } = props
  const { data, isLoading, isError } = useQuery<PokemonResponse>({
    queryKey: ['filters'],
    queryFn: pokemonAPI.getPokemonTypes,
  })

  if (isLoading || isError) return null

  const types = [{ name: 'all' }, ...data.results]

  return (
    <section className="mx-auto flex flex-col gap-y-4 ">
      <h2 className="text-3xl font-bold lg:text-2xl">Filter:</h2>
      <form className="flex flex-wrap gap-2 md:gap-y-3">
        {types.map((type) => {
          const isActive = type.name === activeFilter
          return (
            <label
              key={type.name}
              className={clsx(
                'cursor-pointer rounded-lg bg-slate-950 px-2 py-1 text-sm font-bold capitalize text-white md:text-base',
                {
                  ['border border-black bg-slate-50 text-black']: isActive,
                }
              )}
            >
              <input
                className="invisible h-0 w-0"
                type="radio"
                name={type.name}
                checked={isActive}
                onChange={handleFilterChange}
              />
              {type.name}
            </label>
          )
        })}
      </form>
    </section>
  )
}

export { PokeFilter }
