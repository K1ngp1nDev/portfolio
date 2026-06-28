<script setup lang="ts">
const colorMode = useColorMode()
function toggle() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    type="button"
    class="btn btn-outline !px-3 !py-2"
    :aria-label="colorMode.value === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
    @click="toggle"
  >
    <ClientOnly>
      <span class="text-base leading-none">{{ colorMode.value === 'dark' ? '☀︎' : '☾' }}</span>
      <template #fallback><span class="text-base leading-none">☾</span></template>
    </ClientOnly>
  </button>
</template>
