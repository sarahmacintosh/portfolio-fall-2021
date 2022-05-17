<template>
  <div id="projects">
		
		<h2>Projects</h2>
		<br>
		<ProjectTile 
			v-for="proj, i in projects"
			v-bind="proj"
			:key="i"/>
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
	padding: 2rem 0;
}

h2 {
	margin: 0;
	padding-top: 1rem;
	font-size: 40px;
}

hr {
	border-top: 3px solid white;
}
</style>
