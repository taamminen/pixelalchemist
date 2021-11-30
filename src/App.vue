<template>
    <router-view v-on:addNigredo="addNigredo" :nigredo="nigredo" :albedo="albedo" :rubedo="rubedo" />
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            nigredo: 0,
            albedo: 0,
            rubedo: 0
        }
    },
    methods: {
        addNigredo() {
            this.nigredo++;
        }
    }
}
</script>

<style>
    html {
        color: white;
        background-image: url(assets/background.gif);
        background-repeat: repeat;
    }
    .main {
        margin: 0 auto;
        max-width: 732px;
        font-size: 1rem;
        padding: 20px 20px;
        text-align: center;
    }
    @font-face {
        font-family: 'alchimic';
        src: url('assets/alchimic.ttf');
    }
    a, h1, h2 {font-family: alchimic;}
    img, p, pre {max-width: 100%;}
    h1 {font-size: 4rem;}
    a {color: white;}
</style>
