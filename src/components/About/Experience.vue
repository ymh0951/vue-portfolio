<template>
    <div class="about_in_box experience">
        <h1 class="about_title experience_title">{{ title }}</h1>
        <div class="about_in_flex_box experience_box" v-for="experience in experiences" :key="experience.title">
            <div class="about_left_box experience_image">
                <img :src="experience.image" alt="Profile Image">
            </div>
            <div class="about_right_box experience_text">
                <div class="experience_title">
                    <div class="experience_top_title">
                        <h2>{{ experience.title }}</h2>
                        <small><a :href="experience.website">{{ experience.website }}</a></small>
                    </div>
                    <small>{{ experience.solution }}</small>
                    <p>{{ experience.sDate }} ~ {{ experience.eDate || '재직중' }} ({{ experience.totalDate }})</p>
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
    solution: string,
    website: string,
    sDate: string,
    eDate: string,
    totalDate: string,
    value: string[],
}

export default Vue.extend({
    data() {
        return {
            title: 'Experience' as string,
            /*
                ** 데이터 입력 주의사항 **
                현재 재직중이면 eDate는 비워둘 것.
                totalDate는 자동으로 계산해주므로 항상 비워둘 것.
            */
            experiences: [
                {
                    image: require(`../../assets/images/expert-consulting.jpg`),
                    title: '엑스퍼트컨설팅',
                    solution: 'Vue.js 프론트엔드 개발자',
                    website: 'https://www.exc.co.kr/',
                    sDate: '2022-01-03',
                    eDate: '',
                    totalDate: '',
                    value: [
                    'HRM 리크루트온 프론트엔드 개발 및 유지 보수',
                    '성남시 통합 채용 사이트 구축',
                    '고양시 통합 채용 사이트 구축',
                    '기업채용 현장지원 사업 프론트엔드 개발 및 유지 보수',
                    ]
                },
            ] as experience[],
        }
    },
    created () {
        this.totalDateCalculation();
    },
    methods: {
        totalDateCalculation() {
            const experiences: experience[] = this.experiences;

            for (let experience of experiences) {
                let sDate: Date, eDate: Date;

                if (experience.eDate) {
                    sDate = new Date(experience.sDate);
                    eDate = new Date(experience.eDate);
                } else { 
                    // 재직중이라면 eDate가 현재 날짜로 기재
                    sDate = new Date(experience.sDate);
                    eDate = new Date();
                }

                if (eDate.getFullYear() - sDate.getFullYear()) { 
                    // 경력이 1년 이상이라면
                    experience.totalDate = `${eDate.getFullYear() - sDate.getFullYear()}년 ${eDate.getMonth() - sDate.getMonth() + 1}개월`;
                } else { 
                    // 경력이 1년 이하이면
                    experience.totalDate = `${eDate.getMonth() - sDate.getMonth() + 1}개월`;
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

.experience_title {
    margin-bottom: 2rem;
    font-size: 1.5rem;
}

.experience_top_title {
    display: flex;
    align-items: center;
}

.experience_top_title small {
    margin-left: 1.5rem;
    font-size: 1.2rem;
}

.experience_title small a {
    text-decoration: none;
}

.experience_title small a:hover {
    text-decoration: underline;
}

.experience_title p{
    width: 30%;
    text-align: center;
    font-size: .9rem;
    padding: .4rem 0;
    margin-top: 1rem;
    border-radius: .5rem;
    box-shadow: 0 0 20px 5px #00477a;
    background-color: #0073c5;
}
</style>