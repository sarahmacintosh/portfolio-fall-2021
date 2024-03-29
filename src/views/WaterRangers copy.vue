<template>
	<span>
		<NavBar/>
		<div class="about">
			<div>
				<h1>Increasing User Retention Rates by Improving UX</h1>
				<br>
				<p class="sub-header"><b>Organization:</b> Water Rangers</p>
				<p class="sub-header"><b>Term:</b> Summer 2021</p>
				<p class="sub-header"><b>Type:</b> UX Design, Web Development, Analytics</p>
				<p class="sub-header"><b>Skills:</b> Iterative design, persona development, user journey mapping, analytics</p>
				<p class="sub-header"><b>Tools:</b> Figma, Google Analytics, Ruby on Rails, Excel</p>
				<br>
				<h2>Problem definition</h2>
					<p>
					This project was completed over four months during my co-op at Water Rangers. Water Rangers is a Canadian not-for-profit organization that promotes and supports citizen science water testing around the world. Water Rangers is a non-profit organization that promotes citizen science water quality testing to fill gaps in the data collected on water bodies worldwide (with a focus in Canada). Filling data gaps in waterbodies worldwide requires a large user base so increasing user traffic and increasing user retention to their website is integral to building a large user base. They have developed an online open data platform web app that allows citizen scientists who are registered with their organization (referred to as “Water Rangers”) to upload their water testing data.
					</p>
					<p>
					To support their initiative they have developed an online data platform where site users (called Water Rangers) can upload their water quality testing data (metrics such as temperature, pH, alkalinity and more). The data platform has a main Map page where all the locations where water testing observations have been taken show up as points on the map. It also has a Locations page which has “cards” for each location where Water Rangers have tested and uploaded their data, an Observations page which has “cards” for each individual set of data points that have been uploaded, an Issues page which has “cards” for water quality issues that Water Rangers have reported (e.g. pollution, algae blooms, etc.) and a Groups page which has cards for different local groups of people that test in a specific area or body of water.
					</p>
					<img class="long-boi" src="../assets/5-main-pages.jpeg" alt="5 main pages of the Water Rangers data platform">
				<h2>Project Goal</h2>
					<p>
					The purpose of this project was to increase the user traffic (measured by number of active users, new users and observations uploaded) on the data platform by improving the user experience to increase retention rates.
					</p>
				<h2>Method</h2>
					<p>
					To create design changes to the data platform that would improve the users' experience I first created personas based on the user research. Personas are used to build empathy between the designer and the user so that the designer can address the user’s issues more effectively. Next, I used the personas to make user journey maps and identify possible pain points for first-time or new users. I also analyzed the web analytics data that was collected on Google Analytics for the data platform to identify issues in key metrics used in web applications and websites (e.g. bounce rate, user visit length, number of users, pages visited etc.) to build a better picture of where users were running into issues. For example, the data platform had a bounce rate of ~66% which is over 6% higher than the average range of 40-60%. This indicated that a large number of the users coming to the website were leaving immediately which gave me insight into their user journey and where the pain points were. Once the user journey map was completed and I identified user pain points, I designed changes to the platform to mitigate the issues. Over the course of the term, the team did four code releases so I was able to track the success of the changes and use that to inform decisions for the later releases.
					</p>
				<h2>Design Changes</h2>
					<p>
					Based on the pain points identified during the user journey mapping process I identified 3 key design changes that would improve user experience and retention rates.
					</p>
					<h3><b>New user pop-up</b></h3>
						<p><b>Pain point:</b> This feature was added with the goal of reducing bounce rate by making the page purpose easier to understand.</p>
						<p><b>Design change:</b> The second design change was to improve the functionality of the Location, Observation and Issues pages since the unintuitive nature of the page was identified as a pain point for new users in the user journeys maps. Similar to the map page, the Location, Observation and Issues pages had a high bounce rate indicating users were not understanding the purpose of the page. On each of these pages are “cards” that have data in them (about either a Location, Observation or Issue depending on the page) however there was no context for how someone would effectively access the information on these pages. The team even indicated they had been actively trying to steer users away from them since they offered little value. The addition of a description and help popups was implemented successfully in a previous release (reduced the bounce rate by 10%) on the Group page (which had a similar format to the Location, Observation and Issues pages) so I decided to redesign the header of these pages to improve the usability of the pages and encourage users to stay on the app. First, I added a description of each page so that new users would understand the distinctions between each one. I also created a help pop-up that could be accessed from a link in the description to guide users in creating their own Location/Observation/Issue. Lastly, I added a search bar function so that users could search through the cards using various keywords (location name, country etc.).
						</p>
						<img src="../assets/wr-map-popup-far.jpeg" alt="New user popup on map page">
					<h3><b>Optimizing page headers</b></h3>
						<p><b>Pain point:</b> The pain point addressed with this feature was the barrier to understanding the web app. </p>
						<p><b>Design change:</b> The first feature was an instructional popup that used cookies to determine whether a user had visited the site before. Since the app has a lot of features and is heavy in technical data, first time users would feel overwhelmed and leave the site contributing to a high bounce rate. By adding a pop-up that explains how to use the site, users would not feel confused and leave immediately. If the user had not visited the site before the popup would appear on the data platform landing page. The popup included a written description of the platform and how to use it as well as a link to a tutorial video on the platform. I also added a feature so that the popup was also accessible via a button on the map page labeled <em>“New here?”</em> so that it could be recalled after the user closed it. The addition of a help popup was implemented successfully in a previous release (contributed to a bounce rate reduction of 10%) on the Group page which was the rationale for adding one to the map page. The addition of this feature led to a 4% reduction of the bounce rate on the map page.</p>
						<img src="../assets/wr-observations-old.jpeg" alt="Old observations page">
						<img src="../assets/wr-observations-new.jpeg" alt="New observations page">
					<h3><b>Exposing platform activity</b></h3>
						<p><b>Pain point:</b> The last pain point identified for new users was the lack of motivation to return to the site or upload their own data. To counteract this issue, multiple features were added to expose recent activity on the site and show new users the community they could join and contribute to.</p>
						<p><b>Design change:</b> To expose recent activity on the app, I added blocks in the page headers for Locations, Observations and Issues pages that showed a count of the number of Locations/Observations/Issues reported as well as the number reported in the last 30 days (see image above). I also added a section to the cards for Groups and Locations page that indicated the last observation date for the Group/Location. These changes helped expose recent activity to new users and motivate them to join the community.</p>
				<h2>Results</h2>
					<p>
					To test the success of the design changes implemented during this project various metrics were tracked using Google Analytics and the Active Admin function on the data platform.
					</p>
					<p>
					As part of their program for encouraging citizen science, Water Rangers hosts a monthly “Testing Weekend” where they encourage all their users to test water and upload the data to their platform. Due to this, the number of users active on their platform varies on a monthly basis with the highest number of users happening in the five days surround the testing weekend. While analyzing the success of the design changes, the cyclical nature of user patterns on the web platform was taken into account and the analysis was done a monthly basis (i.e. metrics taken are the number of users or the bounce rate for the month rather than for the week). I started work on the project in May and ended in August so the success metrics are compared between those two months to show the progress.
					</p>
					<h3>Success Metrics</h3>
						<p>
						The metrics used to guide decision making were:
							<ul>
								<li>Monthly average bounce rate (indicator of successful visits to the platform – want to decrease)</li>
								<li>Monthly average visit length (indicator of successful visits to the platform – want to increase)</li>
							</ul>
						The metrics that were measured to determine success on this project were:
							<ul>
								<li>Monthly number of new user sign ups (indicator of converted new users – want to increase)</li>
								<li>Monthly number of active users (indicator of converted users – want to increase)</li>
								<li>Monthly number of observations uploaded (indicator of converted users – want to increase)</li>
							</ul>
					</p>

					<p>
					The business objective of this design project was to increase user traffic to the platform. Traffic to the platform is indicated by activity on the platform (observations uploaded) as well as traditional metrics such as the number of user sign ups and active users on the platform. From May 2021 when the project was started to August 2021 when I left the project (end of co-op): 
					</p>
						<p>
						The number of monthly sign ups increased by 7.2%.
						</p>
						<p>
						The number of monthly active users (user traffic) increased by 40%.
						</p>
						<p>
						The number of monthly observations increased by 17.8%.
						</p>
					<p>
					Additionally, the metrics used to validate design decisions of the designs improved as well. The bounce rate decreased by 18.1% and the average visit length increased by 62.3%. Since the KPIs measured increased (or decreased in the case for bounce rate) in line with the business goals, the redesigns were effective.
					</p>
				<h2>Key Takeaways</h2>
					<p>
					Ideally, when making design changes, you would be able to test and validate your designs on a test group of users before pushing to the main app. Due to the small team and limited financial resources, I was unable to directly test my designs on a group of users. User testing is often used in the UX industry to validate design changes but, again, due to the limitations of the project, I was unable to conduct controlled testing on the designs. Instead, I had to push the changes to the live site and then extrapolate their success based on the web analytics metrics mentioned in the Analysis section of this report. This means that the changes seen in the metrics could have been affected by factors other than the pure design change. However, I chose to validate the project based on metrics that would still provide a reliable indication of the success of the design changes. For example, instead of measuring the number of water testkit sales on the app as an indicator of successful new visitor visits I chose to measure the number of sign ups. The number of testkit sales could give a good idea of how effectively new users are converted but it could also be affected wildly by marketing. The number of new user signups on the other hand is more indicative of people who came to the site, had a good experience then signed up to return to the site and contribute to an increase in traffic.
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
