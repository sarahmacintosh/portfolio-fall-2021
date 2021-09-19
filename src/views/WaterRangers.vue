<template>
	<span>
		<NavBar/>
		<div class="about">
			<div>
				<h1>Increasing User Traffic to Online Data Platform</h1>
				<br>
				<p class="sub-header">Term: </p> <p>Summer 2021</p>
				<p class="sub-header">Skills: </p> <p>Iterative design, persona development, user journey mapping, analytics</p>
				<p class="sub-header">Tools: </p> <p>Figma, Google Analytics, Ruby on Rails, Excel</p>
				<br>
				<p>Problem definition:
				Blurb about what water rangers is (from WR)
				Goal of the project (increase user traffic - new users and retaining old ones</p>
				<p>Scope - tbh what does this mean - maybe like: make design changes that will have this effect</p>
				<p>Method:
				- user research and personas
				- user journey maps
				- identify pain points
				- design changes to fix pain points
				- release(s)</p>
				<p>Designs
				- obs/loc/issues pages
				- cards
				- new user popup
				- profile page edits</p>
				<p>Results: take numbers from WR - find numbers for the user profile page as well</p>
				<p>Changes for next time:
				</p>
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
