<template>
  <router-view msg="{{ msg }}"/>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            nigredo: this.nigredo,
            albedo: this.albedo,
            rubedo: this.rubedo
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
a {
    font-family: alchimic;
}
img, p, pre {
    max-width: 100%;
}
@font-face {
    font-family: 'alchimic';
    src: url('assets/alchimic.ttf');
}
h1 {
    font-size: 4rem;
}
a {
    color: white;
}
</style>
