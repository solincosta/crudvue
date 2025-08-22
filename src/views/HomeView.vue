<template>
  <div class="home">
    <MiMenu></MiMenu>
    <MiMenu></MiMenu>
    <MiMenu></MiMenu>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MiMenu from '@/components/MiMenu.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    MiMenu
  }
}
</script>
