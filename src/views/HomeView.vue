<script setup lang="ts">
import { reactive } from 'vue';

import navs from '@/assets/data.json'

const navLists = reactive(navs)
</script>
<template>
  <div class="container flex justify-between pt-20 ">
    <!-- 侧边栏 -->
    <div class="w-1/5 h-screen bg-slate-100 overflow-y-auto">
      <nav class="px-3">
        <template v-for="(nav) in navLists" :key="nav.id">
          <div class="text-gray-600 text-base leading-10">{{ nav.name }}</div>
          <template v-if="nav.chidren && nav.chidren.length">
            <template v-for="navc in nav.chidren" :key="navc.id">
              <div class="text-gray-600 text-sm pl-3 leading-6">{{ navc.name }}</div>
            </template>
          </template>
        </template>
      </nav>
    </div>
    <!-- 内容 -->
    <div class="w-4/5 overflow-y-auto overflow-x-hidden">
      <div class="p-6">
        <!-- 1. 简述 -->
        <div class="desc">
          <p>
            学习
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>