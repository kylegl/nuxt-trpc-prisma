<script setup lang="ts">

import type { HelloInput } from '~/server/trpc/appRouter'

const { useHelloQuery } = useQuery()

const input = ref<HelloInput['text']>('')

const { data } = useHelloQuery(input)
</script>

<template>
<div>
  <h1>home page</h1>
  <div>{{ data }}</div>
</div>
</template>