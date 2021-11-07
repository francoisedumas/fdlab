<template>
  <div class="container">
    <div class="vertically-centered">
      <img src="../assets/francois.jpg" alt="Ma photo" class="img-circle" />
      <h1>Hello I'm Francois</h1>
    </div>
    <div class="vertically-centered">
      <Technologies />
      <div class="overview">
        <p>I'm a Ruby on Rails and VueJS developer 💻</p>
        <p>
          I have an international background in the ophtalmic business 🕶 in Asia
          and Europe.
        </p>
        <p>I am a freelance web developer, and teacher at Le Wagon 🚃</p>
        <p>I'm a curious and enthusiast person, always eager to learn 🎓</p>
        <p>
          Want to talk about a project,
          <router-link :to="{ name: 'Contact' }" class="simple-link">
            contact me 📧
          </router-link>
        </p>
      </div>
    </div>
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
