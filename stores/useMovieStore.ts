import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import database from '../data.json'
import type { APIResponse } from '~/types/APIResponse'

export const useMovieStore = defineStore('movie', () => {
	const db = database as APIResponse[]
	const searchQuery = ref<string>('')

	const counter = ref<number>(0)

	const filteredRecommendedMovies = computed(() => {
		const query = searchQuery.value.toLowerCase()
		let filteredMovies = db.filter((movie: APIResponse) => !movie.isTrending)

		if (query) {
			filteredMovies = filteredMovies.filter((movie: APIResponse) => movie.title.toLowerCase().includes(query))
		}

		counter.value = filteredMovies.length
		return filteredMovies
	})

	const filteredTrendingMovies = computed(() => {
		const query = searchQuery.value.toLowerCase()
		let filteredMovies = db.filter((movie: APIResponse) => movie.isTrending)

		if (query) {
			filteredMovies = filteredMovies.filter((movie: APIResponse) => movie.title.toLowerCase().includes(query))
		}
		counter.value = filteredMovies.length
		return filteredMovies
	})

	return { searchQuery, filteredRecommendedMovies, filteredTrendingMovies, counter }
})
