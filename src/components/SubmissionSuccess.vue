<template>
  <div>
    <h1>Thanks, you're awesome! Your response has been recorded!</h1>
    <router-link to="/">
      <button class="btnFdl">Back Home Page</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SubmissionFail",
};
</script>

<style>
.btnFdl {
  color: white;
  padding: 3px 10px;
  margin: 5px;
  border-radius: 3px;
  background-color: rgb(227, 132, 49);
}
</style>
