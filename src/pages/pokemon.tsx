import { Seo } from '@components/Seo/Seo'
import { PokeDetail } from '@features/PokeDetail/PokeDetail'
import { useParams } from 'react-router-dom'

const PokemonPage = () => {
  const { name = '' } = useParams()
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
  return (
    <>
      <Seo title={`Pokedex | ${capitalizedName}`} />
      <PokeDetail name={name} />
    </>
  )
}

export default PokemonPage
