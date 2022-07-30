import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import camera from './camera';
import renderer from './renderer';

// 创建控制器
const controls = new OrbitControls(camera,renderer.domElement);
// 设置阻尼，让控制器有重量感，更加真实
// 记得不要忘了在动画循环里调用 update()
controls.enableDamping = true;

export default controls