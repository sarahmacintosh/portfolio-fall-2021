<template>
  <div id="projects">
		<h2>Projects</h2>
		<ProjectTile 
			v-for="proj, i in projects"
			v-bind="proj"
			:key="i"
			:color="i % 2 ? 'white' : '#BCE5E8'"/>
	</div>
</template>

<script>
import projectsJson from '@/assets/projects.json'
import ProjectTile from '@/components/ProjectTile.vue'

export default {
	components: {
		ProjectTile
	},
	data() {
		return {
			projects: projectsJson
		}
	}
}
</script>

<style scoped>
#projects {
	background: #BCE5E8;
	color: #313131DB;
}

h2 {
	margin: 0;
	padding-top: 1rem;
}
</style>