<template>
  <div class="home">
    <h1>Thanks for your message! I'll answer you ASAP!</h1>
    <router-link :to="{ name: 'Home' }">
      <button>Back Home Page</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SubmissionFail",
};
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
