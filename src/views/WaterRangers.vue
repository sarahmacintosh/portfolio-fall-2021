<template>
	<span>
		<NavBar/>
		<div class="about">
			<div>
				<h1>Increasing User Traffic to Online Data Platform</h1>
				<br>
				<p class="sub-header">Term: </p> <p>Summer 2021</p>
				<p class="sub-header">Skills: </p> <p>Iterative design, persona development, user journey mapping, analytics</p>
				<p class="sub-header">Tools: </p> <p>Figma, Google Analytics, Ruby on Rails</p>
				<br>
				<p>talk about dat project</p>
			</div>
		</div>
		<Footer/>
	</span>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
	name: 'About',
	components: {
		NavBar,
		Footer
	}
}
</script>

<style scoped>
.about {
	width: 100%;
	padding-top: 10rem;
	padding-left: 3rem;
	padding-right: 3rem;
	min-height: 100vh;
	background: #FFFFFF;
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

.sub-header {
	font-family: Calibri;
	font-size: 25px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;
	color: #313131DB;
}

p {
	text-align: left;
	color: #313131DB;
	font-size: 20px;
	font-weight: 100;
	max-width: 60%;
}
img {
	max-width: 40%;
	float: right;
	padding: 2rem;
}
</style>
