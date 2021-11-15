<template>
  <div class="navbar">
    <nav>
      <router-link :to="{ name: 'Home' }" class="nav-title">
        <h1>FDL</h1>
      </router-link>
      <div class="links">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Projects' }">Projects</router-link>
        <router-link :to="{ name: 'Til' }">TIL</router-link>
        <router-link :to="{ name: 'Contact' }">Contact</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  margin: 0 auto;
  padding: 20px 0px;
  border-bottom: 1px dashed black;
  color: var(--light-gray);
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav .links {
  margin-left: auto;
  padding-right: 25px;
}
nav h1 {
  font-size: 32px;
  margin-left: 20px;
  color: var(--light-gray);
}
nav .links a {
  margin-left: 16px;
}
.navbar a.router-link-active {
  color: var(--primary);
  font-weight: bold;
}

@media (max-width: 640px) {
  .navbar h1 {
    font-size: 24px;
    margin-left: 5px;
  }
  nav .links {
    padding-right: 10px;
  }
}
</style>
