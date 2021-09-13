<template>
  <div class="tile" :style="{'background': color}">
		<img v-if="image" :src="getImage(image)" :alt="`An image of ${name}`">
		<div class="header">
			<h3 class="project-title"><b>{{ name }}</b></h3>
		</div>
		<div>
			<p><b>{{ forWho }}</b> –– {{ date }}</p>
			<br>
			<p>{{ description }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			default: ""
		},
		date: {
			type: String,
			default: ""
		},
		forWho: {
			type: String,
			default: ""
		},
		description: {
			type: String,
			default: ""
		},
		image: {
			type: String,
			default: ""
		},
		color: {
			type: String,
			default: "#BCE5E8"
		}
	},
	methods: {
		getImage(image) {
			try {
				return require("@/assets/project/" + image);
			} catch (e) {
				// throw Error(`pic does not exist: ${image}`);
			}
		}
	}
}
</script>

<style scoped>
.tile {
	text-align: left;
	padding: 2rem;
}

.header {
	display: flex;
}

.project-title {
	size: 40px;
}

p {
	margin: 0;
}

img {
	float: right;
	max-width: 20%;
	padding: 1rem;
}
</style>