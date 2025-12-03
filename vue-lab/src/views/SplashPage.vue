<template>
  <div class="splash-wrapper">

    <div class="illustration-container">
      <img :src="currentContent.imageSrc" :alt="currentContent.imageAlt">
    </div>

    <div class="text-content-container">

      <button class="main-action-button">{{ currentContent.buttonText }}</button>

      <p class="description-text">
        {{ currentContent.descriptionText }}
      </p>
    </div>

    <div class="bottom-nav">
      <RouterLink to="/register" class="nav-button nav-skip">
        SKIP
      </RouterLink>

      <div class="pagination-dots">
        <div
          v-for="i in 3"
          :key="i"
          class="dot"
          :class="{ 'active': i === currentPage.id }"
          @click="changePage(i)"
        ></div>
      </div>

      <button
        class="nav-button nav-next"
        @click="nextPage"
      >
        NEXT
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

// Дані для 3-х вступних слайдів
const pageContents = [
  {
    id: 1,
    imageSrc: 'photo1.svg',
    imageAlt: 'Ілюстрація для знайомств',
    buttonText: 'MEET NEW PEOPLE',
    descriptionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 2,
    imageSrc: 'photo2.svg',
    imageAlt: 'Ілюстрація для чату з легкістю',
    buttonText: 'CHAT WITH EASE',
    descriptionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 3,
    imageSrc: 'photo3.svg',
    imageAlt: 'Ілюстрація для знаходження спорідненої душі',
    buttonText: 'FIND YOUR SOULMATE',
    descriptionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  }
];

const currentPageId = ref(1);
const router = useRouter();

const currentPage = computed(() => {
  return pageContents.find(p => p.id === currentPageId.value) || pageContents[0];
});

const changePage = (id: number) => {
  if (id >= 1 && id <= 3) {
    currentPageId.value = id;
  }
};

const nextPage = () => {
  if (currentPageId.value < 3) {
    currentPageId.value++;
  } else {
    router.push('/register');
  }
};

const currentContent = computed(() => {
  return pageContents.find(p => p.id === currentPageId.value) || pageContents[0];
});
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --main-red: #f76767;
  --skip-grey: #f0f0f0;
  --text-color: #555;
  --button-radius: 10px;
  --content-max-width: 800px;
}

body {
  font-family: 'Lato', sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: white;
}

.splash-wrapper {
  width: 100%;
  max-width: var(--content-max-width);
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  justify-content: space-between;
}

.illustration-container {
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
}

.illustration-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}


.text-content-container {
  width: 100%;
  max-width: var(--content-max-width);
}

@media (max-width: 640px) {
  .text-content-container {
    max-width: 100%;
    padding: 0 20px;
  }
}


.main-action-button {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 18px 0;
  margin-top: 20px;
  margin-bottom: 25px;
  border: none;
  border-radius: var(--button-radius);
  background-color: var(--main-red);
  color: white;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 10px 20px -5px rgba(247, 103, 103, 0.5);
  transition: all 0.2s;
}

.main-action-button:hover {
  box-shadow: 0 5px 10px -3px rgba(247, 103, 103, 0.3);
}

.description-text {
  color: var(--text-color);
  font-size: 15px;
  line-height: 1.5;
  margin-bottom: 40px;
  font-weight: 400;
}

.bottom-nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  max-width: var(--content-max-width);
}

@media (max-width: 640px) {
  .bottom-nav {
    max-width: 100%;
    padding: 10px 20px;
  }
}


.nav-button {
  padding: 10px 20px;
  border: none;
  border-radius: var(--button-radius);
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s;
}

.nav-skip {
  background-color: var(--skip-grey);
  color: var(--text-color);
}

.nav-next {
  background-color: var(--main-red);
  color: white;
  box-shadow: 0 5px 10px -3px rgba(247, 103, 103, 0.4);
}

.pagination-dots {
  display: flex;
  gap: 10px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background-color: #ddd;
  transition: background-color 0.2s;
}

.dot.active {
  background-color: var(--main-red);
}
</style>
