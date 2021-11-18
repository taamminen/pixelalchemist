<template>
    <div class="main">
        <h1>Нигредо</h1>
        <minesweeper-game></minesweeper-game>
    </div>
</template>

<script>
import MinesweeperGame from '@/components/minesweeper/MinesweeperGame.vue'

export default {
    name: 'Nigredo',
    components: {MinesweeperGame}
}
</script>

<style scoped>
</style>
