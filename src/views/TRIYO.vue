<template>
	<span>
		<NavBar/>
		<div class="about">
			<div>
				<h1>Designing Mobile Second</h1>
				<br>
				<p class="sub-header"><b>Organization:</b> TRIYO</p>
				<p class="sub-header"><b>Term:</b> Winter 2022</p>
				<p class="sub-header"><b>Type:</b> UX Design, UX Research</p>
				<p class="sub-header"><b>Skills:</b> Iterative design, prototyping, statistical analysis</p>
				<p class="sub-header"><b>Tools:</b> Figma, Excel</p>
				<p class="sub-header"><b>Note:</b> Due to Intellectual Property rights wireframes, prototypes and images of the mobile design I created in Figma can't be shown in this case study.</p>
				<br>
				
				<h2>Problem definition</h2>
					<p>
						During my co-op term at TRIYO, one of my tasks was to create designs for a mobile version of the company’s desktop web app. The app has document collaboration as well as project management capabilities and the main customer base is professionals in the finance industry. The company builds customized functionality for their corporate customers on a contractual basis. One of our customers was a large bank where they were using the software to track their staffing capacity so they could allocate incoming work effectively. Professionals in the finance industry are known to be very busy [1] and this was the case for our customer. They approached the team and requested a way for their project managers and staff to be able to complete the tasks related to capacity tracking on their mobile devices since the current version of the software wasn’t optimized for mobile, meaning users had to log on to it on a desktop or laptop computer to complete tasks. 
						There were two main tasks associated with the goal of being able to allocate work:
						</p>
						<p>
						First, staff had to fill out a form in the software with various information such as hours spent on their assigned projects throughout the week, their perceived capacity for more work (High, Medium, Low) and logging their vacation hours.
						</p>
						<p>
						Second, staffers (project managers) would view an amalgamated view of all the staff’s form entries on the app’s “Dashboard”. They would then be able to view each staff’s capacity and drill down to more specific details about the time spent on each of their projects. This view was extremely important for staffers to be able to allocate new work effectively.					
						</p>	
						<p>		
						Both of these tasks and corresponding prototypes had been designed out earlier in the term for desktop view but not for mobile. Thus, the main objective of this project was to design a mobile-friendly version of the desktop functionality associated with these two tasks.
						Generally accepted best practice in web app design is to design mobile-first [2], however there will be cases where this isn’t possible or the main product has already been designed for desktop. In such cases, it is necessary to design mobile-second and adapt the desktop version to function on mobile. This case study will be centred around the question “Is it better to design down directly from the existing functionality (desktop format) or re-design the system based on mobile best practices?”.
					</p>

				<h2>Method</h2>
					<p>
						Designing mobile-second (from a desktop version) has advantages and disadvantages. The functionality and flows for the system are pre-defined, however the size and layout of the components are not optimized for the screen size and display poorly. This either prevents users from being able to use the app or leads to a displeasing user experience.
						One feature of the app I worked on was that it was accessible online in a desktop format and also in a Microsoft Office Suite add-in. I divided my design process into multiple phases, described below.
					</p>
					<p>	
						<i>Research</i>
						<br>
						Before beginning to design anything, I gathered research and best practices for designing for mobile. Due to the nature of the project, I needed tables to be displayed so I did research on how best to show the specific table required by the customer. I also researched mobile form design since users had to complete a form and best practices for accordions.
					</p>
					<p>
						<i>Prototyping</i>
						<br>
						Next, I prototyped two designs in Figma to test against each other. The first design offered the required functionality and was created based on best practices and mobile design research. The second design was a slightly modified version of the app’s add-in which was optimized for desktop use. This phase had a pseudo iteration phase where I presented both designs to other members of the UX team to gather basic feedback and get the prototypes ready for testing on a larger audience.
					</p>
					<p>
						<i>Survey Design</i>
						<br>
						Once the two designs were prototyped out, I designed a survey to compare their performance on the functionality the customer requested. I included questions with Likert scales so that I could conduct statistical analysis on the differences. Due to the small sample size of users I had access to test, I added several qualitative questions to ensure I would have meaningful feedback if the quantitative questions proved unsuccessful. Next, I divided the TRIYO team into two equal and random groups (by alphabetical order of first name). Group 1 was assigned to the first design (research based) and Group 2 was assigned to the second design (existing design based). Each group was given the same set of instructions for testing the prototype but they had access to different demos. They were also asked to fill out the survey questions as they completed the tasks.
					</p>
					<p>
						<i>First Iteration</i>
						<br>
						Based on the survey results and analysis completed on the first two prototypes, I designed a third version with the required design changes. The analysis and survey results are discussed in the following sections. 
					</p>		

				<h2>Design Decisions</h2>
					<p>
					Many design decisions had to be made throughout this process and the first was what screen size to build the prototypes in. When designing for any sort of digital product it is best practice to design for the smallest screen size available since it is easier to scale up than down. Currently, on the market, the smallest screen size that is still widely used on smartphones is 320px by 568px so this is the size I built my prototypes in [3].
					</p>
					<p>
					<i>Summary of Initial Designs</i>
				<br>
					The first design was based on the research conducted during the first phase of the project. The table design for the dashboard was chosen based on an article from UX Collective, that indicated the best ways to display different table information sets on mobile screens [4]. A fixed header column and the rest horizontally scrollable fit this situation best due the nature of the information required. The accordion style form was based on an article by source [5] to make filling out the information as quick as possible.
				</p>
				<p>
					[Design 1 prototype on Figma - unable to show due to Intellectual Property]
				</p>
				<p>
					The second design was based on the add-in format with the minor adjustments of a hamburger menu for navigation purposes since the add-in format navigation was too small for mobile.
				</p>
				<p>
					[Design 2 prototype on Figma - unable to show due to Intellectual Property]
				</p>
				<p>
					<i>Iteration 1 Design</i>
					<br>
					After the first round of testing was concluded, I collected the survey data and ran two tailed t-tests on the Likert scale questions. None of the comparisons revealed statistically significant relationships however one was close (see Table 1). Due to the small sample size of testers it is possible that there were statistically significant results that were obscured by small sample size considerations. Since my user test group was limited, this was expected so I used the qualitative results to identify pain points and design solutions.
				</p>

				<h2>Results</h2>

				<p>
					<b>Table 1. Survey results two tailed t-test comparison</b>
                </p>
					<table style="width:80%">
						<tr>
							<th>Question</th>
							<th>P value</th>
							<th>Significant?</th>
						</tr>
						<tr>
							<td>Q1. How familiar are you with the GIB (Resource Management) Use Case?</td>
							<td>0.4766</td>
							<td>no</td>
						</tr>
						<tr>
							<td>Q2. How easily were you able to find the task?</td>
							<td>0.4766</td>
							<td>no</td>
						</tr>
						<tr>
							<td>Q3. How easily were you able to edit the task?</td>
							<td>0.089</td>
							<td>borderline</td>
						</tr>
						<tr>
							<td>Q4. How easily were you able to save the task?</td>
							<td>0.3739</td>
							<td>no</td>
						</tr>
						<tr>
							<td>Q5. How easily were you able to view information in the dashboard widgets?</td>
							<td>0.5291</td>
							<td>no</td>
						</tr>
						<tr>
							<td>Q6. How easily were you able to navigate using the menu?</td>
							<td>0.242</td>
							<td>no</td>
						</tr>
						</table>
                <p>
						The main qualitative feedback points that gathered from the survey were:
						<ul>
							<li>Most users indicated that the font sizes were too small</li>
							<li>Many users indicated that the element sizes were too small</li>
							<li>Many users indicated that the Table scrolling feature was not obvious</li>
							<li>Users testing Design 1 indicated it was the same or easier to use than the current version whereas Users testing Design 2 indicated it was more difficult or the same</li>
						</ul>		
				</p>
				<p>		
				Based on feedback in the survey, I designed solutions for the three main issues case studyed. I also took the final point into consideration and based the first iteration off of the Design 1 layout rather than the Design 2 layout.
				</p>
				
                <h2>Design Validation</h2>
					<p>
						This project was started near the end of my co-op term and was a large undertaking. As such, a final mobile version of the product wasn’t completed before the end of my term. However, one of my objectives was to decide whether the team should have the mobile version mimic the Microsoft add-in layout or if they should complete a more extensive redesign to accommodate mobile users. Based on the user test of the comparison of the two options I was able to deliver a response to the team and assert that a more extensive redesign would serve users better than re-using the add-in layout. This decision was based on the results of the user survey and testing that indicated Design 1 outperformed Design 2 (see Table 1 above).

						Due to time constraints and the end of my co-op term I wasn’t able to validate the first Iteration and deem it an improvement over the previous designs however, if I were to do that, I would take the following steps:
							Gather a user test group.
							Provide user test group with instructions on the task they should complete to test the design.
							Provide users with the same survey as was used for the Design 1/Design 2 comparison and get them to complete it.
							Compare the results of the survey from Iteration 1 on the Design 1 and 2 survey results. If the Iteration 1 design scores better than Designs 1 and 2 then it is successful in addressing the problem more effectively.

						Comparing iterations to previous iterations is an effective way to measure success as improved scores indicate successful progress towards final objectives.

						This design solution has a few limitations. The first is it’s use of tables to display information. Using tables to display information on mobile screens is not recommended best practice as mobile screens are very narrow and horizontal scrolling can be problematic when vertical scrolling is also available. However, to cater to the specific needs of our customer, it was necessary since the customer wanted a solution that mimicked their existing solution which was built in a spreadsheet. They wanted to avoid asking their employees to change to a completely new system since, as mentioned before, the whole point of this solution was to save time, not spend it on learning a whole new system when the one they had in place worked for them.

						The other limitation is that this solution is accessed through the browser, instead of a native app. An app would provide easier access via the home screen and allow users to stay signed in to their account. However, the resources and time required for this type of solution weren’t available and accessing the web app from a browser on a mobile device is still a reasonable and effective method of using it.

				</p>
				
				<h2>Conclusion</h2>
					<p>
						In conclusion, this case study addressed the question “Is it better to design down directly from the existing functionality (desktop format) or re-design the system based on mobile best practices?”. Based on the results of user testing it would be reasonable to state that re-designing for mobile when designing down instead of trying to shrink existing designs serves users more effectively.
						This is useful information for digital designers, especially those working on projects that need to be scaled down from a larger desktop version to a mobile version (mobile-second design). Since mobile-first design is best practice, there are not a lot of resources for designers who are working to design down instead of design up. Many desktop-only websites and web-apps exist and as more people around the world gain access to the internet through only their smartphones [2], it will be necessary to effectively redesign these resources for smaller screens.
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

table{
	border:1px solid black;
}

tr{
	text-align: left;
	color: #191919;
	font-size: 20px;
	font-weight: 100;
	max-width: 90%;
	border:1px solid black;
}
th{
	text-align: left;
	color: #191919;
	font-size: 20px;
	font-weight: 100;
	max-width: 90%;
	border:1px solid black;
}
</style>
