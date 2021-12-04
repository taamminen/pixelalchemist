<template>
    <div class="main">
        <h1><router-link to="/">Нигредо</router-link></h1>
        <minesweeper-game v-on:addNigredo="addNigredo" cols="9" rows="9" bombs="1" />
        <Character :nigredo="nigredo" :albedo="albedo" :rubedo="rubedo" />
    </div>
</template>

<script>
import MinesweeperGame from '@/components/minesweeper/MinesweeperGame.vue'
import Character from '@/components/Character.vue'

export default {
    name: 'Nigredo',
    components: {MinesweeperGame, Character},
    props: ['nigredo', 'albedo', 'rubedo'],
    methods: {
        addNigredo() {
            this.$emit('addNigredo');
        }
    }
}
</script>

<style scoped>
.main {
    max-width: 640px;
}
</style>
