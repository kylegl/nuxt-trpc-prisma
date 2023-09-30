import { createNuxtApiHandler } from 'trpc-nuxt'
import { appRouter } from '~/server/trpc/appRouter'
import { createContext } from '~/server/trpc/context'

// export API handler
export default createNuxtApiHandler({
  router: appRouter,
  createContext,
  onError({ error }) {
    if (error.code === 'INTERNAL_SERVER_ERROR')
      console.error('Houston we have a problem.', error)
  },
})
