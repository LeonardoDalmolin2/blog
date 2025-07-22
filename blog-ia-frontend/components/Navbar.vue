<template>
  <nav class="bg-white shadow-lg px-6 py-5 flex flex-col md:flex-row ">
    <div class="flex-1 mb-3 md:mb-0 md:ml-20">
      <NuxtLink to="/" class="text-2xl font-bold text-black">Blog IA</NuxtLink>
    </div>

    <div class="flex-1 text-center space-x-6 mb-3 md:mb-0">
      <NuxtLink
        to="/"
        class="font-bold text-lg hover:text-gray-800"
        :class="route.path === '/' ? 'text-gray-700' : 'text-gray-500'"
      >
        Início
      </NuxtLink>

      <NuxtLink
        to="/posts"
        class="font-bold text-lg hover:text-gray-800"
        :class="route.path === '/posts' ? 'text-gray-700' : 'text-gray-500'"
      >
        Todos os Posts
      </NuxtLink>

      <a
        href="https://www.linkedin.com/in/leonardo-dalmolin-5811ba202/"
        target="_blank"
        class="font-bold text-lg hover:text-gray-800 text-gray-500"
      >
        Contato
      </a>
    </div>

    <div class="flex-1 text-right space-x-4 items-center md:mr-20">
      <a href="https://www.linkedin.com/in/leonardo-dalmolin-5811ba202/" target="_blank" class="text-black hover:text-gray-700">
        <FontAwesomeIcon :icon="['fab', 'linkedin']" size="lg" />
      </a>
      <a href="https://github.com/LeonardoDalmolin2" target="_blank" class="text-black hover:text-gray-700">
        <FontAwesomeIcon :icon="['fab', 'github']" size="lg" />
      </a>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
