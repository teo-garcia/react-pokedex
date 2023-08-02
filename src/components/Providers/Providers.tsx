import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { HelmetProvider } from 'react-helmet-async'
import { Router } from '@features/Router/Router'
import { Nav } from '@features/Nav/Nav'

const isDEV = process.env.NODE_ENV === 'development'

const queryClient = new QueryClient()

const Providers = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Router />
      </HelmetProvider>
      {isDEV && <ReactQueryDevtools />}
    </QueryClientProvider>
  )
}

export { Providers }
