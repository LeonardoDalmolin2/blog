<script setup>
const posts = await $fetch('http://localhost:5000/posts')
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-2">Blog IA</h1>
    <p class="mb-4">Posts 100% Gerados por IA</p>
    <p class="mb-8">
      <a href="https://github.com/SEU-GITHUB/blog-ia" target="_blank" class="text-blue-500 underline">
        Documentação Aqui
      </a>
    </p>

    <div v-if="posts.length">
      <div v-for="post in posts.slice(0,5)" :key="post._id" class="mb-6 border-b pb-4">
        <h2 class="text-xl font-semibold">{{ post.title }}</h2>
        <p class="text-gray-700">{{ post.text }}</p>
        <p class="text-sm text-gray-500 mt-2">Criado em: {{ new Date(post.createdAt).toLocaleDateString() }}</p>
        <NuxtLink :to="`/posts/${post._id}`" class="text-blue-500 underline">Ler mais</NuxtLink>
      </div>
    </div>
    <div v-else>
      <p>Nenhum post encontrado.</p>
    </div>
  </div>
</template>
