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
      context.emit("tag", tag);
    };
    return { tags, filterTag };
  },
};
</script>

<style scoped>
.tag-cloud {
  padding: 10px;
}
.tag-cloud h3 {
  border-bottom: 1px dashed var(--light-gray);
  padding: 16px 8px;
  color: var(--primary);
}
.tag-cloud div {
  display: inline-block;
  padding: 10px;
}
.tag-cloud .uniq-tag {
  color: var(--light-gray);
}
.tag-cloud .uniq-tag:hover {
  color: var(--secondary);
  font-weight: bold;
  cursor: pointer;
}
</style>
