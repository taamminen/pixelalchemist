<template>
    <div class="main">
        <h1><router-link to="/">Альбедо</router-link></h1>
        <Board ref="board" v-show="true" />
        <Character :nigredo="nigredo" :albedo="albedo" :rubedo="rubedo" />
    </div>
</template>

<script>
import Character from '@/components/Character.vue'
import Board from '@/components/puzzle/Board.vue'
//import OptionsPane from '@/components/puzzle/OptionsPane.vue'
import loadImage from 'blueimp-load-image'


export default {
    name: 'Albedo',
    components: {Character, Board},
    props: ['nigredo', 'albedo', 'rubedo'],
    mounted() {
    },
    data () {
        return {
            playing: false
        }
    },
    methods: {
        launch() {
            let size = {horizontal: 3, vertical: 3}
            let image = null
            loadImage('../assets/engravings/photo_2021-10-22_02-21-45.jpg', canvas => {
                image = canvas
            }, {
                maxWidth: 600,
                maxHeight: 600,
                minWidth: 200,
                minHeight: 200,
                canvas: true
            })
            this.$refs.board.start(image, size)
        }
    }
}
</script>
