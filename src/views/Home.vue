<template>
	<div class="home">
		<NavBar/>
		<Hero/>
		<Projects/>
	</div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Hero from '@/components/Hero.vue'
import Projects from '@/components/Projects.vue'

export default {
	name: 'Home',
	components: {
		NavBar,
		Hero,
		Projects
	}
}
</script>

<style scoped>
.home {
	width: 100%;
}
</style>
