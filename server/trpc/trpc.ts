import { initTRPC } from '@trpc/server'
import superjson from 'superjson'
import type { Context } from '~/server/trpc/context'

// Avoid exporting the entire t-object since it's not very
// descriptive and can be confusing to newcomers used to t
// meaning translation in i18n libraries.
const t = initTRPC.context<Context>().create({
  transformer: superjson,
})

// Base router and procedure helpers
export const router = t.router
export const publicProcedure = t.procedure
