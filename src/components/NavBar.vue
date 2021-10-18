<template>
  <header>
    <router-link :to="{ name: 'Home' }"><h1>FDL</h1></router-link>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Projects' }">Projects</router-link>
      <router-link :to="{ name: 'Til' }">TIL</router-link>
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
      <router-link :to="{ name: 'Thanks' }">Thanks</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  border-bottom: 1px dashed black;
}
header h1 {
  color: #dfdfdf;
  font-size: 32px;
}
header a {
  color: #bbb;
  text-decoration: none;
  margin-left: 20px;
}
header a.router-link-active {
  color: #444;
  font-weight: bold;
}
</style>
