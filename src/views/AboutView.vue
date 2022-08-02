<template>
    <div class="about">
        <div class="about_box">
            <div class="about_left_box">
                이미지 부분
            </div>
            <div class="about_right_box">
                About
            </div>
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
    display: flex;
    justify-content: space-between;
}
.about_left_box {
    width: 20%;
    height: 100%;
    background-color: gray;
}
.about_right_box {
    width: 70%;
    height: 100%;
    overflow-y: scroll;
    background-color: gray;
}
</style>