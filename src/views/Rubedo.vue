<template>
    <div class="main">
        <h1><router-link to="/">Рубедо</router-link></h1>
        <Character :nigredo="nigredo" :albedo="albedo" :rubedo="rubedo" />
    </div>
</template>

<script>
import Character from '@/components/Character.vue'

export default {
    name: 'Rubedo',
    components: {Character},
    props: ['nigredo', 'albedo', 'rubedo'],
    methods: {
    }
}
</script>
