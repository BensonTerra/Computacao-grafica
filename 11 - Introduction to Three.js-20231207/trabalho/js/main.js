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
camera.position.y = 10
camera.position.x = 0;

/*********************
 * RENDERER 
 * *******************/
// create a render and set the size
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth*0.85, window.innerHeight*0.85);
// configure renderer clear color
renderer.setClearColor("#000000");
// add the output of the renderer to an HTML element (this case, the body)
document.getElementById('viewer').appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);

/*********************
* MESH 
* *******************/

const size = 20;
const divisions = 20;

const gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper );

var geometry = new THREE.CylinderGeometry( 0.6, 0.65, 0.05, 32 ); 
// var material = new THREE.MeshNormalMaterial({ wireframe: false });
var material = new THREE.MeshBasicMaterial({ color: 0x0000FF, wireframe: false });
const base = new THREE.Mesh(geometry, material);
base.position.y = 0.05/2
scene.add(base);

//braço
var a = 2; var b = 3
var c = 1; var d = 3
var r2 = 0.2
var angleArray = []
var allPoints = []
window.allPoints = allPoints

/*-------------------------------------------------------------------- */
/*var len1 = 0.4 + a + 0.6 ; var len2 = r2 + d + 0.4; console.log(len1, len2);*/
var len1 = b; var len2 = d

let xTarget = 6.0; let yTarget = 0.0; let arrayTarget = [xTarget, yTarget]

var A1 = 0; var A2 = 0
var D1 = 0; var D2 = 0

function lawOfCosines(a, b, c)
{
    return Math.acos((a**2 + b**2 - c**2) / 
                    (2 * a * b))
}

function distance(a,b)
{
    return Math.sqrt(a**2 + b**2)
}

//todo: Analsiar if para xTarget e Y aTarget para otimizar movimentos
function angles(x, y, originalPosition)
{
    let originalPositionX = originalPosition[0]
    let originalPositionY = originalPosition[1]

    var dist = distance(x, y);  //console.log(dist);

    D1 = Math.atan2(y, x); //console.log(D1)

    D2 = lawOfCosines(dist,len1,len2); //console.log(D2)
    if(isNaN(D2))
    {
        alert()
        D2 = 0
    }

    A1 = D1 + D2; //console.log(A1, Math.PI - A1)
    A2 = lawOfCosines(len1, len2, dist); //console.log(A2)

    if(originalPositionY > 0) {
       //console.log("y > 0")
       A1 = 2 * Math.PI - A1
       A2 = 2 * Math.PI - A2
    }

    if(originalPositionX > 0 && originalPositionY > 0) {
        //console.log(A1 + " | " + ((2 * Math.PI - A1) *  -1))
        A1 = (2 * Math.PI - A1) *  -1
    }
    
    //seeData()
    return [A1,A2];
}
/*-------------------------------------------------------------------- */

geometry = new THREE.SphereGeometry(0.2,32,16) 
// var material = new THREE.MeshNormalMaterial({ wireframe: false });
material = new THREE.MeshBasicMaterial({ color: "white", wireframe: false });
const teste = new THREE.Mesh(geometry, material);
teste.position.x = xTarget
teste.position.y = 0
teste.position.z = yTarget
teste.rotation.z = 0
scene.add( teste );


geometry = new THREE.CylinderGeometry( 0.4, 0.4, a, 32 ); 
// var material = new THREE.MeshNormalMaterial({ wireframe: false });
material = new THREE.MeshBasicMaterial({ color: "red", wireframe: false });
const eixo1 = new THREE.Mesh(geometry, material);
eixo1.position.y = 0.03 + (a/2)
base.add(eixo1);

geometry = new THREE.CylinderGeometry( r2, r2, b, 32 ); 
material = new THREE.MeshBasicMaterial({ color: "green", wireframe: false });
const eixo2 = new THREE.Mesh(geometry, material);
eixo2.position.x = ((b/2) *10)/10
eixo2.rotation.x = 0
eixo2.position.y = 0.75
eixo2.rotation.z = Math.PI/2
eixo1.add(eixo2);

geometry = new THREE.CylinderGeometry( r2, r2, c, 32 ); 
material = new THREE.MeshBasicMaterial({ color: "red", wireframe: false });
const eixo3 = new THREE.Mesh(geometry, material);
eixo3.position.x = -0.3
eixo3.position.y = -1.50
eixo3.rotation.x = 0
eixo3.rotation.z = -Math.PI/2
eixo2.add(eixo3);

geometry = new THREE.CylinderGeometry( r2, r2, d, 32 ); 
material = new THREE.MeshBasicMaterial({ color: "green", wireframe: false });
const eixo4 = new THREE.Mesh(geometry, material);
eixo4.position.x = d/2
eixo4.position.y = -0.25 + 0.054999999999999
eixo4.rotation.z = Math.PI/2
eixo3.add(eixo4);

geometry = new THREE.SphereGeometry(0.4,32,16)
material = new THREE.MeshBasicMaterial({ color: "red", wireframe: false });
const Target = new THREE.Mesh(geometry, material);
Target.position.x = 0
Target.position.y = -d/2 
Target.rotation.x = 0
Target.rotation.y = 0
Target.rotation.z = -Math.PI/2
eixo4.add(Target);

const eixoTeste = Target

const axesHelper = new THREE.AxesHelper(5);
teste.add(axesHelper);

const axesHelper2 = new THREE.AxesHelper(5);
eixoTeste.add(axesHelper2);

// start the animation
renderer.setAnimationLoop(render);

//GUI

const gui = new GUI()

