<template>
  <div class="tile" :style="{'background': color}">
		<div class="header">
			<p>{{ name }}</p>
			<p>{{ date }}</p>
			<p>{{ forWho }}</p>
		</div>
		<p>{{ description }}</p>
		<img :src="getImage(image)" :alt="`An image of ${name}`">
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
				// throw Error(`pic does not exist: ${speaker}`);
			}
		}
	}
}
</script>

<style scoped>
.tile {
	text-align: left;
}

.header {
	display: flex;
}
.header>*::after {
	content: ' * ';
}

img {
	float: right;
}
</style>