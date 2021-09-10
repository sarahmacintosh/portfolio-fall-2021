<template>
	<div id="nav">
		<router-link to="/"><img src="../assets/home.svg" alt="SM"></router-link>
		<div class="links">
			<a href="/#projects">Projects/Portfolio</a>
			<router-link to="/about">About</router-link>
			<a href="/resume.pdf">Resume</a>
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
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.links {
	display: flex;
	justify-content: space-between;
}
.links > * {
	padding: 1rem;
}
</style>