<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([])
const page = ref(0)
const limit = 10
const loading = ref(false)

const fetchPosts = async () => {
  loading.value = true
  const newPosts = await $fetch(`http://localhost:5000/posts`)
  posts.value.push(...newPosts.slice(page.value * limit, (page.value + 1) * limit))
  page.value++
  loading.value = false
}

const handleScroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10 && !loading.value) {
    fetchPosts()
  }
}

onMounted(() => {
  fetchPosts()
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-2">Todos os Posts</h1>
    <p class="mb-4">Posts 100% Gerados por IA</p>
    <p class="mb-8">
      <a href="https://github.com/SEU-GITHUB/blog-ia" target="_blank" class="text-blue-500 underline">
        Documentação Aqui
      </a>
    </p>

    <div v-for="post in posts" :key="post._id" class="mb-6 border-b pb-4">
      <h2 class="text-xl font-semibold">{{ post.title }}</h2>
      <p class="text-gray-700">{{ post.text }}</p>
      <p class="text-sm text-gray-500 mt-2">Criado em: {{ new Date(post.createdAt).toLocaleDateString() }}</p>
      <NuxtLink :to="`/posts/${post._id}`" class="text-blue-500 underline">Ler mais</NuxtLink>
    </div>

    <p v-if="loading">Carregando...</p>
  </div>
</template>
