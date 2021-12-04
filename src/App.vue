<template>
    <router-view v-on:addNigredo="addNigredo" v-on:addAlbedo="addAlbedo"
        v-on:addRubedo="addRubedo" :nigredo="nigredo" :albedo="albedo" :rubedo="rubedo" />
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
        },
        addAlbedo() {
            this.albedo++;
        },
        addRubedo() {
            this.rubedo++;
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
    @font-face {
        font-family: 'alchimic';
        src: url('assets/alchimic.ttf');
    }
    .main {
        margin: 0 auto;
        font-size: 1rem;
        padding: 20px 20px;
        text-align: center;
    }
    a, h1, h2 {font-family: alchimic;}
    img, p, pre {max-width: 100%;}
    h1 {font-size: 4rem;}
    a {color: white;}
</style>
