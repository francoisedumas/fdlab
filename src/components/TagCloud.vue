<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div v-for="tag in tags" :key="tag">
      <div @click="filterTag(tag)" class="uniq-tag">#{{ tag }}</div>
    </div>
  </div>
</template>

<script>
import useTags from "../composables/useTags";

export default {
  props: ["tils"],
  setup(props, context) {
    const { tags } = useTags(props.tils);
    const filterTag = (tag) => {
      console.log(tag);
      context.emit("tag", tag);
    };
    return { tags, filterTag };
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
.tag-cloud .uniq-tag {
  color: #ccc;
  text-decoration: none;
}
.tag-cloud .uniq-tag:hover {
  color: #ff8800;
  font-weight: bold;
  cursor: pointer;
}
</style>
