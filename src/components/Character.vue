<template>
    <div class="character">
        <h2>Ваш прогресс Великого Делания</h2>
        <div class="image-block">
            <img src="../assets/character.jpg" />
            <p><i>Нигредо: {{ this.nigredo }}</i> <br />
            <i>Альбедо: {{ this.albedo }}</i> <br />
            <i>Рубедо: {{ this.rubedo }}</i></p>
            <p><i>Уровень камня: 0</i></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Character',
    props: {

    },
    data() {
        return {
            nigredo: this.nigredo,
            albedo: this.albedo,
            rubedo: this.rubedo
        }
    }
}
</script>

<style scoped>
    p {
        font-size: 2rem;
        text-align: left;
    }
    i {
        padding-left: 20px;
    }
    h2 {
        font-size: 3rem;
    }
    img {
        width: 200px;
        float: left;
    }
</style>
