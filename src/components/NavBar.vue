<template>
	<div id="nav">
		<router-link to="/"><img src="../assets/home.svg" alt="SM"></router-link>
		<div class="links">
			<router-link to="/#projects" class="nav-li">Projects</router-link>
			<router-link to="/about" class="nav-li">About</router-link>
			<a href="/resume.pdf" class="nav-li" target="_blank">Resume</a>
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
  font-size: 20px;
}

#nav a.router-link-exact-active {
  color: #11ABB0;
}

.nav-li {
	padding: 1rem;
}

.links {
	display: flex;
	justify-content: space-between;
}
.links > * {
	padding: 1rem;
}
</style>