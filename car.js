import * as THREE from "./js/three";

const scene = new THREE.Scene();

const ambientLight = new THREE.AmbientLight(0xffffff,0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);

directionalLight.position.set(200, 500, 300);
scene.add(directionalLight);

