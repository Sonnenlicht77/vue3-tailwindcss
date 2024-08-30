<script setup lang="ts">
import DocContent2 from '@/components/DocContent2/index.vue';
import { reactive } from 'vue';

const docContent2 = reactive([
    {
        id: '001',
        title: '说明',
        contents: [
            {
                type: 'paragraph',
                part: '自己在学习过程中，总是前学后忘。所以边学边做一个使用教程帮助自己记忆和后续的查找。'
            },
            {
                type: 'paragraph',
                part: '也希望可以帮助到同样学习的同学。'
            }
        ]
    },
    {
        id: '002',
        title: '官方地址',
        contents: [
            {
                type: 'href',
                part: 'https://tailwindcss.com/'
            }
        ]
    },
    {
        id: '003',
        title: '在线练习',
        contents: [
            {
                type: 'href',
                part: 'https://play.tailwindcss.com/'
            }
        ]
    }
])

</script>
<template>
    <div class="p-3">
        <p class="indent-8 text-gray-600">
            学习在vue项目中使用tailwindcss
        </p>
        <div v-for="item in docContent2" :key="item.id">
            <DocContent2 :title="item.title" :contents="item.contents"></DocContent2>
        </div>
    </div>
</template>
<style scoped lang="less"></style>