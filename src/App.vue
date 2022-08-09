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
/* 한글 */
@font-face {
  font-family: 'NotoSansKR-Regular';
  src: url('./assets/fonts/NotoSansKR-Regular.otf') format('woff');
  unicode-range: U+AC00-D7A3;
}

/* 영어 */
@font-face {
  font-family: 'Roboto-Regular';
  src: url('./assets/fonts/Roboto-Regular.ttf') format('woff');
  unicode-range: U+0041-005A, U+0061-007A;
}

* {
  margin: 0;
  padding: 0;
  color: white;
  font-family: 'NotoSansKR-Regular', 'Roboto-Regular';
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
