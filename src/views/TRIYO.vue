<template>
	<span>
		<NavBar/>
		<div class="about">
			<div>
				<h1>Designing Custom Collaboration Solutions for Enterprises - Coming soon</h1>
				<br>
				<p class="sub-header"><b>Organization:</b> TRIYO</p>
				<p class="sub-header"><b>Term:</b> Winter 2022</p>
				<p class="sub-header"><b>Type:</b> UX Design</p>
				<p class="sub-header"><b>Skills:</b> Iterative design, user journey mapping, prototyping</p>
				<p class="sub-header"><b>Tools:</b> Figma, Excel</p>
				<br>
				<h2>Problem definition</h2>
					<p>
					text.
					</p>
					
				<h2>Method</h2>
					<p>
					text.
					</p>

				<h2>Design Changes</h2>
					<p>
					text.
					</p>

				<h2>Results</h2>
					<p>
					text.
					</p>
					
                <h2>Conclusion</h2>
					<p>
					text.
					</p>
			</div>
			<br>
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
	color: #191919;
}

h2 {
	font-family: Calibri;
	font-size: 30px;
	font-style: normal;
	font-weight: 600;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;
	color: #191919;
}

h3 {
	font-family: Calibri;
	font-size: 25px;
	font-weight: 600;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;
	color: #191919;
}

ul {
	text-align: left;
	color: #191919;
	font-size: 20px;
	font-weight: 100;
	max-width: 90%;
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
	max-width: 90%;
}
img {
	width: 40%;
	padding: 1rem;
}

.long-boi {
	width: 80%;
}

.two-pictures-sitting-together{
	display: grid;
	grid-template-columns: 1fr 1fr;
}
</style>
