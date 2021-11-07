<template>
  <div id="projects" class="videosBox">
    <h1>My Projects</h1>
    <div class="singleVideo">
      <iframe
        src="https://www.youtube.com/embed/IC6m8WkWJbE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loop
        controls
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/g7INzmsWrT4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loop
        controls
      ></iframe>
    </div>
    <h1>Currently Working With</h1>
    <div class="singleVideo">
      <iframe src="https://www.kuartz.fr" title="Kartz"></iframe>
    </div>
    <h1>Currently Volunteering For</h1>
    <div class="singleVideo">
      <iframe src="https://www.fiatope.com/" title="Fiatope"></iframe>
    </div>
  </div>
  <ButtonToTop />
</template>

<script>
import ButtonToTop from "../components/ButtonToTop.vue";

export default {
  name: "Projects",
  components: { ButtonToTop },
};
</script>

<style scoped>
.videosBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
}
.singleVideo {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: auto;
}
iframe {
  box-shadow: 0 0 1px 3px rgba(0, 0, 0, 0.1);
  margin: 10px;
}
@media (min-width: 768px) {
  iframe {
    width: 560px;
    height: 315px;
  }
}
@media (max-width: 640px) {
  h1 {
    font-size: 24px;
    text-align: center;
    margin-top: 10px;
  }
}
</style>
