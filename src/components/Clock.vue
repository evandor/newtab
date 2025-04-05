<template>
  <!-- https://codepen.io/tarunspartan/pen/BaywmEY -->
  <div class="main">
    <span id="sec"></span>
    <span id="min"></span>
    <span id="hr"></span>
  </div>
</template>
<script lang="ts" setup>

import { onMounted } from 'vue';

const start = () => {
  setInterval(() => {
    const d = new Date();
    const hour = d.getHours()-12
    const minutes = d.getMinutes()
    const seconds = d.getSeconds()

    //Seconds
    const secSpan = document.getElementById('sec')
    secSpan!.style.transform = `rotate(${seconds*6}deg)`

    // const h = document.getElementById('h').innerHTML = hour+':'
    // const m = document.getElementById('m').innerHTML = minutes+':'
    // const s = document.getElementById('s').innerHTML = seconds


    //Minutes
    const minSpan = document.getElementById('min')
    minSpan!.style.transform = `rotate(${minutes*6+seconds/10}deg)`

    //Hours
    const hrSpan = document.getElementById('hr')
    hrSpan!.style.transform = `rotate(${hour*30+minutes/2}deg)`

  },1000)
}

onMounted(() => {
  start()
})

</script>

<style scoped>

.time{
  position: absolute;
  top: 10%;
  display: flex;
  transform: rotate(-25deg) skew(25deg);
  border: 1px solid #dddddd;
  background-color: #dddddd;
  box-shadow: -1px 1px 0px rgba(255, 255, 255,.5)
  ,-3px 3px 0px rgba(255, 255, 255,.4)
  ,-5px 5px 0px rgba(255, 255, 255,.3)
  ,-7px 7px 0px rgba(255, 255, 255,.2)
  ,-9px 9px 0px rgba(255, 255, 255,.1);
}

.time h1{
  margin: 0px 0px;
  font-size: 50px;
  color: rgba(38, 38, 38,.4);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.main{
  height: 30px;
  width: 30px;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(38, 38, 38,.3);
  border-radius: 50%;
  transform: rotate(180deg);
}

.main > span {
  display: inline-block;
  position: absolute;
  border-radius: 10px;
  transition-duration: 50ms;
  transition-timing-function: linear;
}

.main span:nth-child(1){
  height: 60%;
  width: 2%;
  background-color: rgba(0, 0, 0,.2);
  top: 40%;
  transform-origin: 50% 16.6666666667%;
  z-index: 3;
}

.main span:nth-child(2){
  height: 45%;
  width: 2.5%;
  background-color: rgba(0, 0, 0,.6);
  top: 50%;
  transform-origin: 50% 0%;
  z-index: 2;
}

.main span:nth-child(3){
  height: 30%;
  width: 3%;
  background-color: rgba(0, 0, 0,.9);
  top: 50%;
  transform-origin: 50% 0%;
  z-index: 1;
}

</style>
