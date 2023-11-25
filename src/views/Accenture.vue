<template>
	<span>
		<NavBar/>
		<div class="about">
			<div>
				<h1>Design System for a Wealth Managment Company</h1>
				<br>
				<p class="sub-header"><b>Organization:</b> Accenture</p>
				<p class="sub-header"><b>Term:</b> Summer 2023</p>
				<p class="sub-header"><b>Type:</b> UX Design</p>
				<p class="sub-header"><b>Skills:</b> Components, Scalable Design, Design system</p>
				<p class="sub-header"><b>Tools:</b> Figma</p>
				<br>
				<h2>Problem definition</h2>
					<p>
						UX consulting team was contracted to build out new features for a product for a wealth management company. They wanted to improve their documentation and reduce the time designers spent making wireframes and mockups.
					</p>
				<h2>Project Goals</h2>
					<p>
						<ul>
							<li>Reduce time spent by designers on the project by creating a design system for the new product.</li>
							<li>Improve the documentation for the product.</li>
						</ul>
					</p>
				<h2>Requirements and Constraints</h2>
				<p>
					<ul>
						<li>Design system documentation must be stored in Figma</li>
						<li>Documentation must include accessibility and usage guidelines</li>
						<li>Design system must incorporate and follow existing guidelines</li>
					</ul>
				</p>
				<h2>Method</h2>
					<ul>
							<li>1. Research similar product's design system and design system structure</li>
							<li>2. Make wireframes of the documentation</li>
							<li>3. Build scalable documentation</li>
							<li>4. Build components</li>
						</ul>
				<h2>Results</h2>
				<p>[image of design system documentation]</p>
				<p>[image of design system components]</p>
				<h2>Key Takeaways</h2>
					<p>
						Building a design system mid project is an interesting challenge. A lot of the basic decision have already been made which helps but it also means there are a lot of existing inconsistencies that need to be sorted out.
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
