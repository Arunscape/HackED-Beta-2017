var scene = new THREE.Scene();

var color1 = new THREE.Color(0x00CCFF);
scene.background = color1;
scene.fog = new THREE.Fog(0xccbb55, 1, 400);

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 100000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

document.body.appendChild( renderer.domElement );

var cssScene = new THREE.Scene();

//--------------------------------------------------------------

var cssRenderer = new THREE.CSS3DRenderer();
cssRenderer.setSize( window.innerWidth, window.innerHeight );
cssRenderer.domElement.style.position = 'absolute';
cssRenderer.domElement.style.top = 0;
document.body.appendChild( cssRenderer.domElement );

//--------------------------------------------------------------

var bulbLight = new THREE.PointLight( 0xffaabb, 1, 200, 2 );
var bulbGeometry = new THREE.SphereGeometry( 0.02, 2, 2 );
bulbMat = new THREE.MeshStandardMaterial( {
	emissive: 0xffffff,
	emissiveIntensity: 1,
	color: 0x000000
});
bulbLight.add( new THREE.Mesh( bulbGeometry, bulbMat ) );
bulbLight.position.set( 1, 2, 0 );
bulbLight.castShadow = true;
scene.add( bulbLight );

bulbLight.shadow.mapSize.width = 512;  // default
bulbLight.shadow.mapSize.height = 512; // default
bulbLight.shadow.camera.near = 0.5;       // default
bulbLight.shadow.camera.far = 500      // default

//--------------------------------------------------------------

var ay = new THREE.Color(0xffffff);
var aLight = new THREE.AmbientLight( ay, 0.6 ); // soft white light
scene.add( aLight );

//--------------------------------------------------------------

var geo = new THREE.BoxGeometry( 3000, 200, 3000);
var mat = new THREE.MeshStandardMaterial( {color: 0xffffff} );
mat.side = THREE.DoubleSide;
var cylinder = new THREE.Mesh( geo, mat );
cylinder.receiveShadow = true;
scene.add( cylinder );

//--------------------------------------------------------------

var geo2 = new THREE.BoxGeometry( 1, 1, 1 );
var mat2 = new THREE.MeshStandardMaterial( {color:0xf4f4f4} );
var cube = new THREE.Mesh( geo2, mat2 );
cube.castShadow = true;
cube.receiveShadow = true;

/*
scene.add ( cube );
*/


camera.position.z = -3;
camera.position.y = 0;
camera.position.x = 0;

//--------------------------------------------------------------

// create the dom Element
var element = document.createElement( 'video' );
// element.setAttribute("autoplay", true);
// element.setAttribute("loop", true);
// element.width = 100;
// element.height = 100;
// create the object3d for this element
var cssObject = new THREE.CSS3DObject( element );
// we reference the same position and rotation
// cssObject.position = cube.position;
// cssObject.position.z = -100;
// cssObject.rotation = cube.rotation;
// add it to the css scene
 //cssScene.add(cssObject);

//--------------------------------------------------------------

// var cssRenderer = new THREE.CSS3DRenderer();
// cssRenderer.setSize( window.innerWidth, window.innerHeight );
// cssRenderer.domElement.style.position = 'absolute';
// cssRenderer.domElement.style.top = 0;
// document.body.appendChild( cssRenderer.domElement );

//--------------------------------------------------------------

// var element2 = document.createElement( 'video' );
// element2.setAttribute("autoplay", true);
// element2.setAttribute("loop", true);
// element2.width = 100;
// element2.height = 100;
// var cssObject2 = new THREE.CSS3DObject( element2 );
// cssObject2.position = cssObject.position;
// cssObject2.position.z = 100;
// cssObject2.rotation = cssObject.rotation;
// cssScene.add(cssObject2);

//--------------------------------------------------------------

var darkMat = new THREE.MeshStandardMaterial( {color: 0xbe9c91} );
var planeGeo = new THREE.PlaneGeometry(110, 210);
var planeMesh1 = new THREE.Mesh( planeGeo, darkMat );
var planeMesh2 = new THREE.Mesh( planeGeo, darkMat );

