<template>
    <div class="main">
        <h1>Пожилая алхимия</h1>
        <p class="level-link"><router-link to="/nigredo">нигредо</router-link>
            <img src="../assets/nigredo.png" width="30" /><a> | </a>
            <router-link to="albedo">альбедо</router-link>
            <img src="../assets/albedo.png" width="30" /><a> | </a>
            <router-link to="rubedo">рубедо</router-link>
            <img src="../assets/rubedo.png" width="30" /></p>
        <p><img src="../assets/alchemist.jpg" /></p>
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
        font-weight: bold;
        font-size: 2rem;
    }
</style>
