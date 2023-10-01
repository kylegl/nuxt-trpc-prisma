import { HelloInput } from '~/server/trpc/appRouter';
import { useQuery as _useQuery } from '@tanstack/vue-query'

export function useQuery() {
  const { $client } = useNuxtApp()

  function useHelloQuery(text: MaybeRefOrGetter<HelloInput['text']>) {
    const queryFn = async () => {
      const { data, error } = await $client.hello.useQuery({ text: toValue(text) })

      if (error.value)
        throw error

      return data.value
    }

    return _useQuery({ queryKey: ['hello'], queryFn })
  }

  return {
    useHelloQuery
  }
}