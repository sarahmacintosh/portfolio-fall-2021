<template>
  <div class="tile" :style="{'background': color}">
		<p>{{ name }}</p>
		<p>{{ date }}</p>
		<p>{{ forWho }}</p>
		<p>{{ description }}</p>
		<p>{{ image }}</p>
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
	}
}
</script>

<style scoped>
.tile {
	display: flex;
}
</style>