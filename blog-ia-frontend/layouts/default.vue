<template>
  <div>
    <Navbar />
    <main class="bg-gray-100 min-h-screen py-8 px-4">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
</script>
