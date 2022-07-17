<template>
  <div class="home">
        <h1>测试</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Vertex from '@/shader/test/Vertex.glsl'
console.log(Vertex);

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
