<template>
	<div class="lg:ml-4">
		<h1 class="text-white text-2xl my-6">Trending</h1>
		<div>
			<Swiper
				:slides-per-view="1"
				:loop="true"
				:space-between="10"
				:autoplay="{
					delay: 1000,
				}"
				:breakpoints="sliderBreakpoints">
				<SwiperSlide v-for="(item, idx) in trendingMovies" :key="idx">
					<MovieCard :item="item" />
				</SwiperSlide>
			</Swiper>
		</div>
	</div>
</template>

<script setup lang="ts">
import database from '@/data.json'
import type { APIResponse } from '~/types/APIResponse'
import type { SliderBreakpoints } from '~/types/SliderBreakpoints'

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

const db = database as APIResponse[]

const trendingMovies = db.filter((movie: APIResponse) => movie.isTrending)
</script>
