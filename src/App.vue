<template>
  <div id="app" @mousemove="cursor">
    <div class="cursor" ref="cursor"></div>
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
  methods: {
    cursor(e: MouseEvent): void {
      this.$refs.cursor.style.top = e.clientY + 'px';
      this.$refs.cursor.style.left = e.clientX + 'px';
    }
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
  cursor: none;
  font-family: "Apple SD Gothic Neo";
}
body {
  overflow: hidden;
  background: #303030;
}
.cursor {
  width: 25px;
  height: 25px;
  position: absolute;
  border-radius: 50%;
  background: #00efff;
  border: 4px solid #00efff;
  box-sizing: border-box;
  box-shadow: 0 0 20px #00efff;
  animation: animate 5s linear infinite;
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
