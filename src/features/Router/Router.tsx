import type { ReactNode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from '@pages/index'
import NotFoundPage from '@pages/404'
import PokemonPage from '@pages/pokemon'
import { Layout } from '@components/Layout/Layout'

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

const layout = {
  element: <Layout />,
  children: [homePage, notFoundPage, pokemonPage],
}

const routes = [layout]
const router = createBrowserRouter(routes)

export type RouterProps = {
  children?: ReactNode
}

const Router = (props: RouterProps) => {
  return <RouterProvider router={router} {...props} />
}

export { Router }
