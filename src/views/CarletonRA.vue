<template>
	<span>
		<NavBar/>
		<div class="about">
			<div>
				<h1>Exploring the Relationship between ESL and Math learning</h1>
				<br>
				<p class="sub-header"><b>Organization:</b> Carleton University</p>
				<p class="sub-header"><b>Term:</b> Winter/Spring 2018</p>
				<p class="sub-header"><b>Type:</b> Research</p>
				<p class="sub-header"><b>Skills:</b> Data collection, Data entry, Data analysis</p>
				<p class="sub-header"><b>Tools:</b> SPSS, Excel</p>
				<br>
				<h2>Summary</h2>
					<p>As a Research Assistant I collected data from participants during testing sessions, codified and entered the data into SPSS, and created my own study based on a subset of the data. I presented my poster at the 2019 MCLS conference in Ottawa.</p>
					<p>Read about the project here <a href="https://carleton.ca/llama/about/">here</a>.</p>
					<img src="../assets/llama-group-shot.jpeg" alt="The LLAMA Project Team">
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
	color: #313131DB;
}

h2 {
	font-family: Calibri;
	font-size: 30px;
	font-style: normal;
	font-weight: 600;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;
	color: #313131DB;
}

h3 {
	font-family: Calibri;
	font-size: 25px;
	font-weight: 600;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;
	color: #313131DB;
}

ul {
	text-align: left;
	color: #313131DB;
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
	color: #313131DB;
}

p {
	text-align: left;
	color: #313131DB;
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
