/* Components Types */

export type ProvidersProps = {
  children: React.ReactNode
}

export type SeoProps = {
  description?: string
  ogDescription?: string
  ogImage?: string
  ogTitle?: string
  title: string
}

export type BannerProps = {
  title: string
}

export type ThemeMode = 'light' | 'dark'

export type PokemonResponse = {
  results: Array<PokemonBasicInfo>
  next: string
}

export type PokemonBasicInfo = {
  name: string
  url: string
}

export type PokemonRichInfo = {
  id: number
  name: string
  sprites: {
    other: {
      ['official-artwork']: {
        ['front_shiny']: string
      }
    }
  }
  types: Array<{
    type: {
      name: string
    }
  }>
}

export type Pokemon = {
  name: string
  id: number
  figure: string
  type: string
}

export type UsePokemonResult = {
  isLoading: boolean
  isError: boolean
  data: PokemonRichInfo[]
}
