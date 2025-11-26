// src/router/index.ts

import { createRouter, createWebHistory } from 'vue-router';
import SplashPage from '@/views/SplashPage.vue';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';

const commonDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const pageContent = {
  1: {
    imageSrc: 'photo1.svg',
    imageAlt: 'Ілюстрація для знайомств',
    buttonText: 'MEET NEW PEOPLE',
    currentPage: 1,
    descriptionText: commonDescription,
  },
  2: {
    imageSrc: 'photo2.svg',
    imageAlt: 'Ілюстрація для чату з легкістю',
    buttonText: 'CHAT WITH EASE',
    currentPage: 2,
    descriptionText: commonDescription,
  },
  3: {
    imageSrc: 'photo3.svg',
    imageAlt: 'Ілюстрація для знаходження спорідненої душі',
    buttonText: 'FIND YOUR SOULMATE',
    currentPage: 3,
    descriptionText: commonDescription,
  },
};


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/splash/1',
      name: 'splash1',
      component: SplashPage,
      props: () => ({ ...pageContent[1] }),
    },
    {
      path: '/splash/2',
      name: 'splash2',
      component: SplashPage,
      props: () => ({ ...pageContent[2] }),
    },
    {
      path: '/splash/3',
      name: 'splash3',
      component: SplashPage,
      props: () => ({ ...pageContent[3] }),
    },

    {
      path: '/finish',
      name: 'finish',
      component: { template: '<div class="p-5 text-center">Ласкаво просимо до Основного Додатку!</div>' },
    },

    {
      path: '/',
      redirect: '/splash/1',
    },

    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
  ],
});

export default router;
