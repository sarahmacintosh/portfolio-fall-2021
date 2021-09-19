<template>
	<span>
		<NavBar/>
		<div class="about">
			<div>
				<h1>Reducing Redundancies for ITU Data Uploads</h1>
				<br>
				<p class="sub-header"><b>Organization:</b> Innovation Canada</p>
				<p class="sub-header"><b>Term:</b> Fall 2021</p>
				<p class="sub-header"><b>Type:</b> Process optimization</p>
				<p class="sub-header"><b>Skills:</b> Process optimization, process mapping, meetings/presentations with stakeholders, improving effeciency</p>
				<p class="sub-header"><b>Tools:</b> Figma, JIRA</p>
				<br>
				<h2>Problem definition</h2>
					<p> 
						The government of Canada manages licences for Spectrum available in Canada (Spectrum is the set of radiowaves where everything from AM/FM radio to 5G networks run on).
						Since spectrum is a limited natural resource -- two people can't broadcast on the same spectrum band in the same area or there will be interference -- the government needs to 
						maintain accurate records of the licences in their system (SPECTRAplus). As part of my co-op I was tasked with documenting and improving the process for uploading ITU-BRIFIC data
						to SPECTRAplus. The ITU-BRIFIC is a document that contains all up-to-date international spectrum licencing data. 
						Every two weeks - the ITU releases the BRIFIC document to its' stakeholders (e.g. governments and telecom providers). The standing process when I began this project only had the BRIFIC data
						being updated every 6 months (24 weeks) as it had to go through 3 different departments and 4 different teams multiple times before it was uploaded. This meant that the international data in the database was rarely up to date which could affect the validity of licences issued, especially those along the border.
					</p>
				<h2>Project goal</h2>
					<p> 
						Improve the completion rate of the ITU-BRIFIC data upload to SPECTRAplus.
					</p>
				<h2>Method</h2>
					<p> 
						First, I met with all the key players who usually participate in various stages of the upload to define the current process. 
						<ul>
							<li>DGEPS - recipient of BRIFIC space</li>
							<li>DBCP - recipient of BRIFIC terrestrial</li>
							<li>LST - IT support who uploads it</li>
							<li>DBIT - person responsible for system QA</li>
							<li>CIO - IT support who uploads it</li>
						</ul>
					</p>	
					<p>	
						After meeting with the 4 different departments I was able to make a flow chart to show the current process as well as how long each step took.

						Once I had the current process, I analyzed it for redundancies and places where we could cut down on time.

						After redesigning the process, I made a new flow chart and met with the stakeholders to gather their feedback -- to see if there were any issues that I wouldn't catch as someone who wasn't familiar with the process.
						After a couple iterations, the issues had been ironed out and I created a final task flow chart to map the process as well a document detailing the steps shown in the flow chart.
					</p>
					<p>	Old process (left) vs New process (right)</p>
						
					<img src="../assets/ised-OG-brific.jpeg" alt="old BRIFIC process">
					<img src="../assets/ised-new-brific.jpg" alt="new BRIFIC process">
					
				<h2>Results</h2>
					<p> 
					The new process I defined had eliminated redundant steps and unnecessary passing between departments since the main slowdowns came from inter-departmental communications and also created new protocol to get the data updated monthly. These changes led to a 600% increase in the amount of yearly date updates which increased the accuracy of the system data.
					</p>
				<h2>Next time</h2>
					<p> 
					If I were to do this project again I would like to stay on long enough to see the effects of the new process. Since I started this project near the end of my co-op I wasn't able to track the effects and identify issues to resolve.
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

h2 {
	font-family: Calibri;
	font-size: 25px;
	font-style: normal;
	font-weight: 600;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;
	color: #313131DB;
}

h3 {
	font-family: Calibri;
	font-size: 20px;
	font-style: normal;
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

.two-pictures-sitting-together{
	display: grid;
	grid-template-columns: 1fr 1fr;
}
</style>
