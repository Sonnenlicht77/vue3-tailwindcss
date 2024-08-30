<script setup lang="ts">
type TypeContent = {
    type: string,
    part: string

}
interface IProps {
    title: string,
    contents: TypeContent[]
}
const props = defineProps<IProps>()
</script>
<template>
    <div class="pl-8">
        <!-- title -->
        <div class="flex items-center justify-start leading-10 cursor-pointer ">
            <div class="font-thin text-gray-300 pr-2 hover:underline hover:text-gray-600">#</div>
            <h3 class="text-sm font-normal text-gray-400 tracking-wider">
                {{ props.title }}
            </h3>
        </div>

        <!-- content -->
        <div class="indent-6">
            <template v-if="props.contents.length">
                <!-- {{ props.content }} -->
                <template v-for="content, index in props.contents" :key="index">
                    <template v-if="content.type === 'paragraph'">
                        <div class="text-slate-700 font-mono text-sm leading-6">
                            {{ content.part }}
                        </div>
                    </template>
                    <template v-if="content.type === 'href'">
                        <a :href="content.part" target="_blank" class="text-green-500 underline underline-cyan-4">{{
                            content.part }}</a>
                    </template>

                </template>
            </template>
        </div>
    </div>
</template>
<style scoped lang="less"></style>