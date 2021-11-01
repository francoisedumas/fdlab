<template>
  <div class="home">
    <div class="vertically-centered">
      <img src="../assets/francois.jpg" alt="Ma photo" class="img-circle" />
      <h1>Hello I'm Francois</h1>
    </div>
    <div class="vertically-centered">
      <Technologies />
      <div>
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
.simple-link {
  text-decoration: none;
  background-color: gainsboro;
  color: #555;
}
</style>
