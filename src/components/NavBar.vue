<template>
  <header>
    <router-link :to="{ name: 'Home' }"><h1>FDL</h1></router-link>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Projects' }">Projects</router-link>
      <router-link :to="{ name: 'Til' }">TIL</router-link>
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  border-bottom: 1px dashed black;
}
header h1 {
  color: var(--light-gray);
  font-size: 32px;
}
header a {
  color: var(--light-gray);
  margin-left: 20px;
}
header a.router-link-active {
  color: var(--primary);
  font-weight: bold;
}
</style>
