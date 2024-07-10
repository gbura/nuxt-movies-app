<template>
	<SearchInput />
	<h1 class="text-white text-2xl my-6 ml-4" v-if="movieStore.searchQuery">
		Found {{ movieStore.totalFilteredCount }} results for '{{ movieStore.searchQuery }}'
	</h1>
	<div class="flex gap-10 flex-wrap mt-8 ml-4">
		<div v-for="item in bookmarkedMovies" :key="item.title">
			<MovieCard :item="item" />
		</div>
	</div>
</template>

<script setup lang="ts">
import database from '@/data.json'
import type { APIResponse } from '~/types/APIResponse'
const db = database as APIResponse[]
const movieStore = useMovieStore()

const bookmarkedMovies = db.filter((item: APIResponse) => item.isBookmarked === true)

useHead({
	title: 'Bookmarked Movies',
})
</script>
