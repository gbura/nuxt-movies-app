<template>
	<div class="lg:ml-4 z-10">
		<h1 class="text-white text-2xl my-6">
			{{
				movieStore.filteredRecommendedMovies.length > 0 && movieStore.counter >= 0 && movieStore.searchQuery
					? `Found ${movieStore.counter} movies`
					: 'Recommended for you'
			}}
		</h1>

		<div class="flex flex-wrap justify-between gap-10 w-full">
			<MovieCard v-for="(item, idx) in filteredRecommendedMovies" :key="idx" :item="item" class="md:w-[350px]" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { useMovieStore } from '../stores/useMovieStore'

const movieStore = useMovieStore()
const filteredRecommendedMovies = computed(() => movieStore.filteredRecommendedMovies)
</script>
