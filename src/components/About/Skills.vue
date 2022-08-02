<template>
    <div class="about_in_box introduce">
        <h1 class="about_title introduce_title">Skills</h1>
        <div class="skills_box">
            <h2 class="skill_">Front-End</h2>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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
    /* background-color: gray; */
}

.about_title {
    text-align: center;
    padding: 1rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px dashed white;
}

.about_in_flex_box {
    display: flex;
    justify-content: space-around;
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