<template>
  <header>
    <router-link :to="{ name: 'Home' }" class="nav-title">
      <h1>FDL</h1>
    </router-link>
    <nav class="nav-links">
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
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0px;
  border-bottom: 1px dashed black;
  color: var(--light-gray);
}
.nav-links {
  margin-right: 20px;
}
.nav-links a {
  padding-right: 25px;
}
.nav-title {
  flex: 1;
}
header h1 {
  font-size: 32px;
  margin-left: 20px;
  color: var(--light-gray);
}
header a.router-link-active {
  color: var(--primary);
  font-weight: bold;
}

@media (max-width: 640px) {
  header h1 {
    font-size: 24px;
    margin-left: 5px;
  }
  .nav-links a {
    padding-right: 10px;
  }
  .nav-links {
    margin-right: 10px;
  }
}
</style>
