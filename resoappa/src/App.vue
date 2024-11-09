<template>
<div id="app">
  <headerPage/>
    <router-view/>
</div>

</template>

<script>
import HeaderPage from './components/HeaderPage.vue'
export default {
  name: 'App',
  components: {
    HeaderPage
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap');

html, body {
  font-family: 'Playwrite GB S', sans-serif;
  background-color: #adbbda;
}

#app {
  font-family: 'Playwrite GB S', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
