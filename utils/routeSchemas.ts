import { z } from 'zod'

export const helloInputSchema = z.object({
  text: z.string(),
})