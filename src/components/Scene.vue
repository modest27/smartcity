<template>
  <div class="scene"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

// 场景div
let sceneDiv = ref(null)

onMounted(()=>{
  console.log(sceneDiv);
})

</script>

<style>
.scene{
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>