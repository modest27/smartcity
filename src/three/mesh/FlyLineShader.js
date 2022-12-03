import * as THREE from 'three'
import gsap from 'gsap';
import vertex from '@/shader/flyLine/vertex.glsl'
import fragement from '@/shader/flyLine/fragment.glsl'

export default class FlyLineShader{
  constructor(position={x:0,z:0},color=0x00ffff){
    let linePoints = [
      new THREE.Vector3(0,0,0),
      new THREE.Vector3(position.x/2,4,position.z/2),
      new THREE.Vector3(position.x,0,position.z),
    ]
    // 1.创建曲线
    this.lineCurve = new THREE.CatmullRomCurve3(linePoints);
    const points = this.lineCurve.getPoints(1000);
    // 2.创建几何体
    this.geometry = new THREE.BufferGeometry().setFromPoints(points);
    // 给每一个点设置属性
    const aSizeArray = new Float32Array(points.length);
    for(let i = 0; i < aSizeArray.length; i++){
      aSizeArray[i] = i;
    }
    this.geometry.setAttribute('aSize',new THREE.BufferAttribute(aSizeArray,1));
    // 3.设置着色器材质
    this.shaderMaterial = new THREE.ShaderMaterial({
      uniforms:{
        uTime:{
          value: 0,
        },
        uColor:{
          value: new THREE.Color(color)
        },
        uLength:{
          value: points.length
        }
      },
      vertexShader:vertex,
      fragmentShader:fragement,
      transparent:true,
      depthWrite:false,
      blending: THREE.AdditiveBlending,
    })
    // 4.创建points
    this.mesh = new THREE.Points(this.geometry,this.shaderMaterial)

    gsap.to(this.shaderMaterial.uniforms.uTime,{
      value: 1000,
      repeat: -1,
      duration: 2,
      ease: 'none',
    })
  }

  remove(){
    this.mesh.remove();
    this.mesh.removeFromParent();
    this.mesh.geometry.dispose();
    this.mesh.material.dispose();
  }
}