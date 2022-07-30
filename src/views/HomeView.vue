<template>
  <div class="home">
    <h1>测试</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import testVertex from '@/shader/test/vertex.glsl'
console.log(testVertex);

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
