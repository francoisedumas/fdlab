<template>
  <div class="home">
    <h1>Today I learned (TIL)</h1>
    <button @click="currentTag = ''" class="btnFdl">Clear filter</button>
    <div class="layout">
      <TagCloud :tils="tils" @tag="onTag" />
      <PostList :tils="filterTils" />
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";
import { ref, computed } from "vue";

export default {
  name: "Til",
  components: { PostList, TagCloud },
  setup() {
    const currentTag = ref();
    const tils = ref([
      {
        title: "Symbol#to_proc conversion",
        description:
          "**map(&:to_i)** is exactly the same as **map { |x| x.to_i }**",
        tags: ["Ruby"],
      },
      {
        title: "Be time zone aware!",
        description:
          "Use **Date.current** and **Time.current** instead of **Date.today** and **Time.now**. The time given will be time zone based",
        tags: ["Ruby", "Time zone"],
      },
      {
        title: "Symbol#to_proc conversion",
        description: "map(&:to_i) is exactly the same as map { |x| x.to_i }",
        tags: ["Ruby"],
      },
    ]);

    const filterTils = computed(() => {
      return currentTag.value
        ? tils.value.filter((til) => til.tags.includes(currentTag.value))
        : tils.value;
    });

    const onTag = (tag) => (currentTag.value = tag);

    return { tils, filterTils, onTag, currentTag };
  },
};
</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
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
    grid-row-gap: 50px;
  }
}
.btnFdl {
  color: white;
  padding: 3px 10px;
  margin: 5px;
  border-radius: 3px;
  background-color: rgb(227, 132, 49);
}
</style>
