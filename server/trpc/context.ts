import type { H3Event } from 'h3'
import type { inferAsyncReturnType } from '@trpc/server'
import { prisma } from '~/prisma/prisma'

export async function createContext(event: H3Event) {
  return {
    prisma,
    event,
  }
}
export type Context = inferAsyncReturnType<typeof createContext>
