import { PokeInfo } from '@components/PokeInfo/PokeInfo'
import { PokePreview } from '@components/PokePreview/PokePreview'
import { usePokemonQuery } from '@lib/tools/pokemon'

export type PokeDetailProps = {
  name: string
}

const PokeDetail = (props: PokeDetailProps) => {
  const { name } = props
  const { data: pokemon, isLoading, isError } = usePokemonQuery(name)

  if (isLoading || isError) return null

  return (
    <section className="mx-auto flex w-9/12 flex-col gap-x-0 gap-y-6 py-8 lg:w-10/12 lg:flex-row lg:justify-between lg:py-32 xl:py-48">
      <PokePreview pokemon={pokemon} />
      <PokeInfo pokemon={pokemon} />
    </section>
  )
}

export { PokeDetail }