const eixo1Folder = gui.addFolder('Eixo1')
eixo1Folder.add(eixo1.rotation, 'y', -Math.PI, Math.PI)
eixo1Folder.open()
const eixo3Folder = gui.addFolder('Eixo1')
eixo3Folder.add(eixo3.rotation, 'x', -Math.PI, Math.PI)
gui.close()

const eixoFolder = gui.addFolder(`eixo`)
eixoFolder.add(eixoTeste.position, 'x', -5,5)
eixoFolder.add(eixoTeste.position, 'y', -5,5)
eixoFolder.add(eixoTeste.position, 'z', -5,5)
eixoFolder.add(eixoTeste.rotation, 'x', -Math.PI/2,Math.PI/2).step(1.570796326794897)
eixoFolder.add(eixoTeste.rotation, 'y', -Math.PI,Math.PI).step(1.570796326794897)
eixoFolder.add(eixoTeste.rotation, 'z', -Math.PI,Math.PI).step(1.570796326794897)
eixoFolder.open()

var target1 = new THREE.Vector3()
var target3 = new THREE.Vector3()
var targetEnd = new THREE.Vector3()
const targetPosition = eixo1.getWorldPosition(target1); //console.log(targetPosition);
const targetPosition2 = eixo3.getWorldPosition(target3); //console.log(targetPosition2);
var targetPosition3 = Target.getWorldPosition(targetEnd); //console.log(targetPosition3);
//len1 = distanceArm(targetPosition, targetPosition2, "y")
//len2 = distanceArm(targetPosition2, targetPosition3, "x");

export default function moveAngles(xTarget, yTarget, originalPos)
{
    //console.log("moveAngles")
    if(yTarget >= 0) {
        angleArray = angles(xTarget, yTarget, originalPos); //console.log("yTarget > 0: " + angleArray);
    }
    else if(yTarget < 0) {
        angleArray = angles(xTarget, -yTarget, originalPos); //console.log("yTarget < 0: " + angleArray);
    }


}
moveAngles(xTarget, yTarget, arrayTarget)
window.testeAngles = moveAngles

function seeData(){
    //console.clear();
    //console.log(eixo1.getWorldPosition(target1));
    //console.log(eixo3.getWorldPosition(target3));
    
    console.table(Target.getWorldPosition(targetEnd));
}
window.seeData = seeData

const shape = new THREE.Shape();
let shapePoints = []; window.shapePoints = shapePoints
let length = null, width = null;

export function addPoint(x,y,i,dataTotal,dataPartial) {

    
    const geometry = new THREE.SphereGeometry( 0.1,32,16 ); 
    const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
    const point = new THREE.Mesh( geometry, material ); 
    point.position.x = x
    point.position.z = y
    point.name = `sphere`
    scene.add( point );
    console.log(i,dataTotal.length)
    shapePoints.push(dataPartial);console.log(dataPartial)

    if (i == dataTotal.length-1)
    {
        console.log("home")
        countPoints()
        shapeDesign(shapePoints)
        home()
    }

}

var targetAngle1 = 0
var targetAngle2 = 0
let firtPoint = null; let pointXY = null


const extrudeSettings = {
	steps: 1,
	depth: 0,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 0,
	bevelOffset: 0,
	bevelSegments: 1
};

function home() {
    angleArray[0] = 0
    angleArray[1] = Math.PI
}

export function countPoints() {
    scene.traverse( function( object ) {

        if( allPoints.length >= 0) 
        {
            if ( object.isMesh && object.name == "sphere"){
                if(!allPoints.includes(object))
                {
                    allPoints.push(object)
                }
                console.log(allPoints)
            }
            
        }
    
    });
}
window.countPoints = countPoints

export function reset() {
    if(allPoints.length > 0)
    {
        allPoints.forEach( element => scene.remove(element))
        scene.remove(box)
        allPoints = []
    }

}
window.reset = reset

let box = null
function shapeDesign(arrayShape) {

    if(firtPoint == null)
    {
        firtPoint = arrayShape[0];console.log(firtPoint)
        let firtPointX = firtPoint[0]
        let firtPointY = firtPoint[1]
        shape.moveTo(firtPointX,firtPointY)
    }

    for(let i = 1; i < arrayShape.length; i++)
    {
        console.log(arrayShape[i])
        pointXY = arrayShape[i]
        shape.lineTo(pointXY[0],pointXY[1])
    }

    geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
    material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    box = new THREE.Mesh( geometry, material ) ;
    box.rotation.x = Math.PI/2
    box.name = "shape"
    scene.add( box );
}
window.shapeDesign = shapeDesign

export const xValue = document.querySelector('.x-value'); //console.log(xValue);
export const yValue = document.querySelector('.y-value'); //console.log(yValue)
export const zValue = document.querySelector('.z-value'); //console.log(zValue)

function render() {

    
    targetAngle1 = angleArray[0];
    targetAngle2 = angleArray[1];
    const speed = 0.01; // Adjust the speed of animation

    const deltaAngle1 = targetAngle1 - eixo1.rotation.y;
    eixo1.rotation.y += deltaAngle1 * speed;

    const deltaAngle2 = (targetAngle2 - Math.PI) - eixo3.rotation.x;
    eixo3.rotation.x += deltaAngle2 * speed;

    const deltaAngle3 = (targetAngle1 + targetAngle2) - Target.rotation.x;
    Target.rotation.x += deltaAngle3 * speed

    targetPosition3 = Target.getWorldPosition(targetEnd)
    xValue.innerHTML = targetPosition3.x.toFixed(2)
    yValue.innerHTML = targetPosition3.y.toFixed(2)
    zValue.innerHTML = targetPosition3.z.toFixed(2)
    
    controls.update();
    renderer.render(scene, camera);
};

