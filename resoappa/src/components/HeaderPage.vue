<template>
   <nav class="navbar navbar-expand-lg bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link class="nav-link " to="/">Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link " to="/ResturentList">ResturentList</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link " to="/contact">Contect</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link " to="/about">About</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>
<script>
export default {
    name:"HeaderPage",
}
</script>
<style>
  /* Set text color to white for links and brand */
  .navbar.bg-dark .navbar-brand,
  .navbar.bg-dark .navbar-nav .nav-link {
    color: white !important;
  }

  /* Style the toggler icon */
  .navbar-toggler {
    border-color: rgba(255, 255, 255, 0.5); /* Light border color */
  }
  
  .navbar-toggler-icon {
    background-color: white; /* White background for the icon */
  }
</style>