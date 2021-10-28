<template>
  <div class="home">
    <h1>Thanks, you're awesome! Your response has been recorded!</h1>
    <router-link to="/">
      <button>Back Home Page</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SubmissionFail",
};
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
  text-decoration: none;
}
</style>
