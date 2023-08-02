import { Pokemon } from '@lib/types/client'

export type PokePreviewProps = {
  pokemon?: Pokemon
}

const PokePreview = (props: PokePreviewProps) => {
  const { pokemon } = props
  return (
    <article className="flex flex-col items-center justify-center gap-y-12 lg:w-5/12 lg:justify-start">
      <h1 className="text-center text-6xl font-bold capitalize text-blue-700 dark:text-blue-500 xl:text-8xl">
        {pokemon?.name}
      </h1>
      <img
        className="h-64 w-64 lg:h-80 lg:w-80"
        src={pokemon?.figure}
        alt={pokemon?.name}
      />
    </article>
  )
}

export { PokePreview }
