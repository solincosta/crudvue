<template>
  <div class="home">
    <MiMenu></MiMenu>
    <MiBanner></MiBanner>
    <MisCards class="cards"></MisCards>
    
  </div>
</template>

<script>
import MiMenu from '@/components/MiMenu.vue'
import MiBanner from '@/components/MiBanner.vue'
import MisCards from '@/components/MisCards.vue';

export default {
  name: 'HomeView',
  components: {
    MiMenu,
    MiBanner,
    MisCards
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.cards{
  margin: 2rem auto;
  width: 80%;
}
</style>
