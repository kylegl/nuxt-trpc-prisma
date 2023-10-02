<script setup lang="ts">
  const props = defineProps<{
    adSlot: string
    adFormat?: string
    adStyle?: Record<string, any>
    hide?: boolean
    type?: 'vertical' // ad new options here & add css to main.css
  }>()

  // const { adStyle } = useAd({ hide: props.hide, adStyle: props.adStyle })
</script>

<template>
  <div>
    <adsbygoogle
      :class="type"
      :ad-style="adStyle" :ad-slot="adSlot" :ad-format="adFormat"
    />
  </div>
</template>
