<template>
  <div class="container">
    <h1>Today I learned (TIL)</h1>
    <button @click="currentTag = ''" class="btn-secondary">Clear filter</button>
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
        title: "distinct vs uniq",
        description:
          "For a query **Tag.joins(:articles).where(articles: articles).distinct** prefer to use **distinct** which is an Active Record method instead of **uniq** which is a Ruby method, your query will start with **SELECT DISTINCT** instead of only **SELECT**",
        tags: ["Active Record"],
      },
      {
        title: "order vs sort",
        description:
          "Following distinct vs uniq TILS, for a query **Tag.joins(:articles).where(articles: articles).distinct.order(:name)** prefer to use **order** which is an Active Record method instead of **sort**, your query will end with **ORDER BY 'tags'.'name' ASC**",
        tags: ["Active Record"],
      },
      {
        title: "with_attached_<attachment>",
        description:
          "To avoid N+1 in an index page with articles coming with a photo (model has_one_attached :photo) use **Article.with_attached_photo** instead of Article.all",
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
      {
        title: "to float & to integer",
        description:
          "**''.to_f** returns **0.0** same as '0'.to_f and **'0'.to_i** return **0**",
        tags: ["Ruby", "Method"],
      },
      {
        title: "extract days, hours, minutes,...",
        description:
          "**ActiveSupport::Duration.build(2_000_000.seconds).parts** returns **{:weeks=>3, :days=>2, :hours=>3, :minutes=>33, :seconds=>20}**",
        tags: ["Ruby", "Method"],
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
