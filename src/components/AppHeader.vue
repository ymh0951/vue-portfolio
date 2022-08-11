<template>
    <header class="header">
        <div class="header_link">
            <a href="https://github.com/ymh0951" target="_blank" title="Github 바로가기"><i
                    class="fa fa-brands fa-github"></i></a>
            <a href="https://velog.io/@ymh0951" target="_blank" title="Velog 바로가기"><i
                    class="fa fa-brands fa-vimeo"></i></a>
        </div>
        <nav class="header-menu">
            <router-link class=" menu" to="/home">Home</router-link> |
            <router-link class="menu" to="/about">About</router-link> |
            <router-link class="menu" to="/projects">Projects</router-link> |
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


@media screen and (min-width: 1300px) {
    .header {
        width: 100vw;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header_link {
        width: 8%;
        margin: 1.5rem;
        display: flex;
        justify-content: space-between;
    }

    .fa-brands {
        font-size: 3rem;
        transition: .3s;
    }

    .fa-vimeo {
        color: #20c997;
    }

    .fa-github:hover,
    .fa-vimeo:hover {
        transform: scale(1.2);
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
}

@media screen and (min-width: 625px) and (max-width: 1299px) {
    .header {
        width: 100vw;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header_link {
        width: 10%;
        min-width: 90px;
        margin: 1.5rem;
        display: flex;
        justify-content: space-between;
    }

    .fa-brands {
        font-size: 2.5rem;
        transition: .3s;
    }

    .fa-vimeo {
        color: #20c997;
    }

    .fa-github:hover,
    .fa-vimeo:hover {
        transform: scale(1.2);
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
}

@media screen and (max-width: 624px) {
    .header {
        width: 100vw;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header_link {
        width: 10%;
        min-width: 50px;
        margin: 1.5rem;
        display: flex;
        justify-content: space-between;
    }

    .fa-brands {
        font-size: 1.8rem;
        transition: .3s;
    }

    .fa-vimeo {
        color: #20c997;
    }

    .fa-github:hover,
    .fa-vimeo:hover {
        transform: scale(1.2);
    }

    .header-menu {
        margin: 1.5rem;
    }

    .menu {
        margin: 0 .2rem;
        font-size: 0.8rem;
        text-decoration: none;
        transition: .5s;
    }

    .router-link-exact-active {
        color: red;
    }
}

</style>