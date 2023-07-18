import { PokemonResponse } from '@lib/types/client'
import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import { ChangeEvent, useState } from 'react'

const getPokemonTypes = (): Promise<PokemonResponse> => {
  return fetch('https://pokeapi.co/api/v2/type')
    .then((res) => res.json())
    .then((res) => res)
}

export type PokeFilterProps = {
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void
  filters: Array<string>
}

const PokeFilter = (props: PokeFilterProps) => {
  const { filters, onChange } = props
  const { data, isLoading, isError } = useQuery<PokemonResponse>({
    queryKey: ['filters'],
    queryFn: getPokemonTypes,
  })

  if (isLoading || isError) return null

  const types = data.results

  return (
    <ul className="pt-12 flex flex-wrap justify-center w-10/12 md:w-8/12 xl:w-5/12 gap-3 mx-auto">
      {types.map((type) => {
        const isActive = filters.includes(type.name)
        return (
          <li key={type.name}>
            <label
              className={clsx(
                'bg-blue-500 rounded-lg py-1 px-2 capitalize text-white font-bold cursor-pointer',
                {
                  ['bg-blue-800']: isActive,
                }
              )}
            >
              {type.name}
              <input
                className="invisible w-0 h-0"
                type="checkbox"
                name={type.name}
                defaultChecked={type.name === 'normal'}
                checked={isActive}
                onChange={onChange}
              />
            </label>
          </li>
        )
      })}
    </ul>
  )
}

export { PokeFilter }
