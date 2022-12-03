import * as THREE from 'three'

// 2.创建相机
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,50000);

// 调整相机位置
camera.position.set(5,10,10);

export default camera


