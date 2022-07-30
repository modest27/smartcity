// 导入rgbeloader
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
// 导入gltfloader
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import scene from './scene'

export default function createMesh(){
  // 创建平面
const planeGeometry = new THREE.PlaneBufferGeometry(20,20)
const plane = new THREE.Mesh(planeGeometry,new THREE.MeshBasicMaterial({color:0xff0000}))
plane.position.set(0,0,-6)
plane.receiveShadow = true
scene.add(plane)
}