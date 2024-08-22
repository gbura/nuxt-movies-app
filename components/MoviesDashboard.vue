<template>
	<div class="lg:ml-4">
		<!-- Trending movies section -->
		<h1 class="text-white text-2xl my-6" v-if="movieStore.searchQuery">
			Found {{ movieStore.totalFilteredCount }} results for '{{ movieStore.searchQuery }}'
		</h1>
		<h1 class="text-white text-2xl my-6" v-if="!movieStore.searchQuery">Trending</h1>

		<Swiper
			:slides-per-view="1"
			:loop="false"
			:space-between="10"
			:autoplay="{
				delay: 1000,
			}"
			:breakpoints="sliderBreakpoints">
			<SwiperSlide v-for="(item, idx) in movieStore.filteredTrendingMovies" :key="idx">
				<MovieCard :item="item" />
			</SwiperSlide>
		</Swiper>

		<!-- Recommended movies section -->
		<h1 class="text-white text-2xl my-6" v-if="!movieStore.searchQuery">Recommended for you</h1>
		<div class="flex flex-wrap justify-between gap-10 w-full">
			<MovieCard
				v-for="(item, idx) in movieStore.filteredRecommendedMovies"
				:key="idx"
				:item="item"
				class="md:w-[350px]" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { useMovieStore } from '../stores/useMovieStore'
import type { SliderBreakpoints } from '~/types/SliderBreakpoints'

const movieStore = useMovieStore()

const sliderBreakpoints: SliderBreakpoints = {
	768: {
		spaceBetween: 10,
		slidesPerView: 2,
	},
	1200: {
		spaceBetween: 120,
		slidesPerView: 3,
	},
	1440: {
		spaceBetween: -500,
		slidesPerView: 2,
	},
	1600: {
		spaceBetween: -700,
		slidesPerView: 2,
	},
	1800: {
		spaceBetween: -950,
		slidesPerView: 2,
	},
}
</script>
