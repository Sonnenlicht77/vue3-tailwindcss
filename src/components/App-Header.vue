<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconSvg from './icons/icon_svg.vue';
</script>
<template>
  <div class="w-full h-20 bg-slate-100 flex justify-between items-center  px-5 fixed">
    <div class="flex justify-between items-center">
      <icon-svg class="text-sky-400/100 w-10 h-10"></icon-svg>
      <h1 class="ml-3 text-[24px] font-bold">Tailwind CSS 从 0 到 Demo</h1>
    </div>
    <div class="flex justify-between items-center">
      <RouterLink to="/">文档</RouterLink>
      <RouterLink to="/about">关于</RouterLink>
      <div>BLOG</div>
      <div>DEMO</div>
      <div>切换模式</div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>