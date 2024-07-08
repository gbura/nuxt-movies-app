<template>
	<div class="lg:ml-4 z-10">
		<h1 class="text-white text-2xl my-6">Recommended for you</h1>

		<div class="flex flex-wrap justify-between gap-10 w-full">
			<MovieCard v-for="(item, idx) in recommendedMovies" :key="idx" :item="item" class="md:w-[350px]" />
		</div>
	</div>
</template>

<script setup lang="ts">
import database from '../data.json'
import type { APIResponse } from '~/types/APIResponse'

const db = database as APIResponse[]

const recommendedMovies = db.filter((movie: APIResponse) => !movie.isTrending)
</script>
