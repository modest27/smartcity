// 导入rgbeloader
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
// 导入gltfloader
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import scene from './scene'

import createCity from './mesh/City'

export default function createMesh(){
  createCity();
}