<template>
	<header>
		<nav
			class="flex justify-between items-center w-full bg-lighterBlue p-4 rounded-md lg:flex-col lg:w-[60px] lg:h-[95vh]">
			<NuxtLink to="/">
				<img src="../assets/images/logo.svg" class="w-[30px]" />
			</NuxtLink>
			<div class="flex gap-4 lg:flex-col">
				<NuxtLink to="/">
					<img src="../assets/images/icon-nav-home.svg" class="w-[20px]" />
				</NuxtLink>
				<NuxtLink to="/movies">
					<img src="../assets/images/icon-nav-movies.svg" class="w-[20px]" />
				</NuxtLink>
				<NuxtLink to="/series">
					<img src="../assets/images/icon-nav-tv-series.svg" class="w-[20px]" />
				</NuxtLink>
				<NuxtLink to="/bookmarks">
					<img src="../assets/images/icon-nav-bookmark.svg" class="w-[20px]" />
				</NuxtLink>
			</div>

			<div class="cursor-pointer relative">
				<img src="../assets/images/image-avatar.png" class="w-[30px]" @click="handleOpenModal" />
				<div
					v-if="isOpen"
					class="absolute w-[120px] bg-lighterBlue top-12 -right-4 rounded-md text-white lg:-top-10 lg:left-12 z-10">
					<button class="w-full p-2 hover:text-gray">Login</button>
					<hr class="text-gray" />
					<button class="w-full p-2 hover:text-gray">Logout</button>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup lang="ts">
const isOpen = ref<boolean>(false)
const handleOpenModal = () => (isOpen.value = !isOpen.value)
</script>
