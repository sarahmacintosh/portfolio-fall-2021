<template>
	<span>
		<NavBar/>
		<div class="about">
			<div>
				<h1>Web page optimization for benefit delivery</h1>
				<br>
				<p class="sub-header">Organization: </p> <p>Employment and Social Development Canada</p>
				<p class="sub-header">Term: </p> <p>Winter 2020</p>
				<p class="sub-header">Skills: </p> <p>user research, card sort, information architecture, wireframing, SEO, plain language</p>
				<p class="sub-header">Tools: </p> <p>Optimal workshop, Figma, Adobe Analytics, Visible Thread</p>
				<br>
				<p> 
					Type: Case Study
					Webpage Optimization
					Organization: ESDC - GC
					Year: [W] 2020

					Skills:- User research
					- Environment scan
					- Card sorting
					- Information Architecture
					- Wireframing (u shld mock this up in Figma, no one needs to know. or mention that you had to use GDrive but would have liked to use Figma instead)
					- Reading Google Analytics report (High bounce rate)

					Tools:
					- Optimal Workshop
					- Figma
					- Pretty sure it was actualy Adobe Analytics??
					- Visible Thread

					Procedure:
					- Mostly done, just add images
					- And make a wireframe in Figma yoik

					Format:
					- Intro blurb
					- Setting up the problem (goal)
					- Setting up the problem (research)
					- Collecting data (card sort, visible thread)
					- Improving content based on data
					- Mocking up

					Reflection:
					- What would I change next time? 
					- [Unfortunately my work on this project was impacted by COVID. My employer was responible for the GC COVID response so it was difficult for me to speak to more stakeholders/ get access to more G analytics data, test the improved design]
					- Bigger sample size for data, create personas/user journeys to get a more in depth understanding of the issues ppl might face
					- would really have like to test the new layout but yoiks
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
