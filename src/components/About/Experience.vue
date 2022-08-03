<template>
    <div class="about_in_box experience">
        <h1 class="about_title experience_title">{{ title }}</h1>
        <div class="about_in_flex_box experience_box" v-for="experience in experiences" :key="experience">
            <div class="about_left_box experience_image">
                <img :src="experience.image" alt="Profile Image">
            </div>
            <div class="about_right_box experience_text">
                <div class="experience_text_title">
                    <h2>{{ experience.title }}</h2>
                    <span>{{ experience.date }}</span>
                </div>
                <ul>
                    <li v-for="value in experience.value" :key="value">{{ value }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import Vue from 'vue'

interface experience {
    image: string,
    title: string,
    date: string,
    value: string[],
}

export default Vue.extend({
    data() {
        return {
            title: 'Experience' as string,
            experiences: [
                {
                    image: require(`../../assets/minho.jpg`),
                    title: '엑스퍼트컨설팅',
                    date: '2022-01-03 ~ 재직중',
                    value: [
                    '프론트엔드팀',
                    'HRM 사업지원팀 IT지원',
                    '엑스퍼트컨설팅 HRM 사이트 프론트엔드 담당',
                    ]
                },
            ] as experience[],
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
    margin: 5rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.experience_image {
    width: 15%;
}

.experience_image img {
    width: 100%;
    border-radius: 50%;
    box-shadow: 5px 5px 20px 0px black;
}

.experience_text {
    width: 65%;
    font-size: 1.2rem;
}

.experience_text_title {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    font-size: 1.5rem;
}

.experience_text_title span{
    font-size: .9rem;
    margin-left: 1.5rem;
    padding: .5rem;
    border-radius: .5rem;
    box-shadow: 0 0 20px 5px #00477a;
    background-color: #0073c5;
}
</style>