<template>
	<div :class="{'tile': true, 'hand': link}" :style="{'background': color}" @click="route">
			<div class="content">
				<h3 :class="{'project-title': true}"><b>{{ name }}</b></h3>
				<p><b>{{ forWho }}</b> –– {{ date }}</p>
				<br>
				<br>
				<p>{{ description }}</p>
			</div>
			<img v-if="image" :src="getImage(image)" :alt="`An image of ${name}`">
	</div>
</template>

<script>
const defaultString = {
	type: String,
	default: ""
}

export default {
	props: {
		name: defaultString,
		date: defaultString,
		forWho: defaultString,
		description: defaultString,
		image: defaultString,
		link: defaultString,
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
		},
		route() {
			if (this.link)
				this.$router.push(this.link);
		}
	}
}
</script>

<style scoped>
.tile {
	text-align: left;
	padding: 2rem;
	display: grid;
	grid-template-columns: 80% 1fr;
}

.content {
	display: flex;
	flex-direction: column;
}

.project-title {
	size: 40px;
	text-decoration: none;
}

.hand:hover {
	cursor: pointer;
}
.underline {
	text-decoration: underline;
}

h3 {
	font-size: 25px;
}

p {
	margin: 0;
	font-size: 20px;
}

img {
	padding: 1rem;
}
</style>