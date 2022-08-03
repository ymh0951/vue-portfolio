<template>
    <header class="header">
        <nav class="header-menu">
        <router-link class=" menu" to="/home">Home</router-link> |
            <router-link class="menu" to="/about">About</router-link> |
            <router-link class="menu" to="/project">Projects</router-link> |
            <router-link class="menu" to="/contact">Contact</router-link>
        </nav>
    </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>

<style scoped>
.header {
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: right;
    align-items: center;
}
.header-menu {
    margin: 1.5rem;
}
.menu {
    margin: 0 1rem;
    font-size: 1.3rem;
    text-decoration: none;
    transition: .5s;
}
.router-link-exact-active {
    color: red;
}
</style>