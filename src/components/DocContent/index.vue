<script setup lang="ts">
interface IProps {
    curTitle: string
}
const props = defineProps<IProps>()
</script>
<template>
    <div class="w-full flex items-center h-10">
        <span class="inline-block w-1 h-5 bg-sky-600 mr-2"></span>
        <h2 class="font-medium text-sky-800 text-base">{{ props.curTitle }}</h2>
    </div>
</template>
<style scoped lang="less"></style>