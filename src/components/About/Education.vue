<template>
    <div class="about_in_box education">
        <h1 class="about_title education_title">{{ title }}</h1>
        <div class="about_in_flex_box education_box" v-for="education in educations" :key="education.title">
            <div class="about_left_box education_image">
                <img :src="education.image" alt="Profile Image">
            </div>
            <div class="about_right_box education_text">
                <div class="education_title">
                    <div class="education_top_title">
                        <h2>{{ education.title }}</h2>
                        <small><a :href="education.website">{{ education.website }}</a></small>
                    </div>
                    <small>{{ education.solution }}</small>
                    <p>{{ education.sDate }} ~ {{ education.eDate || '재학중' }} ({{ education.total }})</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import Vue from 'vue'

interface education {
    image: string,
    title: string,
    solution: string,
    website: string,
    sDate: string,
    eDate: string,
    total: string
}

export default Vue.extend({
    data() {
        return {
            title: 'Education' as string,
            educations: [
                {
                    image: require(`../../assets/images/SBS.jpg`),
                    title: 'SBS아카데미컴퓨터아트학원',
                    solution: '국비과정 스마트기기UXUI디자인양성과정',
                    website: 'https://se.sbsart.com/',
                    sDate: '2021-07-12',
                    eDate: '2021-11-24',
                    total: '',
                },
                {
                    image: require(`../../assets/images/KIT.jpg`),
                    title: '경남정보대학교',
                    solution: 'ICT컴퓨터계열 IoT전공',
                    website: 'https://www.kit.ac.kr/',
                    sDate: '2017-02-23',
                    eDate: '2021-02-18',
                    total: '',
                },
                {
                    image: require(`../../assets/images/sejeong.jpg`),
                    title: '세정고등학교',
                    solution: '상업고 스마트경영과',
                    website: 'www.sejeong.hs.kr/',
                    sDate: '2014-03-03',
                    eDate: '2017-02-14',
                    total: '',
                }
            ] as education[],
        }
    },
    created() {
        this.totalDateCalculation();
    },
    methods: {
        totalDateCalculation() {
            const educations: education[] = this.educations;

            for (let education of educations) {
                if (education.eDate) {
                    education.total = '졸업';
                } else {
                    education.total = '재학중';
                }
            } // For End  
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

.education_image {
    width: 15%;
}

.education_image img {
    width: 100%;
    border-radius: 50%;
    box-shadow: 5px 5px 20px 0px black;
}

.education_text {
    width: 65%;
    font-size: 1.2rem;
}

.education_title {
    margin-bottom: 2rem;
    font-size: 1.5rem;
}

.education_top_title {
    display: flex;
    align-items: center;
}

.education_top_title small {
    margin-left: 1.5rem;
    font-size: 1.2rem;
}

.education_title small a {
    text-decoration: none;
}

.education_title small a:hover {
    text-decoration: underline;
}

.education_title p {
    width: 30%;
    text-align: center;
    font-size: .9rem;
    padding: .4rem 0;
    margin-top: 1rem;
    border-radius: .5rem;
    box-shadow: 0 0 20px 5px #0b6400;
    background-color: #12a300;
}
</style>