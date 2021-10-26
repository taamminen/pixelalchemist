<template>
    <div class="main">
        <h1>Пожилая алхимия</h1>
        <p class="level-link"><router-link to="/nigredo">нигредо</router-link> <router-link to="albedo">альбедо</router-link> <router-link to="rubedo">рубедо</router-link></p>
        <p><img src="../assets/alchemist.jpg" /></p>
        <Character />
    </div>
</template>

<script>
import Character from '@/components/Character.vue'

export default {
  name: 'Main',
  props: {

  },
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
