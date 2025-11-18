<script setup></script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition max-w-sm">
      <h1 class="text-3xl font-bold text-indigo-600 mb-4">
        Vue 3 + Tailwind CSS v4
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <p class="text-gray-600">
          Вітаю! Tailwind CSS v4 успішно працює у вашому проєкті.
        </p>

        <div class="flex justify-center md:justify-end">
          <button class="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition w-full md:w-auto">
            Натисни мене
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