darkMat.side = THREE.DoubleSide;

planeMesh1.position.z = 99
planeMesh2.position.z = -99;

scene.add(planeMesh1);
scene.add(planeMesh2);

//--------------------------------------------------------------

// var randomNumber1 = Math.floor(Math.random() * 100);
// var randomNumber2 = Math.floor(Math.random() * 100);
//
//
// getGyfs().then(function(gyfs) {
//
// 	element2.src = gyfs[randomNumber1];
// 	element.src = gyfs[randomNumber2];
//
// })

//--------------------------------------------------------------
getGyfs().then(function(gyfs) {
var wall = function(i, wall, gif_number){

	var gif_element = document.createElement( 'video' );
	gif_element.setAttribute("autoplay", true);
	gif_element.setAttribute("loop", true);
	gif_element.width = 100;
	gif_element.height = 100;
	var gif_cssObject = new THREE.CSS3DObject( gif_element );
	gif_cssObject.position = cssObject.position;


	if (wall){

		gif_cssObject.position.z = 100;

	} else {

		gif_cssObject.position.z = -100;

	}



	gif_cssObject.position.x = i;
	gif_cssObject.rotation = cssObject.rotation;
	cssScene.add(gif_cssObject);



		gif_element.src = gyfs[gif_number];



	var ye = Math.floor(0xffffff * Math.random());

	var darkMat = new THREE.MeshStandardMaterial( {color: ye} );
	var planeGeo = new THREE.PlaneGeometry(110, 210);
	var gif_planeMesh = new THREE.Mesh( planeGeo, darkMat );

	darkMat.side = THREE.DoubleSide;

	gif_planeMesh.position.x = i;

	if (wall){

		gif_planeMesh.position.z = 99;

	} else {

		gif_planeMesh.position.z = -99;

	}


	scene.add(gif_planeMesh);
}

//--------------------------------------------------------------
//Math.floor(Math.random() * 100)


wall(0,false,Math.floor(Math.random() * 100))
wall(0,true,Math.floor(Math.random() * 100))
let distance_from_origin=150

//40 gifs will be displayed
for(i=0;i<10;i++){
	wall(-distance_from_origin,false,Math.floor(Math.random() * 100))
	wall(distance_from_origin,true,Math.floor(Math.random() * 100))
	wall(-distance_from_origin,true,Math.floor(Math.random() * 100))
	wall(distance_from_origin,false,Math.floor(Math.random() * 100))
	distance_from_origin+=150
}
// wall(-150, false, 30);
// wall(150, true, 40);
// wall(-150, true, 32);
// wall(150, false, 23);
// wall(-300, false, 72);
// wall(300, true, 81);
// wall(-300, true, 11);
// wall(300, false, 12);
})
//--------------------------------------------------------------


var pillar_geo = new THREE.CylinderGeometry( 10, 10, 400, 9);

var makePillar = function( i ){

	var ye = Math.floor(0xffffff * Math.random());

	var pillar_mat = new THREE.MeshStandardMaterial( { color: ye } );
	pillar_mat.recieveShadow = true;

	let pillar_mesh1 = new THREE.Mesh( pillar_geo, pillar_mat );
	let pillar_mesh2 = new THREE.Mesh( pillar_geo, pillar_mat );


	pillar_mesh1.position.z =  105;
	pillar_mesh2.position.z = -105;

	pillar_mesh1.position.x = 70 + i * 150;
	pillar_mesh2.position.x = 70 + i * 150;

	scene.add(pillar_mesh1);
	scene.add(pillar_mesh2);

}
//make 40 pillars for 40 images
makePillar(0)
for(i=1;i<10;i++){
	makePillar(i)
	makePillar(-i)
}

// makePillar( 0 );
// makePillar( 1 );
// makePillar( -1 );
// makePillar( 2 );
// makePillar( -2 );
// makePillar( 3 );
// makePillar( -3 );
// makePillar( 4 );
// makePillar( -4 );




