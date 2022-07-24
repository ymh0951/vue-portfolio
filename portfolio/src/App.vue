<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view/>
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
* {
  margin: 0;
  padding: 0;
  color: white;
}
body {
  background: #303030;
}
</style>
