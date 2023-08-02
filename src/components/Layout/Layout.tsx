import { Nav } from '@features/Nav/Nav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export { Layout }
