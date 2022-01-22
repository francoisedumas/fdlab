<template>
  <div class="container">
    <div class="vertically-centered">
      <img src="../assets/francois.jpg" alt="Ma photo" class="img-circle" />
      <h1>Hello I'm Francois</h1>
    </div>
    <div class="vertically-centered">
      <Technologies />
      <Overview />
    </div>
    <ButtonToTop />
  </div>
</template>

<script>
import Technologies from "../components/Technologies.vue";
import Overview from "../components/Overview.vue";
import ButtonToTop from "../components/ButtonToTop.vue";

export default {
  name: "Home",
  components: { Technologies, ButtonToTop, Overview },
};
</script>

<style scoped>
.img-circle {
  height: 80px;
  width: 80px;
  object-fit: cover;
  border-radius: 50%;
  padding: 10px;
}
.vertically-centered {
  display: flex;
  align-items: center;
}
@media (max-width: 640px) {
  .vertically-centered {
    flex-direction: column;
  }
}
.overview p {
  line-height: 3em;
}
</style>
