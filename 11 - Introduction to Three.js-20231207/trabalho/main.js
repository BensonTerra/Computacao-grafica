import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/*********************
* SCENE 
* *******************/
// create an empty scene, that will hold all our elements such as objects, cameras and lights
const scene = new THREE.Scene();

/*********************
 * CAMERA 
 * *******************/
// create a camera, which defines where we're looking at
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5
camera.position.y = 0
camera.position.x = 0;

/*********************
 * RENDERER 
 * *******************/
// create a render and set the size
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// configure renderer clear color
renderer.setClearColor("#000000");
// add the output of the renderer to an HTML element (this case, the body)
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

/*********************
* MESH 
* *******************/

let geometry = new THREE.CylinderGeometry( 0.6, 0.65, 0.05, 32 ); 
// let material = new THREE.MeshNormalMaterial({ wireframe: false });
let material = new THREE.MeshBasicMaterial({ color: 0x0000FF, wireframe: false });
const base = new THREE.Mesh(geometry, material);
base.position.y = 0.05/2
scene.add(base);

let a = 0.6

geometry = new THREE.CylinderGeometry( 0.4, 0.4, a, 32 ); 
// let material = new THREE.MeshNormalMaterial({ wireframe: false });
material = new THREE.MeshBasicMaterial({ color: "red", wireframe: false });
const eixo1 = new THREE.Mesh(geometry, material);
eixo1.position.y = 0.03 + (a/2)
base.add(eixo1);

let b = 1
let r2 = 0.2

geometry = new THREE.CylinderGeometry( r2, r2, b, 32 ); 
material = new THREE.MeshBasicMaterial({ color: "green", wireframe: false });
const eixo2 = new THREE.Mesh(geometry, material);
eixo2.position.x = 0.75
eixo2.position.y = 0
eixo2.rotation.z = Math.PI/2
eixo1.add(eixo2);

geometry = new THREE.SphereGeometry( 0.32, 32, 16 ); 
material = new THREE.MeshBasicMaterial({ color: "blue", wireframe: false });
const eixo3 = new THREE.Mesh(geometry, material);
eixo3.position.x = 0
eixo3.position.y = -0.75
eixo2.add(eixo3);

geometry = new THREE.CylinderGeometry( r2, r2, b, 32 ); 
material = new THREE.MeshBasicMaterial({ color: "green", wireframe: false });
const eixo4 = new THREE.Mesh(geometry, material);
eixo4.position.x = 0.75
eixo4.rotation.z = Math.PI/2
eixo3.add(eixo4);

geometry = new THREE.SphereGeometry( 0.32, 32, 16 ); 
material = new THREE.MeshBasicMaterial({ color: "blue", wireframe: false });
const eixo5 = new THREE.Mesh(geometry, material);
eixo5.position.y = -0.75
eixo4.add(eixo5);

geometry = new THREE.CylinderGeometry( r2, r2, b, 32 ); 
material = new THREE.MeshBasicMaterial({ color: "green", wireframe: false });
const eixo6 = new THREE.Mesh(geometry, material);
eixo6.position.x = 0.75
eixo6.rotation.z = Math.PI/2
eixo5.add(eixo6);

geometry = new THREE.SphereGeometry( 0.32, 32, 16 ); 
material = new THREE.MeshBasicMaterial({ color: "blue", wireframe: false });
const eixo7 = new THREE.Mesh(geometry, material);
eixo7.position.y = -0.75
eixo6.add(eixo7);

geometry = new THREE.CylinderGeometry( r2, r2, b, 32 ); 
material = new THREE.MeshBasicMaterial({ color: "green", wireframe: false });
const eixo8 = new THREE.Mesh(geometry, material);
eixo8.position.x = -0.75
eixo8.rotation.z = Math.PI/2
eixo7.add(eixo8);

geometry = new THREE.SphereGeometry( 0.32, 32, 16 ); 
material = new THREE.MeshBasicMaterial({ color: "blue", wireframe: false });
const eixo9 = new THREE.Mesh(geometry, material);
eixo9.position.y = 0.75
eixo8.add(eixo9);

geometry = new THREE.CylinderGeometry( r2, r2, b, 32 ); 
material = new THREE.MeshBasicMaterial({ color: "green", wireframe: false });
const eixo10 = new THREE.Mesh(geometry, material);
eixo10.position.x = 0.75
eixo10.rotation.z = Math.PI/2
eixo9.add(eixo10);

geometry = new THREE.SphereGeometry( 0.32, 32, 16 ); 
material = new THREE.MeshBasicMaterial({ color: "blue", wireframe: false });
const eixo11 = new THREE.Mesh(geometry, material);
eixo11.position.y = -0.75
eixo10.add(eixo11);

geometry = new THREE.CylinderGeometry( r2, r2, b, 32 ); 
material = new THREE.MeshBasicMaterial({ color: "green", wireframe: false });
const eixo12 = new THREE.Mesh(geometry, material);
eixo12.position.x = 0.75
eixo12.rotation.z = Math.PI/2
eixo11.add(eixo12);

geometry = new THREE.SphereGeometry( 0.32, 32, 16 ); 
material = new THREE.MeshBasicMaterial({ color: "blue", wireframe: false });
const eixo13 = new THREE.Mesh(geometry, material);
eixo13.position.y = -0.75
eixo12.add(eixo13);

geometry = new THREE.CylinderGeometry( r2, r2, b, 32 ); 
material = new THREE.MeshBasicMaterial({ color: "green", wireframe: false });
const eixo14 = new THREE.Mesh(geometry, material);
eixo14.position.x = 0.75
eixo14.rotation.z = Math.PI/2
eixo13.add(eixo14);

/** fim */
geometry = new THREE.SphereGeometry( 0.32, 32, 16 ); 
material = new THREE.MeshBasicMaterial({ color: "blue", wireframe: false });
const eixo15 = new THREE.Mesh(geometry, material);
eixo15.position.y = -0.75
eixo15.rotation.z = Math.PI/2
eixo14.add(eixo15);

const axesHelper = new THREE.AxesHelper(5);
eixo1.add(axesHelper);

const axesHelper2 = new THREE.AxesHelper(5);
eixo15.add(axesHelper2);

// start the animation
renderer.setAnimationLoop(render);






function render() {    
    controls.update();
    renderer.render(scene, camera);
};