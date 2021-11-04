<template>
  <div>
    <div v-for="til in tils" :key="til">
      <div class="til">
        <h3>{{ til.title }}</h3>
        <div v-html="markdownToHtml(til.description)"></div>
        <span v-for="tag in til.tags" :key="tag" class="emphasis">
          #{{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import marked from "marked";

export default {
  props: ["tils"],
  methods: {
    markdownToHtml(description) {
      return marked(description);
    },
  },
};
</script>

<style scoped>
.til {
  margin: 0 40px 30px;
  padding-bottom: 30px;
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
  background: var(--secondary);
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  transform: rotateZ(-1deg);
}
.emphasis {
  font-style: italic;
}
</style>
