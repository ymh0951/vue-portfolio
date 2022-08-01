<template>
    <div class="main">
        <div class="loader">
            <h1 class="main-title">
                Yoo Minho<br>
                PortFolio
            </h1>
            <span style="--i:1;"></span>
            <span style="--i:2;"></span>
            <span style="--i:3;"></span>
            <span style="--i:4;"></span>
            <span style="--i:5;"></span>
            <span style="--i:6;"></span>
            <span style="--i:7;"></span>
            <span style="--i:8;"></span>
            <span style="--i:9;"></span>
            <span style="--i:10;"></span>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        
    })
</script>

<style scoped>




.main {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    overflow: hidden;
}
.loader {
    position: relative;
    width: 350px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main-title {
    font-size: 2.5rem;
    text-align: center;
}
.loader span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(calc(36deg * var(--i)));
}
.loader span::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: transparent;
    border: 4px solid #00efff;
    box-sizing: border-box;
    box-shadow: 0 0 20px #00efff,
    -30px -30px 0 #00efff,
    -30px -30px 20px #00efff,
    30px 30px 0 #00efff,
    30px 30px 20px #00efff,
    30px -30px 0 #00efff,
    30px -30px 20px #00efff,
    -30px 30px 0 #00efff,
    -30px 30px 20px #00efff;
    animation: animate 5s linear infinite;
    animation-delay: calc(-.25s * var(--i));
    transform-origin: 20px;
    transition: 2s;
}
.loader:hover span::before {
    box-shadow: 0 0 20px #00efff,
    -300px -300px 0 #00efff,
    -300px -300px 20px #00efff,
    300px 300px 0 #00efff,
    300px 300px 20px #00efff,
    300px -300px 0 #00efff,
    300px -300px 20px #00efff,
    -300px 300px 0 #00efff,
    -300px 300px 20px #00efff;
    transform-origin: 250px;
}
@keyframes animate {
    0% {
        transform: rotate(0deg);
        filter: hue-rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
        filter: hue-rotate(360deg);
    }
}
</style>