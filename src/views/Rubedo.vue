<template>
    <div class="main">
        <h1><router-link to="/">Рубедо</router-link></h1>
        <minesweeper-game v-on:addRubedo="addRubedo" cols="30" rows="16" bombs="99" />
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