//--------------------------------------------------------------
//Spotlight object
var green = new THREE.Color( 0x008000 );
var red = new THREE.Color( 0xff0000 );
var blue = new THREE.Color( 0x0000ff );
var spotLight = new THREE.SpotLight(red);

spotLight.intensity = 2;
spotLight.angle = Math.PI/8;
spotLight.distance = 500;
spotLight.decay = 2;
camera.add(spotLight);
scene.add(camera);

spotLight.position.set(0,0,50);
spotLight.target = camera;

//---------------------------------------------------------------
//Control Scheme

var t = 0.001;

/*
Mousetrap.bind('up',function(){
    forward = true;
},onkeydown);
Mousetrap.bind('up',function(){
    forward = false;
},onkeyup);

Mousetrap.bind('down',function(){
    backward = true;
},onkeypress);
Mousetrap.bind('down',function(){
    backward = false;
},onkeyup);

Mousetrap.bind('left',function(){
    left = true;
},onkeydown);
Mousetrap.bind('left',function(){
    left = false;
},onkeyup);

Mousetrap.bind('right',function(){
    right = true;
},onkeydown);
Mousetrap.bind('right',function(){
    right = false;
},onkeyup);

Mousetrap.bind('space',function(){
    spinToggle = !spinToggle;
})

Mousetrap.bind('up',function(){

},onkeyup)
*/

var spinToggle = false;
var forward = false;
var backward = false;
var left = false;
var right = false;


document.addEventListener('keydown', function(event) {
    //Forward
    if (event.keyCode == 38) {
        forward = true;
    }
    //Backwards
    if (event.keyCode == 40) {
        backward = true;
    }
    //Left
    if (event.keyCode == 37) {
        left = true;
    }
    //Right
    if (event.keyCode == 39) {
        right = true;
    }
    //Spacebar, toggles auto-rotate
    if (event.keyCode == 32) {
        spinToggle = !spinToggle;
    }

    //Bound the camera's z and x position to the shape of the
    //cylinder.

    //NOTE: Dispite the cylinder having a radius of 10, the bounds must be smaller to prevent the camera clipping. Alternative mathod would be to change camera clip distance, but this could have unforseen consequences.
    camera.position.z = Math.min(Math.max(camera.position.z,-40),40);
    camera.position.x = Math.min(Math.max(camera.position.x,-1000),1000);
    //Math.min(Math.max(number,1),20);
}, true);

document.addEventListener('keyup', function(event) {
    //Forward
    if (event.keyCode == 38) {
        forward = false;
    }
    //Backwards
    if (event.keyCode == 40) {
        backward = false;
    }
    //Left
    if (event.keyCode == 37) {
        left = false;
    }
    //Right
    if (event.keyCode == 39) {
        right = false;
    }
}, true);


//------------------------------------------



var t = 0;

// timer for spotlight to change color
var t2 = 0;

var gT = 0;

var addColor = new THREE.Color(0x010101);

var animate = function () {
	requestAnimationFrame( animate );

	gT += 0.04;

	ay.add(addColor);

	if (spinToggle === true){
        t += 0.005;
    }
    if (forward === true){
        camera.position.z -= Math.cos(t)*1.2;
        camera.position.x -= Math.sin(t)*1.2;
    }
    if (backward === true){
        camera.position.z += Math.cos(t)*1.2;
        camera.position.x += Math.sin(t)*1.2;
    }
    if (left === true){
        t += 0.04;
    }
    if (right === true){
        t -= 0.04;
    }


		camera.rotation.x = Math.cos(gT)*0.5;
    camera.rotation.y = t + Math.sin(gT)*0.5;


	t2 += 0.1 ;

	if ( Math.floor(t2) % 9 === 0) {
		spotLight.color = green;
	}

	else if ( Math.floor(t2) % 6 === 0) {
		spotLight.color = red;
	}

	else if ( Math.floor(t2) % 3 === 0) {
		spotLight.color = blue;
	}



	renderer.render( scene, camera );
	cssRenderer.render( cssScene, camera );
};

animate();
