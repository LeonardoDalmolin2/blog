<script setup>
import { ref, onMounted } from 'vue';
import { marked } from 'marked';

const posts = ref([]);

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  if (date.toDateString() === today.toDateString()) {
    return 'Hoje';
  } else if (date.toDateString() === yesterday.toDateString()) {
    return 'Ontem';
  } else {
    return date.toLocaleDateString();
  }
}

onMounted(async () => {
  const res = await fetch('http://localhost:5000/posts');
  const data = await res.json();
  posts.value = data.slice(0, 5).map(post => ({
    ...post,
    htmlContent: marked(post.text)
  }));
});
</script>

<template>
  <div class="container max-w-xl mx-auto">
    <div class="text-center mb-8">
      <h1 class="text-7xl font-bold mb-4 text-black">Blog IA</h1>
      <p class="text-lg font-bold mb-2 text-black">Posts 100% Gerados por IA</p>
      <p class="text-md font-bold text-gray-600">
        <a href="https://github.com/SEU-GITHUB/blog-ia" target="_blank">
          Documentação Aqui
        </a>
      </p>
    </div>

    <div class="max-w-2xl mx-auto space-y-6">
      <div v-for="post in posts" :key="post._id" class="bg-white shadow-lg p-4">
        <div class="flex justify-between items-center border-b pb-2 mb-2">
          <h2 class="text-xl font-bold text-black mr-4">{{ post.title }}</h2>
          <p class="text-sm text-gray-500 whitespace-nowrap">{{ formatDate(post.createdAt) }}</p>
        </div>
        <div class="prose text-gray-700 line-clamp-5 overflow-hidden">
          <div v-html="post.htmlContent"></div>
        </div>
        <NuxtLink :to="`/posts/${post._id}`" class="text-blue-500 underline mt-2 inline-block">Ler mais</NuxtLink>
      </div>
    </div>

    <div class="text-center mt-8">
      <NuxtLink to="/posts" class="text-lg font-bold text-black underline">Ver tudo</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-5 {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
