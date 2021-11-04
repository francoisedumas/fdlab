<template>
  <div class="container">
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
