import camera from './camera';
import renderer from './renderer';

// 监听画面，更新渲染画面
window.addEventListener('resize',()=>{
  // 更新摄像头
  camera.aspect = window.innerWidth / window.innerHeight;
  // 更新摄像机的投影矩阵
  camera.updateProjectionMatrix();
  // 更新渲染器
  renderer.setSize(window.innerWidth,window.innerHeight);
  // 设置渲染器像素比
  renderer.setPixelRatio(window.devicePixelRatio);
})