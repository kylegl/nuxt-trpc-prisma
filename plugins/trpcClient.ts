import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client'
import superjson from 'superjson'
import { loggerLink } from '@trpc/client'
import type { AppRouter } from '~/server/trpc/appRouter'

export default defineNuxtPlugin(() => {
  const client = createTRPCNuxtClient<AppRouter>({
    transformer: superjson,
    links: [
      loggerLink({
        enabled: () =>
          (process.env.NODE_ENV === 'development'
          && typeof window !== 'undefined'),
      }),
      httpBatchLink({
        url: '/api/trpc',
        maxURLLength: 2083,
      }),
    ],
  })
  return {
    provide: {
      client,
    },
  }
})
