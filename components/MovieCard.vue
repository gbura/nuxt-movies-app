<template>
	<div>
		<img :src="slide.thumbnail.trending.large" :alt="slide.title" class="w-full" />
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
