import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

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
camera.position.z = 0
camera.position.y = 7
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

//braço
let a = 2
let b = 2
let c = 1
let r2 = 0.2

geometry = new THREE.CylinderGeometry( 0.4, 0.4, a, 32 ); 
// let material = new THREE.MeshNormalMaterial({ wireframe: false });
material = new THREE.MeshBasicMaterial({ color: "red", wireframe: false });
const eixo1 = new THREE.Mesh(geometry, material);
eixo1.position.y = 0.03 + (a/2)
base.add(eixo1);

geometry = new THREE.CylinderGeometry( r2, r2, b, 32 ); 
material = new THREE.MeshBasicMaterial({ color: "green", wireframe: false });
const eixo2 = new THREE.Mesh(geometry, material);
eixo2.position.x = b/2
eixo2.position.y = 0.75
eixo2.rotation.z = Math.PI/2
eixo2.rotation.x = 0
eixo1.add(eixo2);

geometry = new THREE.CylinderGeometry( r2, r2, c, 32 ); 
material = new THREE.MeshBasicMaterial({ color: "red", wireframe: false });
const eixo3 = new THREE.Mesh(geometry, material);
eixo3.position.x = -c/2
eixo3.position.y = -0.75
eixo3.rotation.z = Math.PI/2
eixo2.add(eixo3);

geometry = new THREE.CylinderGeometry( r2, r2, c, 32 ); 
material = new THREE.MeshBasicMaterial({ color: "green", wireframe: false });
const eixo4 = new THREE.Mesh(geometry, material);
eixo4.position.x = -c/2
eixo4.position.y = 0.25
eixo4.rotation.z = Math.PI/2
eixo3.add(eixo4);

const axesHelper = new THREE.AxesHelper(5);
eixo1.add(axesHelper);

// start the animation
renderer.setAnimationLoop(render);

//GUI
/*
const gui = new GUI()

const eixo1Folder = gui.addFolder('Eixo1')
eixo1Folder.add(eixo1.rotation, 'y', 0, Math.PI * 2)
eixo1Folder.open()

gui.close()
*/

/*
const eixoTeste = eixo4

const axesHelper2 = new THREE.AxesHelper(5);
eixoTeste.add(axesHelper2);


const eixoFolder = gui.addFolder('EixoTeste')
eixoFolder.add(eixoTeste.position, 'x', -5,5)
eixoFolder.add(eixoTeste.position, 'y', -5,5)
eixoFolder.add(eixoTeste.position, 'z', -5,5)
eixoFolder.add(eixoTeste.rotation, 'x', 0,Math.PI)
eixoFolder.add(eixoTeste.rotation, 'y', 0,Math.PI)
eixoFolder.add(eixoTeste.rotation, 'z', 0,Math.PI)
eixoFolder.open()

setInterval(() => {
    // teste()
    console.log(eixo2.position)
}, 1000);
*/
function render() {  

    controls.update();
    renderer.render(scene, camera);
};