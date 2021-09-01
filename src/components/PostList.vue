<template>
  <div class="til-list">
    <div v-for="til in tils" :key="til">
      <div class="til">
        <h3>{{ til.title }}</h3>
        <p>{{ til.description }}</p>
        <span v-for="tag in til.tags" :key="tag"> #{{ tag }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tils"],
};
</script>

<style>
.til {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}
.til h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}
.til h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: rgb(227, 132, 49);
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  /* left: -30px; */
  transform: rotateZ(-1deg);
}
</style>
