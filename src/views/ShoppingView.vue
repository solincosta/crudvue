<template>
  <div class="home">
    <MiNewMenu></MiNewMenu>
    <MisProducts class="cards"></MisProducts>
    
  </div>
</template>

<script>
import MiNewMenu from '@/components/MiNewMenu.vue'
import MisProducts from '@/components/MisProducts.vue';

export default {
  name: 'HomeView',
  components: {
    MiNewMenu,
    MisProducts
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
