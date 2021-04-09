import * as THREE from "./js/three";

const scene = new THREE.Scene();

const ambientLight = new THREE.AmbientLight(0xffffff,0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);

directionalLight.position.set(200, 500, 300);
scene.add(directionalLight);

// setting up the camera
const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 150;
const cameraHeight = cameraWidth/aspectRatio;

const camera = new THREE.OrthographicCamera(
    cameraWidth / -2, // left
    cameraWidth / 2, // right
    cameraHeight / 2, // top
    cameraHeight / -2, // bottom
    0, // near plane
    1000 // far plane
);

camera.position.set(200, 200, 200);
camera.lookAt(0, 10, 0);