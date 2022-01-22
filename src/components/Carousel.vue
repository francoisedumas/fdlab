<template>
  <agile
    :nav-buttons="false"
    :autoplay-speed="4000"
    :speed="2000"
    fade
    pause-on-hover
    pause-on-dots-hover
    autoplay
  >
    <div class="slide">
      <img
        src="../assets/testimonial_arnaud_taillard.png"
        alt="Testimonial"
        class="img-testimonial"
      />
    </div>
    <div class="slide">
      <img
        src="../assets/testimonial_timothee_garcia.png"
        alt="Testimonial"
        class="img-testimonial"
      />
    </div>
    <div class="slide">
      <img
        src="../assets/testimonial_florent_guilbaud.png"
        alt="Testimonial"
        class="img-testimonial"
      />
    </div>
  </agile>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
  components: {
    agile: VueAgile,
  },
};
</script>
<style scoped>
.img-testimonial {
  width: 400px;
  object-fit: cover;
}
.agile {
  width: 400px;
}
@media (max-width: 640px) {
  .agile {
    max-width: 300px;
  }
  .img-testimonial {
    width: 300px;
  }
}
.slide {
  display: block;
  object-fit: cover;
  width: 100%;
}
</style>
