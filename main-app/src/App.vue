<script setup>
import { defineAsyncComponent } from 'vue'

const App1 = defineAsyncComponent(() => import('app1/App'))
const App2 = defineAsyncComponent(() => import('app2/App'))
</script>

<template>
  <div>
    <App1 />
    <App2 />
  </div>
</template>

<style lang="scss" scoped>

</style>