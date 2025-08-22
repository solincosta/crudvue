<template>
  <div class="home">
    <MiMenu></MiMenu>
    <MiBanner></MiBanner>
  </div>
</template>

<script>
import MiMenu from '@/components/MiMenu.vue'
import MiBanner from '@/components/MiBanner.vue'

export default {
  name: 'HomeView',
  components: {
    MiMenu,
    MiBanner
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
