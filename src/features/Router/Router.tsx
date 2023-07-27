import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from '@pages/index'
import NotFoundPage from '@pages/404'
import PokemonPage from '@pages/pokemon'

const homePage = {
  path: '/',
  element: <HomePage />,
}
const notFoundPage = {
  path: '*',
  element: <NotFoundPage />,
}

const pokemonPage = {
  path: 'pokemon/:name',
  element: <PokemonPage />,
}

const routes = [homePage, pokemonPage, notFoundPage]
const router = createBrowserRouter(routes)

export type RouterProps = {
  children?: React.ReactNode
}

const Router = (props: RouterProps) => {
  return <RouterProvider router={router} {...props} />
}

export { Router }
