<template>
  <NavBar />
  <router-view />
  <Footer />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { NavBar, Footer },
};
</script>

<style>
body {
  background: #f9f6f0;
}
#app {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  color: #555;
}
p {
  line-height: 2em;
}
</style>
