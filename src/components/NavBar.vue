<template>
	<div id="nav">
		<router-link to="/"><img src="../assets/home.svg" alt="SM"></router-link>
		<div class="links">
			<router-link to="/#projects">Projects</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/resume.pdf">Resume</router-link>
		</div>
	</div>
</template>

<style scoped>
#nav {
	position: fixed;
	display: flex;
	justify-content: space-between;
	align-items: center;

  width: 100%;
	padding: 1rem;
	background: #313131;
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #11ABB0;
}

.links {
	display: flex;
	justify-content: space-between;
}
.links > * {
	padding: 1rem;
}
</style>