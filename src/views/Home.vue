<template>
    <div class="main">
        <h1>Пожилая алхимия</h1>
        <p class="level-link"><router-link to="/nigredo">нигредо</router-link>
            <a> | </a>
            <router-link to="albedo">альбедо</router-link>
            <a> | </a>
            <router-link to="rubedo">рубедо</router-link></p>
        <p><img src="../assets/alchemist.jpg" style="width:100%" /></p>
        <Character :nigredo="nigredo" :albedo="albedo" :rubedo="rubedo" />
    </div>
</template>

<script>
import Character from '@/components/Character.vue'

export default {
  name: 'Main',
  props: ['nigredo', 'albedo', 'rubedo'],
  components: {
    Character
  }
}
</script>

<style scoped>
    .level-link {
        padding: 10px;
        margin: 20px 20px;
        font-size: 2rem;
        font-weight: bold;
    }
</style>
