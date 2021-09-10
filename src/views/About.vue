<template>
	<span>
		<NavBar/>
		<div class="about">
		<img src="../assets/dummy_profile.jpeg" alt="Me!">
			<div>
				<h1>Hey, I'm Sarah :)</h1>
				<p>I'm passionate about using a holistic, data driven approach to design products with flawless user experience. With diverse experience in UX design, research, project management and front end development I have the background to create designs that are simple for developers to implement while serving users effectively.</p>
				<p>I'm also am an avid athlete. I enjoy running, mountain biking, climbing and competing on the Waterloo Varsity cross country ski team. When I'm not being active I enjoy photography, peer mentoring and taking care of my jungle of house plants.</p>
				<p>Looking for a 4 month co-op placement starting January 2022. Please feel free to reach out!</p>
			</div>
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
	padding-left: 2rem;
	padding-right: 2rem;
	min-height: 100vh;
	background: #BCE5E8;
}

h1 {
	font-family: Calibri;
	font-size: 50px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;
	color: #313131DB;
}

p {
	text-align: left;
	color: #313131DB;
	font-size: 20px;
	font-weight: 70;
}
img {
	max-width: 40rem;
	float: right;
	padding: 2rem;
}
</style>
