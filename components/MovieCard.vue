<template>
	<div class="w-full lg:w-[400px] relative xl:static">
		<img :src="item.thumbnail.regular.large" :alt="item.title" class="rounded-xl" />
		<div
			@click="bookmarkMovie"
			class="p-2 bg-[rgba(0,0,0,0.514)] absolute top-2 right-2 rounded-full cursor-pointer hover:bg-[rgba(0,0,0,0.692)] transition duration-200">
			<img v-if="!isBookmarked" src="../assets/images/icon-bookmark-empty.svg" alt="" />
			<img v-else src="../assets/images/icon-bookmark-full.svg" alt="" />
		</div>
		<div
			class="flex flex-col absolute bottom-4 left-4"
			:class="{ 'xl:static': !item.isTrending, 'xl:absolute': item.isTrending }">
			<ul class="flex text-neutral-200 text-sm custom-dots" :class="{ 'xl:mt-2 xl:text-xs': !item.isTrending }">
				<li>{{ item.year }}</li>
				<li class="flex items-center gap-1">
					<img
						v-if="item.category === 'Movie'"
						src="../assets/images/icon-category-movie.svg"
						:alt="item.category"
						class="w-[15px] h-[15px]" />
					<img v-else src="../assets/images/icon-category-tv.svg" :alt="item.category" class="w-[15px] h-[15px]" />
					{{ item.category }}
				</li>
				<li>{{ item.rating }}</li>
			</ul>
			<p class="text-white text-xl">{{ item.title }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { APIResponse } from '~/types/APIResponse'

defineProps<{
	item: APIResponse
}>()

const isBookmarked = ref<boolean>(false)

const bookmarkMovie = () => {
	isBookmarked.value = !isBookmarked.value
}
</script>

<style scoped>
.custom-dots li:not(:last-child)::after {
	content: '•';
	margin-left: 0.2rem;
	margin-right: 0.2rem;
}
</style>
