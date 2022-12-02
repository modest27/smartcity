varying vec3 vPositon;
uniform float uHeight;

void main(){
    // 设置混合百分比
    float gradMix = (vPositon.y + uHeight/2.0) / uHeight;

    gl_FragColor = vec4(1,1,0,1.0-gradMix);
}