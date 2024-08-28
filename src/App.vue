<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Icon_svg from './components/icons/icon_svg.vue';

</script>

<template>
  <Icon_svg></Icon_svg>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>



  <RouterView />
</template>

<style scoped></style>
