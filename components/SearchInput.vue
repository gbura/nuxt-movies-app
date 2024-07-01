<template>
	<div class="flex items-center justify-center mt-4 border-b-2 border-gray py-2 lg:ml-4 lg:mt-0">
		<img src="../assets/images/icon-search.svg" class="w-[30px]" />
		<input type="text" class="w-full bg-transparent pl-4 outline-none text-white" :placeholder="placeholder" />
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const placeholder = ref<string>('')

const updatePlaceholder = () => {
	if (route.name === 'bookmarks') {
		placeholder.value = 'Search for bookmarked shows'
	} else {
		placeholder.value = 'Search for movies or TV series'
	}
}
onMounted(() => updatePlaceholder())
</script>
