<template>
    <div class="skills_box">
        <h2 class="skill_title">Front-End</h2>
        <ul class="skill_list">
            <li class="skill" v-for="skill in skills" :key="skill">{{ skill }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        data() {
            return {
                skills: ['HTML5', 'CSS3', 'Javascript', 'Typescript', 'jQuery', 'Vue.js', 'Nuxt.js', 'Webpack', 'Bootstrap'] as string[],
            }
        },
    })
</script>

<style scoped>

.skill_title {
    font-size: 2rem;
}

.skill_list {
    padding: 1.5rem 0;
    display: flex;
}

.skill {
    margin: 0 1.5rem;
}
</style>