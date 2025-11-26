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
      <RouterLink to="/home" class="nav-button nav-skip">
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
    router.push('/home');
  }
};

const currentContent = computed(() => {
  return pageContents.find(p => p.id === currentPageId.value) || pageContents[0];
});
</script>

<style scoped>
.nav-button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

</style>
