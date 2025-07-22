<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { marked } from 'marked';

const route = useRoute()
const post = await $fetch(`http://localhost:5000/posts/${route.params.id}`)
const htmlContent = ref('');

onMounted(async () => {
  const res = await fetch(`http://localhost:5000/posts/${route.params.id}`);
  const data = await res.json();
  post.value = data;
  htmlContent.value = marked(data.text);
});
</script>

<template>
    <div class="container max-w-xl mx-auto">
        <div class="text-center mb-8">
        <h1 class="text-3xl font-bold mb-4 w-full">{{ post?.title }}</h1>
        <p class="text-lg font-bold mb-2 text-black">Posts 100% Gerados por IA</p>
        <p class="text-md font-bold text-gray-600">
        <a href="https://github.com/LeonardoDalmolin2" target="_blank">
            Documentação Aqui
        </a>
        </p>
        </div>
        <div class="bg-white shadow-lg p-4 flex justify-between items-center border-b pb-2 mb-2">
            <div class="prose" v-html="htmlContent"></div>
        </div>
        <p class="prose text-gray-700 line-clamp-5 overflow-hidden">Criado em: {{ new Date(post.createdAt).toLocaleDateString() }}</p>
    </div>


</template>
