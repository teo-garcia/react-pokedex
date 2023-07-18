import { Seo } from '@components/Seo/Seo'
import { PokeFilter } from '@features/PokeFilter/PokeFilter'
import { PokeList } from '@features/PokeList/PokeList'
import { ChangeEvent, useState } from 'react'

const HomePage = () => {
  const [filters, setFilters] = useState(['normal'])
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    let newFilters
    const selectedCheckbox = evt.currentTarget.name

    if (filters.includes(selectedCheckbox)) {
      newFilters = filters.filter((filter) => filter !== selectedCheckbox)
    } else {
      newFilters = [...filters, selectedCheckbox]
    }

    setFilters(newFilters)
    localStorage.setItem('filters', JSON.stringify(newFilters))
  }

  return (
    <>
      <Seo title="Pokedex | App" />
      <PokeFilter filters={filters} onChange={handleChange} />
      <PokeList filters={filters} />
    </>
  )
}

export default HomePage
