<template>
	<div class="lg:ml-4">
		<h1 class="text-white text-2xl my-6">Trending</h1>
		<div class="w-screen">
			<Swiper
				class="w-full"
				:slides-per-view="1"
				:loop="true"
				:autoplay="{
					delay: 4000,
				}">
				<SwiperSlide v-for="(slide, idx) in trendingMovies" :key="idx">
					<MovieCard :slide="slide" />
				</SwiperSlide>
			</Swiper>
		</div>
	</div>
</template>

<script setup lang="ts">
import database from '@/data.json'
import type { APIResponse } from '~/types/APIResponse'

const db = database as APIResponse[]

const trendingMovies = db.filter((movie: APIResponse) => movie.isTrending)
</script>
