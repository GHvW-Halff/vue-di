<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar />
  <div>
    <RouterView />
  </div>
</template>


