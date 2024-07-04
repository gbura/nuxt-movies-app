<template>
	<div class="w-full lg:w-[400px] cursor-pointer">
		<img :src="slide.thumbnail.trending.large" :alt="slide.title" class="rounded-xl" />
	</div>
</template>

<script setup lang="ts">
import type { APIResponse } from '~/types/APIResponse'

defineProps<{
	slide: APIResponse
}>()
</script>

<style scoped>
.bookmark-icon-background {
	background-color: rgba(0, 0, 0, 0.514);
}
</style>
