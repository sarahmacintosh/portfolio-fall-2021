<template>
	<span>
		<NavBar/>
		<div class="about">
			<div>
				<h1>Web page optimization for benefit delivery</h1>
				<br>
				<p class="sub-header"><b>Organization:</b> Employment and Social Development Canada</p>
				<p class="sub-header"><b>Term:</b> Winter 2020 (3 weeks)</p>
				<p class="sub-header"><b>Skills:</b> user research, card sort, information architecture, wireframing, SEO, plain language, user testing, usability testing, web optimization</p>
				<p class="sub-header"><b>Tools:</b> Optimal workshop, Figma, Adobe Analytics, Visible Thread</p>
				<p class="sub-header"><b>Type:</b> UX Design, User research</p>

				<h2>Context</h2>
					<p>
					After working in a supporting role as a user researcher and UX designer on multiple Government of Canada webpage optimization projects during my co-op, I tackled the task of running the Benefits Children Under 25 webpage optimization project myself.
					</p>
				<h2>UX Goals</h2>
					<p>
					The Benefits Children Under 25 webpage was identified as underperforming based on Adobe Analytics reports showing it had low user engagement and a high bounce rate.   The goal of this project was to improve the usability of the site, the findability of information and the navigability of the page.
					</p>
				<h2>Constraints</h2>
					<p>
					Redesign had to:
					</p>
				<ul>
					<li>Adhere to GC style guide to maintain consistency across GC website. Major redesigns to information architecture but visual design had to stay within the bounds of the style guide.</li>
					<li>Satisfy accessibility standards.</li>
				</ul>
				
				<h2>Approach</h2>
					<p>
						I took a user and data centred approach to solving this design problem. I wanted to ensure that all my decisions were based on data and research from real users.
						First, I requested an Adobe Analytics report for the webpage. This allowed me to identify the main issues with the page and what they meant for users. The report showed a low number of users reaching the page and a high bounce rate for those who did.
						The high bounce rate indicated user frustration at not being able to find the information they needed quickly. Looking at the webpage it was not difficult to understand why. The page contained almost 2000 words in a long column of text occasionally broken by section headers. Locating most information took a lot of scrolling and reading. To resolve this issue I decided to apply the new Service Initiation Template in the GC style guide to improve the information architecture. I planned to conduct user research to construct a layout that was intuitive to users. I also decided to apply Plain Language to reduce the amount of challenging words that could also cause frustration for users.
						The low number of users indicated that users weren’t able to find the page from a search engine due to weak metadata. This meant a new Search Engine Optimization strategy needed to be implemented with metadata more in line with what users searched to find the page.
						First, I created a card sort based on the content that needed to be included on the web page using online software from Optimal Workshop.
					</p>
					<img class="two-normal-size-pictures-sitting-together" src="../assets/esdc-cs-image1.png" alt="image1">
					<img class="two-normal-size-pictures-sitting-together" src="../assets/esdc-cs-image2.png" alt="image2">
					<img>
					<p>
						I grouped the information from the webpage into ‘cards’ based on the existing structure. I turned information under each >h2> or >h3> into a ‘card’ that included a brief summary of the information.
						I then used the 'Card Sort' tool in Optimal Workshop to create and share the card sort with participants. Once the participants completed the card sort Optimal Workshop stored the data from participants. I was then able to analyze the data to determine how to structure the information to best fit the users’ mental model.
						While I waited for the Card Sorts to be completed I ran an analysis on the language using Visible Thread. This software helped me identify areas where language and sentence structure were unnecessarily complex and likely to impede users’ understanding. GC webpages are supposed to be at Grade 8 reading level so this procedure is used to identify issues (e.g. reading level, complex sentences, passive language) and resolve them. Using approved synonyms and revised sentence structure, I reduced the reading level of the content to Grade 8 from Grade 12.
						Once all participants had completed the card sort I re-designed content layout based on the card sort results.
					</p>
					<img src="../assets/esdc-cs-image3.png" alt="image3">
				<ul>
					<li>Re-grouped content and named SIT tabs</li>
					<li>Used "Note" template to make important information extra visible (GC Style Guide)</li>
					<li>Used drop down boxes to reduce page length and ‘hide’ information that wasn't highly searched</li>
					<li>Eliminated and/or consolidated repeated information</li>
					<li>Applied GC Style Guide to ensure the web pages conformed to the Government of Canada Standards</li>
				</ul>
				<p>
				Once I had finished designing the information architecture I mocked up pages with the new Service Initiation Template.
				</p>

				<h2>Re-design (left) and Old Design (right)</h2>
				<span class="two-pictures-sitting-together">
					<img src="../assets/esdc-cs-image5.jpeg" alt="image5">
					<img src="../assets/esdc-cs-image4.jpeg" alt="image4">
				</span>
				<p>Note: redesign links to 4 smaller and more focused pages</p>

				<h2>Key takeaways</h2>
				<p>
					This was the first big UX project I undertook alone so it was a great learning experience but there is also room for improvement. This project was also affected by the beginning of COVID lockdowns since the department I worked for was in charge of CERB benefits release, me, and the team I worked for, had to shift our focus away from any projects that weren’t urgent. 
					If I were to do this project again I would make several changes. The main change I would make in the project is to incorporate more iterations to gather user feedback on intermediary steps. Instead of moving directly to a high fidelity mockup I would test the Information Architecture using a lo-fi mockup(s) before moving to higher fidelity mockups. I also would have liked to include larger user testing groups but for this project didn’t have the resources allocated to it. This would allow for any other issues to be identified and validate the success of the redesign.
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
	font-size: 25px;
	font-style: normal;
	font-weight: 600;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;
	color: #191919;
}

h3 {
	font-family: Calibri;
	font-size: 20px;
	font-style: normal;
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
	width: 60%;
	padding: 1rem;
}

.two-normal-size-pictures-sitting-together{
	width: 40%;
}

.two-pictures-sitting-together{
	display: grid;
	grid-template-columns: 1fr 1fr;
}
</style>
