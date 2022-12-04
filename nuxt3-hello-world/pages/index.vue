<script setup>
const appConfig = useAppConfig()
console.info(appConfig.foo)

const runtimeConfig = useRuntimeConfig()
console.info(runtimeConfig.public.apiBase)

const version = 2 + 1
</script>

<template>
  <div class="hello">
    Hello Nuxt {{ version }}!
  </div>
  <div>
    <NuxtLink to="/teleport">About</NuxtLink>
  </div>
</template>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 10rem;
}
</style>
