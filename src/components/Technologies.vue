<template>
  <div id="skills" class="technologiesBox">
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

<style>
.technologiesBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}
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
.html {
  background-color: rgb(224, 184, 172);
}
.css {
  background-color: rgb(227, 132, 49);
  animation-delay: 1s;
}
.js {
  background-color: rgb(224, 184, 172);
}
.vue {
  background-color: rgb(227, 132, 49);
}
.ror {
  background-color: rgb(224, 184, 172);
  animation-delay: 1s;
}
.sql {
  background-color: rgb(227, 132, 49);
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
