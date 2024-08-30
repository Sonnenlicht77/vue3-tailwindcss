<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconSvg from './icons/icon_svg.vue';
import { reactive } from 'vue';

const topNav = reactive([
  {
    name: '文档',
    path: '/doc'
  },
  {
    name: 'BLOG',
    path: '/blog'

  },
  {
    name: 'DEMO',
    path: '/demo'

  }
])
</script>
<template>
  <div class="w-full h-20 flex justify-between items-center bg-white  px-5 fixed border-b border-solid border-sky-400">
    <div class="flex justify-between items-center">
      <icon-svg class="text-sky-400/100 w-10 h-10"></icon-svg>
      <h1 class="ml-3 text-[24px] font-bold">
        <router-link to="/">Tailwind CSS 在 Vue 项目中使用</router-link>
      </h1>
    </div>
    <div class="flex justify-between items-center">
      <div v-for="item in topNav" :key="item.path"
        class="font-mono mx-1 cursor-pointer text-gray-800 hover:text-sky-500 hover:bg-sky-2">
        <RouterLink :to="item.path">{{ item.name }}</RouterLink>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>