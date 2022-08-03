<template>
    <div class="about_in_box introduce">
        <h1 class="about_title introduce_title">{{ title }}</h1>
        <div class="about_in_flex_box introduce_box">
            <div class="about_left_box introduce_image">
                <img :src="require('../../assets/minho.jpg')" alt="Profile Image">
            </div>
            <div class="about_right_box introduce_text">
                <p v-for="value in values" :key="value">{{ value }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            title: 'About Me' as string,
            values: [
                '학습과 성장에 관심이 많은 Vue.js 프론트엔드 개발자입니다.',
                '새로운 기술을 배우는 것을 좋아하고 트렌드에 맞출려고 노력합니다.',
                '공식 문서와, 인터넷 강의를 통해 트렌드한 기술을 배우고 실무에 바로 사용할 수 있게 학습합니다 😊',
            ] as string[],
        }
    },
})
</script>

<style scoped>
.about_in_box {
    margin-bottom: 2rem;
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