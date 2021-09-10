<template>
	<div class="about">
		<NavBar/>
		<img alt="Vue logo" src="../assets/logo.png">
	</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
	name: 'About',
	components: {
		NavBar
	}
}
</script>

<style scoped>
.about {
	width: 100%;
}
</style>
