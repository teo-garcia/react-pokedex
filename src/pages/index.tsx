import { Seo } from '@components/Seo/Seo'
import { PokeList } from '@features/PokeList/PokeList'
import { ChangeEvent, useState } from 'react'

const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const selectedFilter = evt.currentTarget.name
    setActiveFilter(selectedFilter)
    localStorage.setItem('activeFilter', selectedFilter)
  }

  return (
    <>
      <Seo title="Pokedex | App" />
      <PokeList activeFilter={activeFilter} handleFilterChange={handleChange} />
    </>
  )
}

export default HomePage
