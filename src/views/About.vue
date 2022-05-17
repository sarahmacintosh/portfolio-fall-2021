<template>
	<span>
		<NavBar/>
		<div class="about">
		<img src="../assets/profile-image.jpeg" alt="Me!">
			<div>
				<h1>Hey, I'm Sarah!</h1>
				<p class="sub-header">I'm a third year Systems Design Engineering student at the University of Waterloo. I've worked on a wide range of projects where I've gained experience in user experience design, research, project management and front end development.</p>
				<p>I'm passionate about using a holistic, data driven approach to design products with flawless user experience. With diverse experience in UX design, research, project management and front end development I have the background to create designs that are simple for developers to implement while serving users effectively.</p>
				<p>I'm also an avid athlete. I enjoy running, mountain biking, climbing and competing on the Waterloo Varsity cross country ski team. When I'm not being active I enjoy photography, peer mentoring and taking care of my jungle of house plants.</p>
				<p>Looking for a 4 month co-op placement starting September 2022. Please feel free to reach out!</p>
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
	padding: 10rem 3rem 2rem;
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
}
img {
	max-width: 40%;
	float: right;
	padding: 2rem;
	border-radius: 10%;
}

@media only screen and (max-width: 600px) {
	img {
		display: none;
	}
}
</style>
