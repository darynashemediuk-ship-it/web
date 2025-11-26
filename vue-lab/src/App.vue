<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { computed } from 'vue';

const router = useRouter();

const isContactPage = computed(() => {
  return router.currentRoute.value.path === '/contact';
});
</script>

<template>

  <header v-if="!isContactPage">
    <div class="max-w-4xl mx-auto">
      <nav class="p-4 bg-gray-100 rounded-b-lg shadow-md">
        <RouterLink to="/contact">Dating App</RouterLink>
      </nav>
    </div>
  </header>

  <main :class="{'max-w-4xl mx-auto mt-5': !isContactPage}">
    <RouterView />
  </main>
</template>
