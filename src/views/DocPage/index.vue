<script setup lang="ts">
import navs from '@/assets/data.json'
import router from '@/router';
import { reactive, ref } from 'vue';
import { RouterView } from 'vue-router'

import DocContent from '@/components/DocContent/index.vue';

// console.log(router.currentRoute.value.path);
const navLists = reactive(navs);
const curTitle = ref<string>('简介');
function handleTitleClick(nav: any) {
    router.push('/doc' + nav.path)
    curTitle.value = nav.name
}


</script>
<template>
    <div class="w-full h-auto flex justify-between pt-20">
        <!-- 侧边栏 -->
        <div class="w-1/5 h-auto overflow-visible">
            <nav class="px-3 overflow-y-scroll">
                <template v-for="(nav) in navLists" :key="nav.id">
                    <div class="text-gray-600 text-base leading-10 cursor-pointer hover:text-sky-500"
                        @click="handleTitleClick(nav)">
                        {{ nav.name }}
                    </div>
                    <template v-if="nav.chidren && nav.chidren.length">
                        <template v-for="navc in nav.chidren" :key="navc.id">
                            <div class="text-gray-600 text-sm pl-3 leading-6 cursor-pointer hover:text-sky-500">{{
                                navc.name }}</div>
                        </template>
                    </template>
                </template>
            </nav>
        </div>
        <!-- 内容 -->
        <div class="w-4/5 h-auto">
            <DocContent :curTitle></DocContent>
            <RouterView>
            </RouterView>

        </div>
    </div>
</template>
<style scoped lang="less"></style>