import type { H3Event } from 'h3'
import type { inferAsyncReturnType } from '@trpc/server'
import { prisma } from '~/prisma/prisma'
import { serverSupabaseUser } from '#supabase/server'

export async function createContext(event: H3Event) {
  const user = await serverSupabaseUser(event)

  return {
    event,
    prisma,
    user,
  }
}
export type Context = inferAsyncReturnType<typeof createContext>
