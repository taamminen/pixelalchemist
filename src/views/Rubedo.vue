<template>
    <div class="main">
        <h1><router-link to="/">Рубедо</router-link></h1>
        <minesweeper-game v-on:addRubedo="addRubedo" cols="30" rows="16" bombs="1" />
        <Character :nigredo="nigredo" :albedo="albedo" :rubedo="rubedo" />
    </div>
</template>

<script>
import MinesweeperGame from '@/components/minesweeper/MinesweeperGame.vue'
import Character from '@/components/Character.vue'

export default {
    name: 'Rubedo',
    components: {MinesweeperGame, Character},
    props: ['nigredo', 'albedo', 'rubedo'],
    methods: {
        addRubedo() {
            this.$emit('addRubedo');
        }
    }
}
</script>

<style scoped>
.main {
    margin: 0 auto;
    max-width: 1280px;
    font-size: 1rem;
    padding: 20px 20px;
    text-align: center;
}
</style>
