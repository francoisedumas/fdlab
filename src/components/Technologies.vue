<template>
  <div id="skills" class="home-box">
    <h2>What do I use?</h2>
    <div class="useBox">
      <p class="html">HTML</p>
      <p class="css">CSS</p>
      <p class="js">JavaScript</p>
      <p class="vue">Vue.js</p>
      <p class="ror">Ruby</p>
      <p class="ror">Ruby on Rails</p>
      <p class="sql">SQL</p>
    </div>
  </div>
</template>

<style scoped>
.useBox {
  display: flex;
  flex-direction: column;
  border: 0.5px solid black;
  height: 400px;
  width: 300px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.useBox p {
  color: white;
  padding: 3px 10px;
  margin: 5px;
  border-radius: 3px;
  animation-name: animateText;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate;
}
.html,
.js {
  background-color: var(--beige);
}
.ror {
  background-color: var(--beige);
  animation-delay: 1s;
}
.css {
  background-color: var(--dark-orange);
  animation-delay: 1s;
}
.vue,
.sql {
  background-color: var(--dark-orange);
}
@keyframes animateText {
  from {
    transform: translateX(-100px);
  }
  to {
    transform: translateX(100px);
  }
}
</style>
