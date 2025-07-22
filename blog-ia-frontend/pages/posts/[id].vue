<script setup>
const route = useRoute()
const post = await $fetch(`http://localhost:5000/posts/${route.params.id}`)
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-2">{{ post.title }}</h1>
    <p class="mb-4">Posts 100% Gerados por IA</p>
    <p class="mb-8">
      <a href="https://github.com/SEU-GITHUB/blog-ia" target="_blank" class="text-blue-500 underline">
        Documentação Aqui
      </a>
    </p>

    <p class="text-gray-700">{{ post.text }}</p>
    <p class="text-sm text-gray-500 mt-2">Criado em: {{ new Date(post.createdAt).toLocaleDateString() }}</p>
  </div>
</template>
