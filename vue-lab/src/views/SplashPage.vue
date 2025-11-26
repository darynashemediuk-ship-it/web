<template>
  <div class="splash-wrapper">

    <div class="illustration-container">
      <img :src="imageSrc" :alt="imageAlt">
    </div>

    <div class="text-content-container">

      <button class="main-action-button">{{ buttonText }}</button>

      <p class="description-text">
        {{ descriptionText }}
      </p>
    </div>

    <div class="bottom-nav">

      <RouterLink to="/finish" class="nav-button nav-skip">
        SKIP
      </RouterLink>

      <div class="pagination-dots">
        <RouterLink
          v-for="i in 3"
          :key="i"
          :to="`/splash/${i}`"
          class="dot-link"
        >
          <div class="dot" :class="{ 'active': i === currentPage }"></div>
        </RouterLink>
      </div>

      <RouterLink
        v-if="currentPage < 3"
        :to="`/splash/${currentPage + 1}`"
        class="nav-button nav-next"
      >
        NEXT
      </RouterLink>

      <RouterLink
        v-else
        to="/finish"
        class="nav-button nav-next"
      >
        START
      </RouterLink>

    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

const props = defineProps<{
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  currentPage: number; // 1, 2, або 3
  descriptionText: string;
}>();
</script>

<style scoped>

.nav-button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.dot-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
  cursor: pointer;
  text-decoration: none;
}
</style>
