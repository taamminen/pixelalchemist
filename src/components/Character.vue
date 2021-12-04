<template>
    <div class="character">
        <h2>Ваш прогресс</h2>
        <div class="image-block">
            <img src="../assets/character.jpg" />
            <p><i><a>Нигредо:</a> {{ this.nigredo }}</i> <br />
            <i><a>Альбедо:</a> {{ this.albedo }}</i> <br />
            <i><a>Рубедо:</a> {{ this.rubedo }}</i></p>
            <p><i><a>Уровень камня:</a> {{ this.level }}</i></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Character',
    props: ['nigredo', 'albedo', 'rubedo'],
    computed: {
        level() {
            if (this.nigredo <= this.albedo && this.nigredo <= this.rubedo)
                return this.nigredo;
            else if (this.albedo <= this.nigredo && this.albedo <= this.rubedo)
                return this.albedo;
            else return this.rubedo;
        }
    },
    watch: {
        level() {
            console.log('YEAEAAH');
        }
    }
}
</script>

<style scoped>
    p {font-size: 2rem;text-align: left;}
    img {width: 200px;float: left;}
    i {padding-left: 20px;}
    h2 {font-size: 3rem;}
</style>
