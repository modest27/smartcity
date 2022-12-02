import * as THREE from 'three'

export default class MeshLine{
  constructor(geometry){
    const edges = new THREE.EdgesGeometry(geometry)
    this.geometry = edges;
    this.material = new THREE.LineBasicMaterial({color: 0xffffff});
    const line = new THREE.LineSegments(this.geometry,this.material);
    this.mesh = line;
  }
}