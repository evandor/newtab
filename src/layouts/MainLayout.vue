<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="bg">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts"></script>

<style scoped>
.bg {
  /* The image used */
  background-image: url("https://picsum.photos/1512/832");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
