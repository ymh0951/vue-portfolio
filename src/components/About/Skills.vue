<template>
    <div class="about_in_box introduce">
        <h1 class="about_title introduce_title">{{ title }}</h1>
        <FrontEnd></FrontEnd>
        <BackEnd></BackEnd>
        <ETC></ETC>
    </div>
</template>


<script lang="ts">
import Vue from 'vue'
import FrontEnd from './Skills/FrontEnd.vue'
import BackEnd from './Skills/BackEnd.vue'
import ETC from './Skills/ETC.vue'

export default Vue.extend({
    components: { 
        FrontEnd,
        BackEnd,
        ETC,
    },
    data() {
        return {
            title: 'Skills' as string,
        }
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
    /* background-color: gray; */
}

.about_title {
    text-align: center;
    padding: 1rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px dashed white;
}
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