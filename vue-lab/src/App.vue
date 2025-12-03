<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { computed } from 'vue';

const router = useRouter();

const isAuthPage = computed(() => {
  const path = router.currentRoute.value.path;
  return path === '/login' || path === '/register';
});

const isStandardPage = computed(() => {
  return !isAuthPage.value;
});
</script>

<template>
  <main :class="{'auth-layout': isAuthPage, 'max-w-6xl mx-auto mt-5': isStandardPage}">
    <RouterView />
  </main>
</template>

<style>

html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}

.auth-layout {
  min-height: 100vh;
  width: 100%;
  background-color: #f4625b;

  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
