<template>
	<span>
		<NavBar/>
		<div class="about">
		<img src="../assets/glacier-hike.jpeg" alt="Me!">
			<div>
				<h1>Hey, I'm Sarah!</h1>
				<p class="sub-header" >I'm a fourth year Systems Design Engineering student at the University of Waterloo. I've worked on a wide range of projects where I've gained experience in user experience design, research, project management and front end development.</p>
				<p>I'm passionate about using a user-centred, data driven approach to design digital and physical products with flawless user experience and a positive environmental impact. My diverse experience means I have the background to create designs that are simple for developers to implement while serving users effectively.</p>
				<p>I'm also an avid athlete. I enjoy running, mountain biking, climbing and competing on the Waterloo Varsity cross country ski team. When I'm not being active I enjoy photography, travelling with friends and taking care of my jungle of house plants.</p>
				<p>Please feel free to reach out!</p>
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
	background: #BFC7EA;
}

h1 {
	font-family: Calibri;
	font-size: 50px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;
	color: #191919;
}

.sub-header {
	font-family: Calibri;
	font-size: 25px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;
	color: #191919;
}

p {
	text-align: left;
	color: #191919;
	font-size: 20px;
	font-weight: 100;
}
img {
	max-width: 40%;
	float: right;
	padding: 2rem;
	border-radius: 10%;
}
link{
	color: #9BADF6;
}

@media only screen and (max-width: 600px) {
	img {
		display: none;
	}
}
</style>
