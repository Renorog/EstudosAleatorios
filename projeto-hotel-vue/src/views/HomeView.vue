<template>
  <div class="home">
    <h1>ola</h1>
   
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NaveBar from '@/components/NaveBar.vue';


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NaveBar
  }
}
</script>
