import { helloInputSchema } from '~/utils/routeSchemas';
import type { inferRouterOutputs } from '@trpc/server'
import type { TRPCClientError } from '@trpc/client'
import { publicProcedure, router } from '~/server/trpc/trpc'
import { z } from 'zod'

// type definition of API
export type AppRouter = typeof appRouter
export type RouterOutput = inferRouterOutputs<AppRouter>
export type ErrorOutput = TRPCClientError<AppRouter>

// types API procedures
export type HelloInput = z.infer<typeof helloInputSchema>
export type HelloOutput = RouterOutput['hello']

// router
export const appRouter = router({
  hello: publicProcedure
    .input(helloInputSchema)
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      }
    }),
})
