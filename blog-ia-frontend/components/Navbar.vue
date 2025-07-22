<template>
  <nav class="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">
    <!-- Esquerda -->
    <div>
      <NuxtLink to="/" class="text-xl font-bold">Blog IA</NuxtLink>
    </div>

    <!-- Centro -->
    <div class="space-x-4">
      <NuxtLink to="/" class="hover:underline">Início</NuxtLink>
      <NuxtLink to="/posts" class="hover:underline">Todos os Posts</NuxtLink>
      <a href="https://www.linkedin.com/in/SEU-LINKEDIN" target="_blank" class="hover:underline">Contato</a>
    </div>

    <!-- Direita -->
    <div class="space-x-4">
      <a href="https://www.linkedin.com/in/SEU-LINKEDIN" target="_blank">
        <i class="fab fa-linkedin fa-lg"></i>
      </a>
      <a href="https://github.com/SEU-GITHUB" target="_blank">
        <i class="fab fa-github fa-lg"></i>
      </a>
    </div>
  </nav>
</template>

<script setup>
// Se usar FontAwesome, instale e configure no projeto para os ícones funcionarem.
// Por enquanto, substitua por emojis ou texto se preferir.
</script>
