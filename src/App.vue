<template>
  <div id="app">
    <AppHeader></AppHeader>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '@/components/AppHeader.vue';

export default Vue.extend({
  components: {
    AppHeader,
  },
})
</script>

<style>


@font-face {
  font-family: "Apple SD Gothic Neo";
  src: url("//db.onlinewebfonts.com/t/67680f2eb947c5cbd58b40961b4a61e9.eot");
  src: url("//db.onlinewebfonts.com/t/67680f2eb947c5cbd58b40961b4a61e9.eot?#iefix") format("embedded-opentype"),
  url("//db.onlinewebfonts.com/t/67680f2eb947c5cbd58b40961b4a61e9.woff2") format("woff2"),
  url("//db.onlinewebfonts.com/t/67680f2eb947c5cbd58b40961b4a61e9.woff") format("woff"),
  url("//db.onlinewebfonts.com/t/67680f2eb947c5cbd58b40961b4a61e9.ttf") format("truetype"),
  url("//db.onlinewebfonts.com/t/67680f2eb947c5cbd58b40961b4a61e9.svg#Apple SD Gothic Neo") format("svg");
}

* {
  margin: 0;
  padding: 0;
  color: white;
  font-family: "Apple SD Gothic Neo";
}

body {
  overflow: hidden;
  background: rgb(35, 35, 35);
  background: linear-gradient(0deg, rgba(35, 35, 35, 1) 35%, rgba(93, 93, 93, 1) 100%);
}

@keyframes animate {
  0% {
    filter: hue-rotate(0deg);
  }

  100% {
    filter: hue-rotate(360deg);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
