import { Seo } from '@components/Seo/Seo'
import { useParams } from 'react-router-dom'

const PokemonPage = () => {
  const { name = '' } = useParams()
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
  return (
    <>
      <Seo title={`Pokedex | ${capitalizedName}`} />
    </>
  )
}

export default PokemonPage
