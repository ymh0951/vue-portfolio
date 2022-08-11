<template>
    <div class="skills_box">
        <h2 class="skill_title">Back-End</h2>
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
                skills: [
                    'Node.js',
                    'Express',
                    'MySQL',
                    'Sequelize',
                    'MongoDB',
                    'Socket.io'
                ] as string[],
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
    flex-wrap: wrap;
}

.skill {
    margin: 0 1.5rem;
    font-size: 1.2rem;
}
</style>