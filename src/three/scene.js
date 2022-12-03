import * as THREE from 'three'

// 1.创建场景
const scene = new THREE.Scene();

// 2.添加天空盒子
const cubeTextureLoader = new THREE.CubeTextureLoader().setPath('./textures/');
const cubeTexture = cubeTextureLoader.load([
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
])
scene.background = cubeTexture;
scene.environment = cubeTexture;

export default scene