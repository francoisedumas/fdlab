<template>
  <div class="home">
    <h1>Today I learned (TIL)</h1>
    <button @click="currentTag = ''" class="btnFdl">Clear filter</button>
    <div class="layout">
      <TagCloud :tils="tils" @tag="onTag" />
      <PostList :tils="filterTils" />
    </div>
    <ButtonToTop />
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";
import ButtonToTop from "../components/ButtonToTop.vue";
import { ref, computed } from "vue";

export default {
  name: "Til",
  components: { PostList, TagCloud, ButtonToTop },
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
        title: "Each and find_each",
        description:
          "When you call **#each**, all records will be loaded into memory. When you call **#find_each**, records will be loaded into memory in batches of the given batch size. So when your query returns a number of records that would be too much memory for the server's available resources, then using **#find_each** would be a great choice.",
        tags: ["Ruby", "Active Record"],
      },
      {
        title: "Case statement",
        description:
          "In a **case** statement a **,** (coma) is the equivalent of **||** in an if statement.",
        tags: ["Ruby"],
      },
      {
        title: "find() and find_by()",
        description:
          "When no record is found, **find_by()** returns **nil** whereas **find()** returns **ActiveRecord::RecordNotFound** exception.",
        tags: ["Ruby", "Active Record"],
      },
      {
        title: "link_to_unless_current",
        description:
          "**link_to_unless_current** works just link **link_to** except that it doesn’t create a link if the browsers current URL is the same as the link target.",
        tags: ["Ruby", "Method"],
      },
      {
        title: "presence",
        description:
          "To avoid blank string you can add **presence** exp: **state = params[:state] if params[:state].present?**",
        tags: ["Ruby", "Method"],
      },
      {
        title: "zsh_stats",
        description: "**zsh_stats** returns the top 20 commands you use",
        tags: ["ZSH"],
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
