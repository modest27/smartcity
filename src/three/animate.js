import * as THREE from 'three';
import scene from './scene';
import camera from './camera';
import controls from "./controls";
import renderer from "./renderer";

// 每一帧调用的渲染函数
const clock = new THREE.Clock();
function animate () {
  controls.update()
  const time = clock.getElapsedTime()
  renderer.render(scene,camera)
  requestAnimationFrame(animate)
}

export default animate