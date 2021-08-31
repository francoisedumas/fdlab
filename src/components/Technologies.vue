<template>
  <div id="skills" class="technologiesBox">
    <h1>What do I use?</h1>
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
  background-color: rgb(222, 75, 37);
}
.css {
  background-color: rgb(21, 111, 179);
  animation-delay: 1s;
}
.js {
  background-color: rgb(241, 218, 30);
}
.vue {
  background-color: rgb(63, 178, 126);
}
.ror {
  background-color: rgb(198, 1, 1);
  animation-delay: 1s;
}
.sql {
  background-color: rgb(49, 96, 145);
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
