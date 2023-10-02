<script setup lang="ts">

// how to import this type from the server?
import { HelloInput } from '~/server/trpc/appRouter'

const { useHelloQuery } = useQuery()

const input = ref<HelloInput['text']>('')

const { data } = useHelloQuery(input)
</script>

<template>
<div>
  <h1>home page</h1>
  <div>{{ data }}</div>
  <Ad ad-slot="slot"/>
</div>
</template>