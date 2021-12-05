<template>
    <div class="main">
        <h1><router-link to="/">Альбедо</router-link></h1>
        <minesweeper-game v-on:addAlbedo="addAlbedo" cols="16" rows="16" bombs="1" />
        <Character :nigredo="nigredo" :albedo="albedo" :rubedo="rubedo" />
    </div>
</template>

<script>
import MinesweeperGame from '@/components/minesweeper/MinesweeperGame.vue'
import Character from '@/components/Character.vue'

export default {
    name: 'Albedo',
    components: {MinesweeperGame, Character},
    props: ['nigredo', 'albedo', 'rubedo'],
    methods: {
        addAlbedo() {
            this.$emit('addAlbedo');
        }
    }
}
</script>
