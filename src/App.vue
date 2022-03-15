
<template>
  <div id="app">
    <nav> 
      <router-link to="/"><i class="fa-solid fa-house-chimney"></i></router-link> 
      <router-link to="/add"><i class="fa-solid fa-plus"></i></router-link>
      <router-link to="/about"><i class="fa-solid fa-circle-info"></i></router-link> 
      <router-link to="/user"><i class="fa-solid fa-user"></i></router-link>
  
    </nav>
    <router-view/>
    <footer class="footer-styles">
      <i class="fa-brands fa-github"></i>
      <i class="fa-brands fa-linkedin-in"></i>
      <i class="fa-solid fa-envelope"></i>
    </footer>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>

body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color:rgb(255, 255, 255);
  background: #121212;
}

nav {
  display: flex;
  justify-content: space-around;
  font-size: 25px;
  padding: 25px;
  background: #1C241D;
}

nav a {
  font-weight: bold;
  color: white;

}
nav a.router-link-exact-active {
  color: #7f6085;
}
nav a:hover {
  color: #af8eb5;
}

footer {
  background-color: #1C241D;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  padding: 15px;
  position: 0;
}
footer i {
  font-size: 25px;
}
footer i:hover {
  color: #af8eb5
}
</style>
