<template>
  <div class="home">
    <h1>Today I learned (TIL)</h1>
    <div class="layout">
      <TagCloud :tils="tils" @tag="filterTils" />
      <PostList :tils="tils" />
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
    const tils = ref([
      {
        title: "Symbol#to_proc conversion",
        description: "map(&:to_i) is exactly the same as map { |x| x.to_i }",
        tags: ["ruby"],
      },
      {
        title: "Symbol#to_proc conversion",
        description:
          "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
        tags: ["lorem"],
      },
      {
        title: "Symbol#to_proc conversion",
        description: "map(&:to_i) is exactly the same as map { |x| x.to_i }",
        tags: ["ruby"],
      },
    ]);
    const filterTils = computed((tag) => {
      console.log(tag)
      return tils.value.filter((til) => til.tag === tag);
    });

    console.log(filterTils.value)
    return { tils, filterTils };
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
</style>
