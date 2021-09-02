<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div v-for="tag in tags" :key="tag">
      <div @click="$emit('filterTils', tag)">#{{ tag }}</div>
    </div>
  </div>
</template>

<script>
import useTags from "../composables/useTags";

export default {
  props: ["tils"],
  setup(props) {
    const { tags } = useTags(props.tils);
    // const filterTag = (tag) => {
    //   console.log(tag);
    //   context.emit("filterTils", tag);
    // };
    return { tags };
  },
};
</script>

<style>
.tag-cloud {
  padding: 10px;
}
.tag-cloud h3 {
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
  color: #444;
}
.tag-cloud div {
  display: inline-block;
  padding: 10px;
}
.tag-cloud a {
  color: #ccc;
  text-decoration: none;
}
.tag-cloud a.router-link-active {
  color: #ff8800;
  font-weight: bold;
}
</style>
