<template>
	<span>
		<NavBar/>
		<div class="about">
			<h1>About</h1>
			<p>ABOUT TEXT HERE</p>
			<img src="../assets/dummy_profile.jpeg" alt="Me!">
		</div>
	</span>
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
	padding-top: 10rem;
	min-height: 100vh;
	background: #BCE5E8;
}

img {
	max-width: 40rem;
	float: right;
}
</style>
