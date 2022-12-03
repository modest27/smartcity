<template>
  <div class="scene" ref="sceneDiv"></div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import * as THREE from 'three'
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
// import gui from '@/three/gui'
// 导入初始化屏幕调整事件
import '@/three/init'
// 导入每一帧的执行函数
import animate from '@/three/animate'
// 导入添加物体函数
import createMesh from '@/three/createMesh'
import AlarmSprite from '@/three/mesh/AlarmSprite';
import LightWall from '@/three/mesh/LightWall';
import FlyLineShader from '@/three/mesh/FlyLineShader';
import LightRadar from '@/three/mesh/LightRadar';
import eventHub from '@/utils/eventHub';

const props = defineProps(['eventList']);

const mapFn = {
  '火警':(position,i)=>{
    const lightWall = new LightWall(1,2,position);
    lightWall.eventListIndex = i;
    scene.add(lightWall.mesh);
    eventListMesh.push(lightWall);
  },
  '治安':(position,i)=>{
    // 生成随机颜色
    const getRandomColor = new THREE.Color(
      Math.random(),
      Math.random(),
      Math.random(),
    ).getHex();
    const flyLineShader = new FlyLineShader(position,getRandomColor);
    flyLineShader.eventListIndex = i;
    scene.add(flyLineShader.mesh);
    eventListMesh.push(flyLineShader);
  },
  '电力':(position,i)=>{
    // 生成随机颜色
    // const getRandomColor = new THREE.Color(
    //   Math.random(),
    //   Math.random(),
    //   Math.random(),
    // ).getHex();
    const lightRadar = new LightRadar(2,position);
    lightRadar.eventListIndex = i;
    scene.add(lightRadar.mesh);
    eventListMesh.push(lightRadar);
  },
}

eventHub.on('eventToggle',(i)=>{
  eventListMesh.forEach((item)=>{
    if(item.eventListIndex == i){
      item.mesh.visible = true;
    }else{
      item.mesh.visible = false;
    }
  })

  const position = {
      x: props.eventList[i].position.x / 5 - 10,
      y: 0,
      z: props.eventList[i].position.y / 5 - 10,
    }
    // controls.target.set(position.x,position.y,position.z);
    // gsap.to(controls.target,{
    //   duration:1.5,
    //   x:position.x,
    //   y:position.y,
    //   z:position.z,
    // })
    gsap.to(camera.position,{
      duration:1.5,
      x:position.x,
      y:position.y + 12,
      z:position.z + 6,
      onComplete:()=>{
        camera.lookAt(props.eventList[i].position);
        gsap.to(controls.target,{
          duration:1.5,
          x:position.x,
          y:position.y,
          z:position.z,
        })
      }
    })
})

const eventListMesh = [];
watch(
  ()=>props.eventList,
  ()=>{
    eventListMesh.forEach((item,i)=>{
      item.remove();
      eventListMesh.splice(i,1);
    })
    props.eventList.forEach((item,i) => {
      const position = {
        x:item.position.x / 5 - 10,
        z:item.position.y / 5 - 10,
      }
      const alarmSprite = new AlarmSprite(item.name,position);
      alarmSprite.onClick(()=>{
        eventHub.emit('spriteClick',{event:item,i})
      })
      alarmSprite.eventListIndex = i;
      eventListMesh.push(alarmSprite);
      scene.add(alarmSprite.mesh);

      if(mapFn[item.name]){
        mapFn[item.name](position,i);
      }
    });
  }  
)

// 场景div
let sceneDiv = ref(null)
// 添加相机
scene.add(camera);
// 添加辅助坐标轴
// scene.add(axesHelper);
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
  background-color: black;
}
</style>