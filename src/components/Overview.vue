<template>
  <div class="home-box">
    <h2>About me</h2>
    <p class="intro-text">
      I'm a Ruby on Rails and VueJS developer 💻. I have an international
      background in the ophtalmic business 🕶 in Asia and Europe. I am a
      freelance web developer, and teacher at Le Wagon 🚃. I'm a curious and
      enthusiast person, always eager to learn 🎓 Want to talk about a project,
      <router-link :to="{ name: 'Contact' }" class="simple-link">
        contact me 📧
      </router-link>
    </p>
    <h2>Testimonials</h2>
    <Carousel />
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";

export default {
  components: { Carousel },
};
</script>
<style scoped>
.intro-text {
  padding: 15px;
  text-align: justify;
}
</style>
