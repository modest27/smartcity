<template>
  <div class="scene" ref="sceneDiv"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
// 导入动画库
import gsap from 'gsap';

// 导入场景
import scene from '@/three/scene'
// 导入相机
import camera from '@/three/camera'
// 导入渲染器
import renderer from '@/three/renderer'
// 导入坐标轴
import axesHelper from '@/three/axesHelper'
// 导入轨道控制器
import controls from '@/three/controls'
// 导入 dat.gui
import gui from '@/three/gui'
// 导入初始化屏幕调整事件
import '@/three/init'
// 导入每一帧的执行函数
import animate from '@/three/animate'
// 导入添加物体函数
import createMesh from '@/three/createMesh'

// 场景div
let sceneDiv = ref(null)
// 添加相机
scene.add(camera);
// 添加辅助坐标轴
scene.add(axesHelper);
// 创建物体
createMesh()

onMounted(()=>{
  sceneDiv.value.appendChild(renderer.domElement)
  animate();
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