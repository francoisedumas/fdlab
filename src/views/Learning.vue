<template>
  <div class="container">
    <h1>Today I learned (TIL)</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    axios
      .get("https://dry-meadow-71035.herokuapp.com/api/tils")
      .then((response) => {
        console.log(response.data);
      });
  },
};
</script>

<style scoped>
.layout {
  display: grid;
  gap: 20px;
}
@media (min-width: 768px) {
  .layout {
    grid-template-columns: 1fr 3fr;
  }
}
@media (max-width: 767px) {
  .layout {
    grid-row-gap: 20px;
  }
  h1 {
    text-align: center;
    font-size: 24px;
  }
  .btn-secondary {
    align-content: center;
    margin: 0 auto;
    margin-top: 10px;
  }
}
</style>
