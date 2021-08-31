<template>
  <div class="home">
    <div class="vertically-centered">
      <img src="../assets/francois.jpg" alt="Ma photo" class="img-circle" />
      <h1>Hello I'm Francois</h1>
    </div>
    <p>
      After working for 9 years in the ophtalmic business 🕶 in Asia and Europe,
      I decided to start a new page in my life to become a developer 💻! To
      achieve this, I graduated from Le Wagon bootcamp, and here I am! 🚀
    </p>
    <Technologies />
    <ButtonToTop />
  </div>
</template>

<script>
import Technologies from "../components/Technologies.vue";
import ButtonToTop from "../components/ButtonToTop.vue";

export default {
  name: "Home",
  components: { Technologies, ButtonToTop },
};
</script>

<style>
.home {
  max-width: 1000px;
  margin: 30px auto;
  padding: 10px;
}
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
</style>
