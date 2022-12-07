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
// comment
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
			default: "#FFFFFF"
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
	padding: 3rem;
	display: grid;
	grid-template-columns: 80% 1fr;
	margin: 3rem;
	border-radius: 16px;
	box-shadow: 5px 5px 5px #82879b;
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
	max-width: 100%;
}

@media only screen and (max-width: 600px) {
	img {
		display: none;
	}
	.tile {
		grid-template-columns: 1fr;
	}
}
</style>