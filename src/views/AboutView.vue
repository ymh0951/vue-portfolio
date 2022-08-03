<template>
    <div class="about">
        <div class="about_box">
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Experience></Experience>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AboutMe from '@/components/About/AboutMe.vue'
import Skills from '@/components/About/Skills.vue'
import Experience from '@/components/About/Experience.vue'

export default Vue.extend({
    components: {
        AboutMe,
        Skills,
        Experience
    },
})
</script>

<style scoped>
.about {
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.about_box {
    width: 85%;
    height: 90%;
    margin: 0 auto;
    overflow-y: scroll;
}
.about_box::-webkit-scrollbar {
    display: none;
}
.about_title {
    text-align: center;
    padding: 1rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px dashed white;
}
.about_in_flex_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.introduce_image {
    width: 20%;
}
.introduce_image img {
    width: 100%;
    border-radius: 50%;
    box-shadow: 5px 5px 20px 0px black;
}
.introduce_text {
    width: 65%;
    font-size: 1.3rem;
}
</style>