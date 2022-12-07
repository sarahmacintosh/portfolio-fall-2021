<template>
	<div class="hero">
		<span>
			<h1 class="hero-text">–– Sarah Macintosh ––</h1>
			<!--<h2>Systems Design Engineering student, UX designer, athlete, photographer</h2>-->
		</span>
		<!--<router-link :to="{ path: '#projects' }"><button> <img src="../assets/arrow-down-button.png"> </button></router-link>-->

	</div>
</template>

<style scoped>
.hero {
	padding: 5rem;
	padding-top: 10rem;
	min-height: 100vh;
	background-image: url("../assets/sunset-plants-cropped.jpeg");
	background-repeat: no-repeat;
	background-size: cover;
	display: grid;
	place-items: center;

}

.hero-text {
	font-family: "Calibri";
	font-size: 75px;
	font-style: normal;
	font-weight: 600;
	line-height: 60px;
	letter-spacing: 0em;
	text-align: middle;
	vertical-align: middle;
}

.hero-description {

}
</style>